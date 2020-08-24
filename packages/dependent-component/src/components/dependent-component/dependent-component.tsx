import { Component, Prop, h } from '@stencil/core';
import { format } from '@stellar-design/fake-utils';

@Component({
  tag: 'dependent-component',
  styleUrl: 'dependent-component.css',
  shadow: true,
})
export class DependentComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <p>Primary Dependent Component! {this.getText()}</p>;
  }
}
