
let kata = []
function altcaps(words) {
  const letters = words.toString('utf8')
  const methods = ['Upper', 'Lower']
  var idx = 0
  var midx = (Math.random() * 100) | 0
  var newstring = ''
  var letter
  for (; idx < letters.length; idx++) {
    letter = letters[idx]
    newstring += (letter.match(/\s/))
      ? letter
      : letter['to' + methods[midx++ % 2] + 'Case']()
  }
  return newstring

}

console.log(altcaps('abcdef'))