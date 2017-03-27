// Problem: https://code.google.com/codejam/contest/6254486/dashboard#s=p2
const BigInt = require('../../../biginteger.js').BigInteger

require('../../../run')((v) => {
  const CoinLength = parseInt(v.split(' ')[0])
  const NumberOfCoins = parseInt(v.split(' ')[1])
  const BinaryMin = Math.pow(2, CoinLength - 1) + 1
  const BinaryMax = Math.pow(2, CoinLength) - 1
  const DivisorMax = 100

  let output = ''
  let validCount = 0

  let isFulfilled = function () {
    return validCount === NumberOfCoins
  }

  let getDivisor = (n) => {
    for (let x = 2; x < Math.min(DivisorMax, n.toJSValue()); x++) {
      if (n.divRem(x)[1].toJSValue() === 0) return x
    }
    return false
  }

  let getDivisors = (n) => {
    const binaryN = n.toString(2)
    let divisors = ''
    for (let base = 2; base <= 10; base++) {
      let divisor = getDivisor(BigInt.parse(binaryN, base))
      if (divisor === false) return false
      divisors += divisor + ((base !== 10) ? ' ' : '')
    }
    return divisors
  }

  for (let n = BinaryMin; n <= BinaryMax; n += 2) {
    let divisors = getDivisors(n)
    if (divisors !== false) {
      validCount++
      output += '\n' + n.toString(2) + ' ' + divisors
    }
    if (isFulfilled()) return output
  }

  throw new Error('could not resolve in given range')
})
