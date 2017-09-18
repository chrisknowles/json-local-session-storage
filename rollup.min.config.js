import babel from 'rollup-plugin-babel';
import butternut from 'rollup-plugin-butternut';

export default {
  input: 'src/json-local-session-storage-umd.js',
  output: [
    {
      file: 'dist/json-local-session-storage.min.js',
      name: 'JSONStorage',
      format: 'umd',
      sourcemap: true
    }
  ],
  plugins: [
    butternut(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
