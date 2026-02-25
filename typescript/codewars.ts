export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, cur) => Math.pow(cur, 2) + acc, 0)
}


console.log(squareSum([1,2]))