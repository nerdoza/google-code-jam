require('colors')
var fs = require('fs')
var sourceFileName = process.argv[2]
var resultFileName = process.argv[3]

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
      console.log(('Success: ' + (sourceInputs.length) + ' line' + ((sourceInputs.length > 1) ? 's' : '') + ' processed').green)
    })
  })
}

module.exports = run
