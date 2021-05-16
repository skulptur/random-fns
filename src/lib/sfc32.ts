import { seedGenerator } from './seedGenerator'

/**
 * Generate seeded random numbers using the sfc32 algorithm
 */
export const sfc32 = (seed: string) => {
  const getSeed = seedGenerator(seed)
  let a = getSeed()
  let b = getSeed()
  let c = getSeed()
  let d = getSeed()

  return () => {
    a >>>= 0
    b >>>= 0
    c >>>= 0
    d >>>= 0

    let t = (a + b) | 0

    a = b ^ (b >>> 9)
    b = (c + (c << 3)) | 0
    c = (c << 21) | (c >>> 11)
    d = (d + 1) | 0
    t = (t + d) | 0
    c = (c + t) | 0

    return (t >>> 0) / 4294967296
  }
}
