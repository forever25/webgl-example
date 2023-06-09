export function initShaders(gl: WebGLRenderingContext, vshader: string, fshader: string) {
  const program = createProgram(gl, vshader, fshader);

  gl.useProgram(program);

  return program;
}

function createProgram(gl: WebGLRenderingContext, vshader: string, fshader: string) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);

  const program = gl.createProgram()!;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);

  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!linked) {
    var info = gl.getProgramInfoLog(program);
    throw 'WebGL program 不能编译。\n\n' + info;
  }

  return program;
}

function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  return shader;
}
