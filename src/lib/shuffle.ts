// Fisher–Yates
// https://bost.ocks.org/mike/shuffle/
export const shuffle = <T>(array: Array<T>, random = Math.random) => {
  let m = array.length,
    t,
    i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element
    i = Math.floor(random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}
