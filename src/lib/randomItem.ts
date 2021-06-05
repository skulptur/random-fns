import { toIndex } from 'unit-fns'

export const randomItem = <T>(items: Array<T>, random = Math.random): T => {
  return items[toIndex(random(), items.length)]
}
