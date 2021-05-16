import { seedGenerator } from './seedGenerator'

/**
 * Generate seeded random numbers using the mulberry32 algorithm.
 */
export const mulberry32 = (seed: string) => {
  let a = seedGenerator(seed)()

  return () => {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
