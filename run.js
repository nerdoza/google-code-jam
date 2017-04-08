require('colors')
const fs = require('fs')
const sourceFileName = process.argv[2]
const resultFileName = process.argv[3]
const startTime = process.hrtime()

var run = function (algorithm) {
  fs.readFile(sourceFileName, 'utf8', function (err, sourceContent) {
    if (err) return console.log((err + '').red)
    let sourceLines = sourceContent.split('\n')
    let sourceCount = parseInt(sourceLines[0])
    let sourceInputs = sourceLines.splice(1, sourceCount)

    let output = ''
    sourceInputs.forEach((input, index) => {
      output += 'Case #' + (index + 1) + ': ' + algorithm(input) + '\n'
    })

    fs.writeFile(resultFileName, output, 'utf8', err => {
      if (err) return console.log(('Error: ' + err).red)
      const endTime = process.hrtime(startTime)
      console.log((
        'Success: ' + (sourceInputs.length) +
        ' case' + ((sourceInputs.length > 1) ? 's' : '') +
        ' processed in %ds').green,
        (endTime[0] + (endTime[1] / 1000000000)).toFixed(3)
      )
    })
  })
}

module.exports = run
