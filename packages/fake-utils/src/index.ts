export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const typicalStencilConfig = {
  outputTargets: [
    { type: 'dist',  esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements-bundle' },
    { type: 'docs-readme', },
    { type: 'www', serviceWorker: null },
  ]
}

