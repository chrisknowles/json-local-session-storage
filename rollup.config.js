import babel from 'rollup-plugin-babel';

export default {
  input: 'src/json-local-session-storage-umd.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/json-local-session-storage.js',
      name: 'JSONStorage',
      format: 'umd'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
