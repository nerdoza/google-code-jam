// Problem: https://code.google.com/codejam/contest/6254486/dashboard#s=p0

require('../../../run')((v) => {
  if (parseInt(v) !== 0) {
    let valueCheck = new Array(10).fill(false)

    let isFulfilled = function () {
      return valueCheck.reduce((acc, check) => {
        return acc && check
      }, true)
    }

    let vInt = parseInt(v)
    for (let x = 1; x <= (Number.MAX_SAFE_INTEGER / vInt); x++) {
      let testValue = vInt * x
      let chars = [...testValue.toString()]
      chars.forEach(char => {
        valueCheck[parseInt(char)] = true
      })
      if (isFulfilled()) {
        return testValue
      }
    }
  }
  return 'INSOMNIA'
})
