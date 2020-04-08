import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import pkg from './package.json';

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
        'node_modules/primereact/**',
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
        'node_modules/primereact/inputtext.js': ['InputText'],
        'node_modules/primereact/button.js': ['Button'],
        'node_modules/primereact/checkbox.js': ['Checkbox'],
        'node_modules/primereact/growl.js': ['Growl'],
        'node_modules/primereact/listbox.js': ['ListBox'],
        'node_modules/primereact/dialog.js': ['Dialog'],
        'node_modules/primereact/inputswitch.js': ['InputSwitch'],
        'node_modules/primereact/datatable.js': ['DataTable'],
        'node_modules/primereact/column.js': ['Column'],
        'node_modules/primereact/inputtextarea.js': ['InputTextarea'],
        'node_modules/primereact/card.js': ['Card'],
        'node_modules/primereact/calendar.js': ['Calendar'],
      },
    }),
    image({
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 10000,
    }),
    sass({
      insert: true,
    }),
  ],
};
