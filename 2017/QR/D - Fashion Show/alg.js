// Problem: https://code.google.com/codejam/contest/dashboard?c=3264486#s=p3
// Dependency Sources:
//  colors - https://github.com/Marak/colors.js

require('colors')
const fs = require('fs')
const sourceFileName = process.argv[2]
const resultFileName = process.argv[3]
const startTime = process.hrtime()

const run = function (algorithm) {
  fs.readFile(sourceFileName, 'utf8', function (err, sourceContent) {
    if (err) return console.log((err + '').red)
    let sourceLines = sourceContent.split('\n').map(s => s.replace(/(\r\n|\n|\r)/gm, ''))
    let sourceCount = parseInt(sourceLines[0])
    sourceLines.splice(0, 1)

    let output = ''
    for (let x = 0; x < sourceCount; x++) {
      let M = parseInt(sourceLines[0].split(' ')[1])
      let sourceData = sourceLines.splice(0, M + 1)
      output += 'Case #' + (x + 1) + ': ' + algorithm(sourceData) + '\n'
    }

    fs.writeFile(resultFileName, output, 'utf8', err => {
      if (err) return console.log(('Error: ' + err).red)
      const endTime = process.hrtime(startTime)
      console.log((
        'Success: ' + (sourceCount) +
        ' case' + ((sourceCount > 1) ? 's' : '') +
        ' processed in %ds').green,
        (endTime[0] + (endTime[1] / 1000000000)).toFixed(3)
      )
    })
  })
}

const logGrid = (n, models) => {
  let grid = new Array(n).fill(undefined).map(a => new Array(n).fill('.'))
  models.forEach(m => {
    grid[m.x - 1][m.y - 1] = m.type
  })

  let output = ''
  grid.forEach((row, index) => {
    output += (index ? '\n' : '') + row.join('')
  })
  console.log(output)
}

run((v) => {
  const N = parseInt(v[0].split(' ')[0])
  let models = v.slice(1).map(m => {
    let ms = m.split(' ')
    return { x: parseInt(ms[1]), y: parseInt(ms[2]), type: ms[0] }
  })

  logGrid(N, models)

  let stylePoints = 0 // y
  let modelDelta = 0 // z
})
