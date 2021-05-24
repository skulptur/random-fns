// probability of being true
export const randomBoolean = (probability: number, random = Math.random) => {
  return random() < probability
}
