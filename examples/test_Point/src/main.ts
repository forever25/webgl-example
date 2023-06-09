window.onload = () => {
  main()
}

const VSHADER_SOURCE = `
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 20;
}
`

const FSHADER_SOURCE = `
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`


function main() {
  const canvas = document.querySelector("#example") as HTMLCanvasElement;
  const gl = canvas.getContext('webgl')!;



  // 创建shader程序
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vertexShader, `
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
`)
  gl.compileShader(vertexShader)

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fragmentShader, `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); 
  } 
`)
  gl.compileShader(fragmentShader)

  const program = gl.createProgram()!
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  // 使用program
  gl.useProgram(program)

  // 获取位置属性位置
  const positionLocation = gl.getAttribLocation(program, 'position')

  // 顶点数组
  const vertices = [
    0.5, 0.5,  // 顶点1
    -0.5, 0.5, // 顶点2
    0.5, -0.5, // 顶点3
    -0.5, -0.5  // 顶点4
  ]

  // 创建缓冲并绑定到ARRAY_BUFFER
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

  // 指定位置属性的数据来源是当前绑定的ARRAY_BUFFER
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(positionLocation)

  // 绘图
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)


}



export { }