import { Component, h } from '@stencil/core';

@Component({
  tag: 'fake-app',
  styleUrl: 'fake-app.css'
})
export class FakeApp {

  render() {
    return <p>
      App here!
      <br />

      <dependent-component />
      <br />
      <another-dependent />
    </p>;
  }
}
