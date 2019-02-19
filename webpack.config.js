const path = require('path');

module.exports = (mode, argv) =>
{
  const isProduction = argv.mode === 'production',
    config = {
      mode: argv.mode,
      optimization: {
        noEmitOnErrors: true
      },
      entry: {
        'directives': './directives.ts'
      },
      output: {
        filename: null,
        path: path.resolve(__dirname, 'js')
      },
      resolve: {
        extensions: ['.ts']
      },
      externals: {
        angular: 'angular'
      },
      module: {
        rules: [{
          test: /\.ts$/,
          exclude: [/node_modules/],
          use: {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript'
                }
              }
            }
          }
        }]
      }
    };

  if(isProduction)
    config.output.filename = '[name].min.js';
  else
    config.output.filename = '[name].js';

  return config;
};