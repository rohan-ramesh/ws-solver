var puzzle
var words
var begin

function find(word, x, y) {
  for (let dir = 0; dir < 8; dir++) {
    let cx = x
    let cy = y
    for (let i = 0; ; i++) {
      if (
        cx < 0 || cx >= puzzle[0].length ||
        cy < 0 || cy >= puzzle.length ||
        word[i] !== puzzle[cy][cx]
      ) {
        break
      }
      if ([1, 2, 3].includes(dir)) {
        cx++
      }
      if ([5, 6, 7].includes(dir)) {
        cx--
      }
      if ([3, 4, 5].includes(dir)) {
        cy++
      }
      if ([7, 0, 1].includes(dir)) {
        cy--
      }
      if (i === word.length - 1) {
        return true
      }
    }
  }
  return false
}

function solve() {
  puzzle = document.getElementById('puzzle').value.split('\n')
  words = document.getElementById('words').value.split('\n')
  document.getElementById('output').value = ''
  begin = new Date()
  for (let word of words) {
    document.getElementById('output').value += (
      `Begin searching for ${word}.\n`
    )
    let found = false
    for (let y = 0; y < puzzle.length; y++) {
      for (let x = 0; x < puzzle[0].length; x++) {
        if (find(word, x, y)) {
          document.getElementById('output').value += (
            `Found ${word} at (${x + 1}, ${y + 1})!\n`
          )
          found = true;
          break
        }
      }
      if (found) {
        break
      }
    }
  }
  document.getElementById('output').value += (
  `Completed in ${new Date() - begin} ms!\n`
  )
}