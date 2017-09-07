
const h2rgb = (hex) => {
   return {r: (hex >> 16), g: (hex >> 8 & 0x00FF), b: (hex & 0x0000FF)}
}

const rgb2h = (rgb) => {
   return (rgb.b | (rgb.g << 8) | (rgb.r << 16))
}

const rgbadd = (color1, color2) => {
   return {r: color1.r + color2.r, g: color1.g + color2.g, b:  color1.b + color2.b}
}

const Util = {
   hex2rgb: h2rgb,
   rgb2hex: rgb2h,
   rgbsum: rgbadd,
}

export const hex2rgb = Util.hex2rgb
export const rgb2hex = Util.rgb2hex
export const rgbsum = Util.rgbsum
export default Util