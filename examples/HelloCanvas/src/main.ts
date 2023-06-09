function main() {
  const canvas = document.querySelector('#example') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl')!; // 获取webGL对象

  gl.clearColor(0, 0, 0, 1); // 指定绘图区域背景颜色 格式为 rgba
  gl.clear(gl.COLOR_BUFFER_BIT); // 使用背景色填充绘图区域
}

window.onload = () => {
  main();
};
export {};
