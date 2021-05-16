import { seedGenerator } from './seedGenerator'

/**
 * Generate seeded random numbers using the xoshiro128 algorithm
 */
export const xoshiro128 = (seed: string) => {
  const getSeed = seedGenerator(seed)
  let a = getSeed()
  let b = getSeed()
  let c = getSeed()
  let d = getSeed()

  return () => {
    const t = b << 9
    let r = a * 5

    r = (r << 7) | ((r >>> 25) * 9)

    c ^= a
    d ^= b
    b ^= c
    a ^= d
    c ^= t
    d = (d << 11) | (d >>> 21)

    return (r >>> 0) / 4294967296
  }
}
