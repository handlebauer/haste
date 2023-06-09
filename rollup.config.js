import { nodeResolve } from '@rollup/plugin-node-resolve'
import shebang from 'rollup-plugin-preserve-shebang'

import pkg from './package.json' assert { type: 'json' }

const input = './bin/index.js'

// eslint-disable-next-line import/no-default-export
export default {
  input,
  output: [{ file: pkg.bin, format: 'cjs' }],
  plugins: [nodeResolve(), shebang()],
}
