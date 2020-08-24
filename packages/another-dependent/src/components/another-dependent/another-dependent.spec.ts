import { newSpecPage } from '@stencil/core/testing';
import { AnotherDependent } from './another-dependent';

describe('another-dependent', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AnotherDependent],
      html: '<another-dependent></another-dependent>',
    });
    expect(root).toEqualHtml(`
      <another-dependent>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </another-dependent>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AnotherDependent],
      html: `<another-dependent first="Stencil" last="'Don't call me a framework' JS"></another-dependent>`,
    });
    expect(root).toEqualHtml(`
      <another-dependent first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </another-dependent>
    `);
  });
});
