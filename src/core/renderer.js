class Renderer {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
  
      if (!this.gl) {
        console.error("WebGL not supported.");
        return;
      }
  
      this.resizeCanvas();
      window.addEventListener("resize", () => this.resizeCanvas());
    }
  
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
  
    clear() {
      this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }
  
    renderScene(scene) {
      // Future code for rendering a 3D scene
      this.clear();
      scene.render(this.gl);
    }
  }
  
  export default Renderer;
  