// Problem: https://code.google.com/codejam/contest/6254486/dashboard#s=p3
const BigInt = require('big-integer')

require('../../../run')((v) => {
  const IMPOSSIBLE = 'IMPOSSIBLE'
  const K = parseInt(v.split(' ')[0])
  const C = parseInt(v.split(' ')[1])
  const S = parseInt(v.split(' ')[2])

  if (S * C < K) return IMPOSSIBLE

  let tiles = []
  for (let i = 0; i < K; i += C) {
    let idx = BigInt(0)
    let current = i

    for (let j = 0; j < C; j++) {
      idx = idx.multiply(K).add(current)
      if (current < K - 1) current++
    }

    tiles.push(idx.plus(1).toString())
  }

  return tiles.join(' ')
})
