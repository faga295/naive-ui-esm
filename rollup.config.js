const { defineConfig } = require("rollup")
const nodeResolve = require('@rollup/plugin-node-resolve').default
const path = require('path')
const  { default: commonjs } = require("@rollup/plugin-commonjs")
const extensions = ['.mjs', '.js', '.json', '.ts']

module.exports =  defineConfig({
  input: [
    'src/index',
  ],
  plugins:[
    nodeResolve({ extensions }),
    commonjs()
  ],
  output: {
    file: path.resolve(__dirname, './dist/index.mjs'),
    format: 'es',
  }
})
