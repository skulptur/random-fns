import { makeNoise2D } from 'open-simplex-noise'

export const createNoise2d = makeNoise2D as (seed: number) => (a: number, t: number) => number
