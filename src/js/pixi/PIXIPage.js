import { } from "pixi.js"
import SpriteController from "../pixi/SpriteController"

class PIXIPage {

   constructor() {
      this.isCreated = false
      this.app = null
      this.onResize = this.onResize.bind(this)
      this.defaultSize = {width: 1920, height: 1080}
   }

   create() {
      if(this.app) {
         return
      }

      const { width, height } = this.defaultSize
      this.app = new PIXI.Application(width, height, {backgroundColor : 0x000000}) //0x333333
      document.body.appendChild(this.app.view)
      this.spriteController = new SpriteController(this.app)
      window.addEventListener("resize", this.onResize)
   }

   render() {
      this.onResize()
      this.spriteController.generate()
   }

   setTargetColor(color) {
      this.spriteController.setTargetColor(color)
   }

   onResize() {
      const { width, height } = this.defaultSize
      var ratio = width / height;
      this.app.renderer.view.style.width = window.innerWidth + 'px';
      this.app.renderer.view.style.height = window.innerHeight + 'px';
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
      this.spriteController.resize(window.innerWidth, window.innerHeight)
   }

   destroy() {
      window.removeEventListener("resize", this.onResize);
   }
}

const pixi = new PIXIPage
export default pixi