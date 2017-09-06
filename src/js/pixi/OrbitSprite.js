import { } from "pixi.js"

const nodeScale = 0.05
const initialRadius = 40
const initialVelocity = 2 * Math.PI

export default class OrbitSprite {

   constructor({
      theta = 0, 
      orbitRadius = 40, 
      scale = 1, 
      color = 0xFFFFFF,
      texture,
   }) {
      
      this.initialConditions = {
         color: color,
         scale: 1,
         velocity: initialVelocity,
         radius: initialRadius,
         theta: theta
      }

      this.stableConditions = {
         color: color,
         radius: orbitRadius,
         scale: scale,
         velocity: (Math.PI * ( 40 / orbitRadius))
      }

      this.conditions = {
         color: this.initialConditions.color,
         scale: this.initialConditions.scale,
         velocity: this.initialConditions.velocity
      }

      this.position = {
         radius: this.initialConditions.radius,
         theta: this.initialConditions.theta
      }

      var sprite = new PIXI.Sprite(texture)
      sprite.tint = color //colorToHex(this.colorScale(node.scale))
      sprite.scale.x = nodeScale * this.initialConditions.scale
      sprite.scale.y = nodeScale * this.initialConditions.scale

      this.sprite = sprite
   }

   positionInContainer(container) {
      const x = Math.cos(this.position.theta) * this.position.radius + container.width / 2
      const y = Math.sin(this.position.theta) * this.position.radius + container.height / 2
      this.sprite.position.x = x
      this.sprite.position.y = y
   }
 
   stabilize(variable, percentage) {
      return (percentage * (this.stableConditions[variable] - this.initialConditions[variable])) + this.initialConditions[variable]
   }


   // t is time in seconds
   tick(context, delta) {
      const { bang, container, color, tick } = context

      // deal with color
      if(color && this.sprite.tint !== color) {
         this.sprite.tint = this.colorStep(this.sprite.tint, color, tick)
      }

      // expand universe
      if(bang.hasOccurred) {
         this.conditions.velocity = this.stabilize('velocity', bang.percentage)
         this.conditions.scale = this.stabilize('scale', bang.percentage)
         this.position.radius = this.stabilize('radius', bang.percentage)
         this.sprite.scale.x = nodeScale * this.conditions.scale
         this.sprite.scale.y = nodeScale * this.conditions.scale
      }

      this.position.theta = (this.position.theta + this.conditions.velocity * delta) % (2 * Math.PI)
      this.positionInContainer(container)
   }

   colorStep(fromColor, toColor, tick) {
      const f = {r: (fromColor >> 16), g: (fromColor >> 8 & 0x00FF), b: (fromColor & 0x0000FF)}
      const t = {r: (toColor >> 16), g: ((toColor >> 8) & 0x00FF), b: (toColor & 0x0000FF)}
      const diff = {r: (t.r - f.r), g: (t.g - f.g), b: (t.b - f.b)}
      const step = {
         r: Math.min(Math.max(diff.r, -1), 1),
         g: Math.min(Math.max(diff.g, -1), 1),
         b: Math.min(Math.max(diff.b, -1), 1)
      }
      const color = {r: (f.r + step.r), g: (f.g + step.g), b: (f.b + step.b)}
      const newColor = (color.b | (color.g << 8) | (color.r << 16))
      return newColor
   }

   destroy() {
      this.sprite.destroy()
   }

}