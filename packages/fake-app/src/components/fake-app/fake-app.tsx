import { Component, h } from '@stencil/core';
import "@stellar-design/dependent-component"
import "@stellar-design/another-dependent"

@Component({
  tag: 'fake-app',
  styleUrl: 'fake-app.css'
})
export class FakeApp {

  render() {
    return <p>
      App here!!
      <br />

      <dependent-component />
      <br />
      <another-dependent />
    </p>;
  }
}
