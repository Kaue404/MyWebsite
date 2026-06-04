"use client"

import { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Triangle } from "ogl"
import "./Plasma.css"

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 0.5, 0.2]
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ]
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`

export const Plasma = ({
  color = "#ffffff",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}) => {
  const containerRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return
    const containerEl = containerRef.current

    const useCustomColor = color ? 1.0 : 0.0
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1]

    const directionMultiplier = direction === "reverse" ? -1.0 : 1.0

    let renderer
    try {
      renderer = new Renderer({
        webgl: 2,
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      })
    } catch {
      return
    }
    const gl = renderer.gl
    if (!gl) return
    const canvas = gl.canvas
    canvas.style.display = "block"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    containerEl.appendChild(canvas)

    const geometry = new Triangle(gl)

    const program = new Program(gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 },
      },
    })

    const mesh = new Mesh(gl, { geometry, program })

    const handleMouseMove = (e) => {
      if (!mouseInteractive) return
      const rect = containerEl.getBoundingClientRect()
      mousePos.current.x = e.clientX - rect.left
      mousePos.current.y = e.clientY - rect.top
      const mouseUniform = program.uniforms.uMouse.value
      mouseUniform[0] = mousePos.current.x
      mouseUniform[1] = mousePos.current.y
    }

    if (mouseInteractive) {
      containerEl.addEventListener("mousemove", handleMouseMove)
    }

    const setSize = () => {
      const rect = containerEl.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      renderer.setSize(width, height)
      const res = program.uniforms.iResolution.value
      res[0] = gl.drawingBufferWidth
      res[1] = gl.drawingBufferHeight
    }

    const ro = new ResizeObserver(setSize)
    ro.observe(containerEl)
    setSize()

    let contextLost = false
    let isVisible = false
    let raf = 0
    const t0 = performance.now()

    const loop = (t) => {
      raf = 0
      if (contextLost || !isVisible || document.hidden) return
      let timeValue = (t - t0) * 0.001
      if (direction === "pingpong") {
        const pingpongDuration = 10
        const segmentTime = timeValue % pingpongDuration
        const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0
        const u = segmentTime / pingpongDuration
        const smooth = u * u * (3 - 2 * u)
        const pingpongTime = isForward
          ? smooth * pingpongDuration
          : (1 - smooth) * pingpongDuration
        program.uniforms.uDirection.value = 1.0
        program.uniforms.iTime.value = pingpongTime
      } else {
        program.uniforms.iTime.value = timeValue
      }
      renderer.render({ scene: mesh })
      raf = requestAnimationFrame(loop)
    }

    const stopLoop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const startLoop = () => {
      if (raf || contextLost || !isVisible || document.hidden) return
      setSize()
      raf = requestAnimationFrame(loop)
    }

    const syncVisibility = () => {
      const rect = containerEl.getBoundingClientRect()
      isVisible =
        !document.hidden &&
        rect.width > 0 &&
        rect.height > 0 &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= window.innerHeight &&
        rect.left <= window.innerWidth

      if (isVisible) {
        startLoop()
      } else {
        stopLoop()
      }
    }

    const handleContextLost = (e) => {
      e.preventDefault()
      contextLost = true
      stopLoop()
    }
    const handleContextRestored = () => {
      contextLost = false
      syncVisibility()
    }
    canvas.addEventListener("webglcontextlost", handleContextLost)
    canvas.addEventListener("webglcontextrestored", handleContextRestored)

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && !document.hidden
        if (isVisible) {
          startLoop()
        } else {
          stopLoop()
        }
      },
      { threshold: 0 }
    )
    io.observe(containerEl)

    window.addEventListener("focus", syncVisibility)
    window.addEventListener("pageshow", syncVisibility)
    window.addEventListener("popstate", syncVisibility)
    window.addEventListener("hashchange", syncVisibility)
    window.addEventListener("resize", syncVisibility)
    document.addEventListener("visibilitychange", syncVisibility)

    const visibilityInterval = window.setInterval(syncVisibility, 500)
    syncVisibility()

    return () => {
      stopLoop()
      ro.disconnect()
      io.disconnect()
      clearInterval(visibilityInterval)
      window.removeEventListener("focus", syncVisibility)
      window.removeEventListener("pageshow", syncVisibility)
      window.removeEventListener("popstate", syncVisibility)
      window.removeEventListener("hashchange", syncVisibility)
      window.removeEventListener("resize", syncVisibility)
      document.removeEventListener("visibilitychange", syncVisibility)
      canvas.removeEventListener("webglcontextlost", handleContextLost)
      canvas.removeEventListener("webglcontextrestored", handleContextRestored)
      if (mouseInteractive && containerEl) {
        containerEl.removeEventListener("mousemove", handleMouseMove)
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext()
      try {
        containerEl?.removeChild(canvas)
      } catch {}
    }
  }, [color, speed, direction, scale, opacity, mouseInteractive])

  return <div ref={containerRef} className="plasma-container" />
}

export default Plasma
