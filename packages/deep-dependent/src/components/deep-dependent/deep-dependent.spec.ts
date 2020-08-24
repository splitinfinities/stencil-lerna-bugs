import { newSpecPage } from '@stencil/core/testing';
import { DeepDependent } from './deep-dependent';

describe('deep-dependent', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DeepDependent],
      html: '<deep-dependent></deep-dependent>',
    });
    expect(root).toEqualHtml(`
      <deep-dependent>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </deep-dependent>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DeepDependent],
      html: `<deep-dependent first="Stencil" last="'Don't call me a framework' JS"></deep-dependent>`,
    });
    expect(root).toEqualHtml(`
      <deep-dependent first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </deep-dependent>
    `);
  });
});
