import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import livereload from 'rollup-plugin-livereload'
import pkg from './package.json';


import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    external(),
    livereload(),
    resolve({
      browser: true,
    }),
    postcss({
      extract: true,
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true,
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
      exclude: ['**/*.stories.js'],
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/formik/node_modules/scheduler/index.js': ['unstable_runWithPriority', 'LowPriority'],
      },
    }),
    image({
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 10000,
    }),
    sass({
      insert: true,
    }),

    copy({
      targets: [
        { src: ['./src/assets/fonts', './src/assets/icons'], dest: 'build/assets' },
      ]
    })
  ],
};
