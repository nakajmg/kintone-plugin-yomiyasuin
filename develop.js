const debounce = require("lodash.debounce")
const runAll = require("npm-run-all")
const chokidar = require("chokidar")

const build = debounce(() => {
  return runAll(["compile", "pack"], {
    stdout: process.stdout,
    stdin: process.stdin,
  }).catch(({ results }) => {
    results
      .filter(({ code }) => code)
      .forEach(({ name }) => {
        console.log(`"npm run ${name}" was failed`)
      })
  })
}, 500)

chokidar.watch("./src").on("change", (event, path) => {
  build()
})
