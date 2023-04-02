export const handleErrors = (() =>
  process.once('uncaughtException', err => {
    console.log(`
    Error: ${err.message}
    `)
  }))()
