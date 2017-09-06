import { } from "pixi.js"
import OrbitSprite from "../pixi/OrbitSprite"

const closestOrbit = 40 
const orbitIncrement = 40
const maxOrbits = 15
const bodiesPerOrbit = 8

export default class SriteController {

   constructor(app) {
      this.app = app
      this.sprites = []

      this.spriteTexture = PIXI.Texture.fromCanvas(this.makeSpriteCanvas())

      this.layer = new PIXI.Container()
      this.tick = this.tick.bind(this)
   }

   getSprites() {
      return this.sprites
   }

   generate() {
      var currentOrbit = closestOrbit
      var radialIncrement = 2 * Math.PI / bodiesPerOrbit;
      
      for(var i = 0; i < maxOrbits; i++) {
         
         for(var j = 0; j < bodiesPerOrbit; j++) {
            
            //angle
            var theta = (Math.random() * (j+1) * radialIncrement) + (j * radialIncrement);
            
            //size
            var maxSize = 5; 
            var minSize = 1;
            var distOffset = i / maxOrbits;
            var scale = (Math.random() * (maxSize - minSize) * distOffset) + minSize;

            //color
            // var color = new Color('white') - BigBang.deepestBlue * Math.random() * distOffset;
            //var color = new Color('white')
            var color = 0x00ffff;
            //BigBang.bodies.push(new OrbitalBody(theta, closestOrbit, size, color));
            const sprite = new OrbitSprite({
               theta, scale, color,
               orbitRadius: currentOrbit,
               texture: this.spriteTexture
            })
            
            this.sprites.push(sprite)
            this.layer.addChild(sprite.sprite)
            sprite.positionInContainer(this.app.renderer)
         }
         
         currentOrbit += orbitIncrement;
      }



      this.app.stage.addChild(this.layer)
            
      // Listen for animate update
      this.startTime = new Date
      this.lastTime = this.startTime
      this.app.ticker.add(this.tick);
   }

   resize(w, h) {
      console.log(`SpriteController.resize(${w}, ${h})`)
      //this.layer.width = this.app.renderer.width
      //this.layer.height = this.app.renderer.height
      //this.layer.x = 0;
      //this.layer.y = 0;

      for(let sprite of this.sprites) {
         sprite.positionInContainer(this.app.renderer)
      }
   }

   tick() {
      //console.log(delta)
      const seconds = ((new Date) - this.startTime) / 1000
      const delta = ((new Date) - this.lastTime) / 1000
      
      const bang = {
         hasOccurred: (seconds > 2),
         percentage: Math.min((seconds - 2) / 1.2, 1)
      }

      for(let sprite of this.sprites) {
         sprite.tick({
            container: this.app.renderer,
            bang
         }, delta)
      }

      this.lastTime = (new Date)
   }

   destroy() {
      for(const sprite of this.sprites) {
         sprite.destroy()
      }
      this.sprites = []
   }

   makeSpriteCanvas() {
      const nodeWidth = 256 // magic # (must be power of 2)
      const nodeHeight = nodeWidth // square
      const nodeRadius = nodeWidth / 2 - 4 // magic #

      const x = nodeWidth / 2
      const y = nodeHeight / 2
      const canvas = this.makeCanvas(nodeWidth, nodeHeight)
      const context = canvas.context
      context.beginPath()
      context.moveTo(x + 4, y)
      context.arc(x, y, nodeRadius, 0, 2 * Math.PI)
      context.fillStyle = 'rgba(255, 255, 255, 1)'
      context.fill()
      context.strokeStyle = 'rgba(255, 255, 255, 1)'
      context.stroke()
      return canvas.element
   }

   // Create a canvas element
   makeCanvas(width, height) {
      const element = document.createElement('canvas')
      const context = element.getContext('2d')
      element.width = width
      element.height = height
      return { element, context }
   }

}