const { defineConfig } = require("rollup")
const nodeResolve = require('@rollup/plugin-node-resolve').default
const path = require('path')
const  { commonjs } = require("@rollup/plugin-commonjs").default
const { terser } = require('rollup-plugin-terser')

const extensions = ['.mjs', '.js', '.json', '.ts']

module.exports =  defineConfig({
  input: [
    'src/index',
  ],
  plugins:[
    nodeResolve({ extensions }),
    commonjs(),
    terser()
  ],
  output: {
    file: path.resolve(__dirname, './dist/index.mjs'),
    format: 'es',
  }
})
