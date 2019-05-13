import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json'


const config = [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: pkg.name
    },
    plugins: [
      nodeResolve({ jsnext: true }),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      babel(),
      terser()
    ]
  },
];

export default config;