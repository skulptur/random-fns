export const diffuse = (amount: number, value: number): number => {
  const offset = (Math.random() - 0.5) * amount
  return value + offset
}
