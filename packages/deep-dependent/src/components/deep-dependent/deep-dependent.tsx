import { Component, h } from '@stencil/core';

@Component({
  tag: 'deep-dependent',
  styleUrl: 'deep-dependent.css',
  shadow: true,
})
export class DeepDependent {
  render() {
    return <strong>Hey there! this is a deep dependent.</strong>;
  }
}
