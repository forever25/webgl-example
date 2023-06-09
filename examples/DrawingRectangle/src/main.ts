window.onload = () => {
  main()
}


function main() {
  const canvas = document.querySelector("#example") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!

  ctx.fillStyle = 'rgb(0,0,255)';
  ctx.fillRect(100, 100, 200, 200)
}

export { }