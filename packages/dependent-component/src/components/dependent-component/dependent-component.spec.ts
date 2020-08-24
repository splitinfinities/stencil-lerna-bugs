import { newSpecPage } from '@stencil/core/testing';
import { DependentComponent } from './dependent-component';

describe('dependent-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DependentComponent],
      html: '<dependent-component></dependent-component>',
    });
    expect(root).toEqualHtml(`
      <dependent-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </dependent-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DependentComponent],
      html: `<dependent-component first="Stencil" last="'Don't call me a framework' JS"></dependent-component>`,
    });
    expect(root).toEqualHtml(`
      <dependent-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </dependent-component>
    `);
  });
});
