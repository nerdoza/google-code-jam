// Problem: https://code.google.com/codejam/contest/6254486/dashboard#s=p3
const BigInt = require('big-integer')

require('../../../run')((v) => {
  const IMPOSSIBLE = 'IMPOSSIBLE'
  const K = parseInt(v.split(' ')[0])
  const C = parseInt(v.split(' ')[1])
  const S = parseInt(v.split(' ')[2])

  if (C === 1 || K === 1) {
    if (S < K) return IMPOSSIBLE
    return [...Array(K)].map((x, i) => i + 1).join(' ')
  }

  if (S < Math.ceil(K / C)) return IMPOSSIBLE
  let tiles = []
  for (let p = 0; p <= S; p++) {
    // tiles.push(BigInt(K).pow(C - 1).multiply(p).add(p).add(2).toString())
  }
  return tiles.join(' ')
})
