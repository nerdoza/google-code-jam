// Problem: https://code.google.com/codejam/contest/dashboard?c=3264486#s=p1
// Dependency Sources:
//  run - https://github.com/bayssmekanique/google-code-jam/blob/master/run.js

require('../../../run')((v) => {
  const N = [...v.replace(/(\r\n|\n|\r)/gm, '')].map(v => parseInt(v))
  let result = N.concat()

  let errantDigitIndex = N.findIndex((digit, index, n) => {
    return index > 0 && digit < n[index - 1]
  })

  if (errantDigitIndex > -1) {
    let reducableDigitIndex = 0
    for (let x = errantDigitIndex; x > 0; x--) {
      if (N[x] > N[x - 1]) {
        reducableDigitIndex = x
        break
      }
    }
    result[reducableDigitIndex] = result[reducableDigitIndex] - 1
    for (let x = reducableDigitIndex + 1; x < N.length; x++) {
      result[x] = 9
    }
  }

  if (result[0] === 0) {
    result.shift()
  }

  return result.join('')
})
