export const handleErrors = (() =>
  process.once('uncaughtException', err => {
    console.log(err)
    console.log(`
      Aborting..
  `)
  }))()
