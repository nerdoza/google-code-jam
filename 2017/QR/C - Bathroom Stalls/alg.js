// Problem: https://code.google.com/codejam/contest/dashboard?c=3264486#s=p3
// Dependency Sources:
//  run - https://github.com/bayssmekanique/google-code-jam/blob/master/run.js
//  big-integer - https://github.com/peterolson/BigInteger.js

const BigInt = require('big-integer')

require('../../../run')((v) => {
  const InitialStallCount = BigInt(v.split(' ')[0]) // N
  const InitialQueueCount = BigInt(v.split(' ')[1]) // K

  let gaps = [{ size: InitialStallCount, quantity: BigInt(1) }]
  let queueCount = BigInt(InitialQueueCount)
  console.log('Starting: ' + v)

  while (true) {
    gaps.sort((a, b) => b.size.minus(a.size))
    let currentGap = gaps.shift()

    if (queueCount.minus(currentGap.quantity).leq(0)) {
      let div = currentGap.size.minus(1).divmod(2)
      let max = BigInt(div.quotient).plus(div.remainder.gt(0) ? 1 : 0)
      let min = div.quotient
      return max.toString() + ' ' + min.toString()
    }

    let div = currentGap.size.minus(1).divmod(2)
    let newGaps = []
    newGaps.push(BigInt(div.quotient).plus(div.remainder.gt(0) ? 1 : 0))
    newGaps.push(div.quotient)
    newGaps.forEach(targetGap => {
      if (targetGap.gt(0)) {
        let gapTracker = gaps.find(g => g.size === targetGap)
        if (!gapTracker) {
          gapTracker = { size: targetGap, quantity: BigInt(0) }
          gaps.push(gapTracker)
        }
        gapTracker.quantity = gapTracker.quantity.plus(currentGap.quantity)
      }
    })

    queueCount = queueCount.minus(currentGap.quantity)
  }
})
