import { newSpecPage } from '@stencil/core/testing';
import { FakeApp } from './fake-app';

describe('fake-app', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FakeApp],
      html: '<fake-app></fake-app>',
    });
    expect(root).toEqualHtml(`
      <fake-app>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </fake-app>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [FakeApp],
      html: `<fake-app first="Stencil" last="'Don't call me a framework' JS"></fake-app>`,
    });
    expect(root).toEqualHtml(`
      <fake-app first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </fake-app>
    `);
  });
});
