
const h2rgb = (hex) => {
   return {r: (hex >> 16), g: (hex >> 8 & 0x00FF), b: (hex & 0x0000FF)}
}

const rgb2h = (rgb) => {
   return (rgb.b | (rgb.g << 8) | (rgb.r << 16))
}

const Util = {
   hex2rgb: h2rgb,
   rgb2hex: rgb2h
}

export const hex2rgb = Util.hex2rgb
export const rgb2hex = Util.rgb2hex
export default Util