#!/usr/bin/env zx

import { hideBin as parse } from 'yargs/helpers'
import { readFile } from 'fs/promises'
import copy from 'clipboardy'

import { getStdin } from './utils/get-stdin.js'
import './utils/handle-errors.js'

import { postData } from './utils/post-data.js'

async function main() {
  const stdin = await getStdin()
  const [path] = parse(process.argv)

  let url = ''

  if (stdin) {
    url = await postData(stdin)
  } else if (path) {
    const data = await readFile(path, 'utf-8')
    url = await postData(data)
  } else {
    console.error(`
  npx @hbauer/haste [path/to/file]
                  or
  echo "hello" | npx @hbauer/haste
  `)
    process.exit(1)
  }

  console.log(url)
  copy.writeSync(url)
}

main()
