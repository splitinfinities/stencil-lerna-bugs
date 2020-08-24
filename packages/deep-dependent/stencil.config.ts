import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'deep-dependent',
  taskQueue: 'async',
  devServer: {
    openBrowser: false,
    port: 3335,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
