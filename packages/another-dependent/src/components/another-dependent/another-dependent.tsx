import { Component, h } from '@stencil/core';

@Component({
  tag: 'another-dependent',
  styleUrl: 'another-dependent.css',
  shadow: true,
})
export class AnotherDependent {

  render() {
    return <em>Another dependent. "<deep-dependent />"</em>;
  }
}
