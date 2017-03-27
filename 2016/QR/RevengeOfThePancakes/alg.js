// Problem: https://code.google.com/codejam/contest/6254486/dashboard#s=p1

require('../../../run')((v) => {
  let chars = [...v.replace(/(\r\n|\n|\r)/gm, '')]
  let stackState = chars.map(r => { return r === '+' })
  let flipCount = 0

  let isFulfilled = function () {
    return stackState.reduce((acc, state) => {
      return acc && state
    }, true)
  }

  let flipStack = function (count) {
    flipCount++
    let flipPortion = stackState.slice(0, count).reverse().map(p => !p)
    Array.prototype.splice.apply(stackState, [0, flipPortion.length].concat(flipPortion))
  }

  while (!isFulfilled()) {
    // Start at the bottom
    let lastFalseIndex = stackState.lastIndexOf(false)

    // Check the first item
    // If first item if already false perform flip right away
    if (stackState[0] === true) {
      // If the first item is true, check for other consecutive trues to flip
      let flipToIndex = stackState.reduce((acc, val, index) => {
        if (val === true && acc === index - 1) {
          return index
        }
        return acc
      }, 0)
      flipStack(flipToIndex + 1)
    }
    flipStack(lastFalseIndex + 1)
  }
  if (isFulfilled()) return flipCount
})
