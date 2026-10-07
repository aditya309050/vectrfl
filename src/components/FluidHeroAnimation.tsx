import React, { useEffect, useRef } from 'react';

interface FluidHeroAnimationProps {
  isPlaying: boolean;
}

export const FluidHeroAnimation: React.FC<FluidHeroAnimationProps> = ({ isPlaying }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const pausedTimeRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Try WebGL first
    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance'
    });

    if (!gl) {
      console.warn('WebGL not supported, falling back to 2D');
      return;
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = 1.0 - e.clientY / window.innerHeight;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX / window.innerWidth;
        mouseRef.current.targetY = 1.0 - e.touches[0].clientY / window.innerHeight;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Vertex Shader
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // High-End Liquid Obsidian & Dark Molten Chrome Fragment Shader
    const fsSource = `
      precision highp float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      // Smooth noise and fractal domain warping
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                           -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Multi-octave domain warped FBM for viscous silk ripples
      float fbm(vec2 p) {
        float total = 0.0;
        float amp = 0.55;
        float freq = 1.0;
        for (int i = 0; i < 5; i++) {
          total += snoise(p * freq) * amp;
          freq *= 2.05;
          amp *= 0.48;
        }
        return total;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 st = vec2(uv.x * aspect, uv.y);

        // Interactive mouse gravity wave
        vec2 mouseSt = vec2(u_mouse.x * aspect, u_mouse.y);
        float mouseDist = length(st - mouseSt);
        float mouseWave = sin(mouseDist * 14.0 - u_time * 3.0) * exp(-mouseDist * 3.5) * 0.22;

        float t = u_time * 0.18;

        // Domain Warping: Layer 1
        vec2 q = vec2(
          fbm(st * 1.35 + vec2(t * 0.4, t * 0.3) + mouseWave),
          fbm(st * 1.35 + vec2(t * -0.3, t * 0.5) - mouseWave)
        );

        // Domain Warping: Layer 2
        vec2 r = vec2(
          fbm(st * 1.8 + 2.4 * q + vec2(1.7, 9.2) + 0.15 * t),
          fbm(st * 1.8 + 2.4 * q + vec2(8.3, 2.8) - 0.12 * t)
        );

        // Final Fluid Density Value
        float f = fbm(st * 1.4 + 3.2 * r + t * 0.2);

        // Compute surface normal for realistic 3D specular shine
        float eps = 0.012;
        float fx = fbm((st + vec2(eps, 0.0)) * 1.4 + 3.2 * r) - f;
        float fy = fbm((st + vec2(0.0, eps)) * 1.4 + 3.2 * r) - f;
        vec3 normal = normalize(vec3(-fx / eps, -fy / eps, 1.25));

        // Directional Studio Lighting
        vec3 lightDir = normalize(vec3(-0.6, 0.7, 0.85));
        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 halfDir = normalize(lightDir + viewDir);

        float diffuse = max(dot(normal, lightDir), 0.0);
        float specular = pow(max(dot(normal, halfDir), 0.0), 32.0);
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

        // Luxury Studio Color Palette:
        // Deep Obsidian Black -> Royal Indigo Blue -> Electric Cyan/Lavender Highlights
        vec3 cObsidian = vec3(0.015, 0.02, 0.06);     // #040510
        vec3 cDeepBlue = vec3(0.06, 0.18, 0.55);      // #0F32DC (Kavix Blue)
        vec3 cElectricCyan = vec3(0.25, 0.75, 0.98);  // #57cdff
        vec3 cVioletGlow = vec3(0.55, 0.35, 0.95);    // Soft Violet sheen

        // Gradient Color Mapping
        vec3 col = mix(cObsidian, cDeepBlue, clamp(f * f * 1.8, 0.0, 1.0));
        col = mix(col, cElectricCyan, clamp(length(q) * 0.55, 0.0, 1.0));
        col = mix(col, cVioletGlow, clamp(length(r.x) * 0.45, 0.0, 1.0));

        // Apply Diffuse & Specular Lighting
        col += diffuse * cDeepBlue * 0.4;
        col += specular * vec3(0.9, 0.95, 1.0) * 0.85; // Crisp Chrome Shine
        col += fresnel * cElectricCyan * 0.45;           // Silky Edge Sheen

        // Subtle Ambient Vignette
        float vignette = smoothstep(1.3, 0.3, length(uv - 0.5));
        col *= vignette * 0.95 + 0.05;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    const render = () => {
      const now = Date.now();
      if (isPlaying) {
        pausedTimeRef.current += (now - lastTimeRef.current) * 0.001;
      }
      lastTimeRef.current = now;

      // Mouse smoothing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, pausedTimeRef.current);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      gl.deleteProgram(program);
    };
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ display: 'block' }}
    />
  );
};
