import fs from 'fs'

const input = fs.readFileSync('day1/input.txt', 'utf-8').split('\n\n')

const elves = input
  .map((x) =>
    x
      .split('\n')
      .map((x) => +x)
      .reduce((a, b) => a + b)
  )
  .sort((a, b) => b - a)

const solution = (elvesTotal: number[], top: number = 1) => {
  const total = elvesTotal.slice(0, top).reduce((a, b) => a + b)

  return total
}

console.log(`Part 1: ${solution(elves)}`)
console.log(`Part 2: ${solution(elves, 3)}`)
