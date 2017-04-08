// Problem: https://code.google.com/codejam/contest/3264486/dashboard#s=p0
// Dependency Sources:
//    run - https://github.com/bayssmekanique/google-code-jam/blob/master/run.js

const IMPOSSIBLE = 'IMPOSSIBLE'

require('../../../run')((v) => {
  const InitialStackState = [...(v.split(' ')[0])] // S
  const FlipperSize = parseInt(v.split(' ')[1]) // K

  let stackState = InitialStackState.map(p => { return p === '+' })
  let flipCount = 0

  // console.log('---------------------------------------------')
  // console.log('Starting: ' + stackState.map(p => p ? '+' : '-').join(''))

  let flip = function (index) { // zero-indexed
    flipCount++
    for (let x = index; x < index + FlipperSize; x++) {
      stackState[x] = !stackState[x]
    }
  }

  let isFulfilled = function () {
    return stackState.reduce((acc, state) => {
      return acc && state
    }, true)
  }

  if (FlipperSize > stackState.length) {
    return IMPOSSIBLE
  }

  while (flipCount < stackState.length * 2) {
    let flipIndex = stackState.indexOf(false) // First blank pancake (RTL)
    if (flipIndex !== -1) {
      if (flipIndex + FlipperSize > stackState.length) {
        flipIndex = stackState.length - FlipperSize
      }
      // console.log('Flipping: ' + flipIndex + ' of ' + stackState.map(p => p ? '+' : '-').join(''))
      flip(flipIndex)
      // console.log('Result: ' + stackState.map(p => p ? '+' : '-').join(''))
    }

    if (isFulfilled()) {
      return flipCount
    }
  }

  return IMPOSSIBLE
})
