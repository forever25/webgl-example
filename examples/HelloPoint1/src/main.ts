import { initShaders } from '../../../libs/webgl-utils';

const VSHADER_SOURCE = `
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 20.0;
}
`;

const FSHADER_SOURCE = `
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;

function main() {
  const canvas = document.querySelector('#example') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl')!;

  const program = initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

  gl.clearColor(1, 1, 1, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.POINTS, 0, 1);
}

window.onload = () => {
  main();
};

export {};
