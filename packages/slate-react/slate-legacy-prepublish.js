const fs = require('fs')
const { exec } = require('child_process')

console.log(
  '> This will prepare a modified copy of package.json to publish `slate-react-legacy` on npm.'
)

fs.readFile('./package.json', 'utf8', (error, data) => {
  if (!error) {
    // create backup

    // read package contents
    let package = {}
    try {
      package = JSON.parse(data)
    } catch (error) {
      throw console.log('> Error: could not parse `package.json`')
    }

    // Change package name for publication.
    package.name = 'slate-react-legacy'
    package.repository = 'git://github.com/dmitrizzle/slate-legacy.git'
    package.description =
      'A maintained legacy (v0.34.3) version fork of Slate.js -matching React components.'

    try {
      fs.writeFile('./package.json', JSON.stringify(package), 'utf8', error => {
        if (error)
          throw '> Error: could not create a backup copy of `package.json` file.'
      })
    } catch (error) {
      throw error
    }
    console.log('> Successfully saved modified `package.json` file.')
    return
  }
  throw error
})
