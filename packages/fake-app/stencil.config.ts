import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'fake-app',
  taskQueue: 'async',
  devServer: {
    openBrowser: true,
    port: 3333,
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
