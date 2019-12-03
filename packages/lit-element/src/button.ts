import {html, LitElement, property} from 'lit-element';

export type Color = 'primary' | 'secondary' | 'danger';

export class Button extends LitElement {
// Declare and initialize properties

/**
 *   children,
  color,
  disabled,
  icon,
  large,
  negative,
  renderer,
  small,
  style,
  textButton,
  theme,
 */

 

@property({type : String}) color: Color  = 'primary';
@property({type : Boolean}) negative = false;
@property({type : Boolean}) small = true;
@property({type : Array}) prop4 = [1,2,3];
  render() {
    return html`
      <button><slot></slot></button>
    `;
  }
}

customElements.define('tdw-button', Button);
