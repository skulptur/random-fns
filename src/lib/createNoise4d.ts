import { makeNoise4D } from 'open-simplex-noise'

export const createNoise4d = makeNoise4D as (
  seed: number
) => (a: number, b: number, c: number, t: number) => number
