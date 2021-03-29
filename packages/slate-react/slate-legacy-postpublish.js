const fs = require('fs')
const { exec } = require('child_process')

console.log('> This will restore `package.json` file for local development.')

fs.readFile('./package.json', 'utf8', (error, data) => {
  if (!error) {
    // read package contents
    let package = {}
    try {
      package = JSON.parse(data)
    } catch (error) {
      throw console.log('> Error: could not parse `package.json`')
    }

    // Change package name for publication.
    package.name = 'slate-react'
    package.repository = 'git://github.com/ianstormtaylor/slate.git'
    package.description =
      'A set of React components for building completely customizable rich-text editors.'

    // restore package
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
