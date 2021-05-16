import { makeNoise3D } from 'open-simplex-noise'

export const createNoise3d = makeNoise3D as (
  seed: number
) => (a: number, b: number, t: number) => number
