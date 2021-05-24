export const randomInteger = (min: number, max: number, random = Math.random) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(random() * (max - min + 1)) + min
}
