/**
 * Generate a hash from a string that is suitable to use as a seed for any of the seeded PRNG
 */
export const seedGenerator = (seed: string) => {
  let h = 2166136261 >>> 0

  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  }

  return (): number => {
    h += h << 13
    h ^= h >>> 7
    h += h << 3
    h ^= h >>> 17

    return (h += h << 5) >>> 0
  }
}
