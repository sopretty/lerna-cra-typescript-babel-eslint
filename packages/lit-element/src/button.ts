import {html, LitElement, property} from 'lit-element';

export type Color = 'primary' | 'secondary' | 'danger';


const primaryColor = html`
<style> button { background-color: blue; } </style>
`;

const secondaryColor = html`
  <style> button { background-color: gray; 
  } </style>
`;

const dangerColor = html`
  <style> button { background-color: red; } </style>
`;

export class Button extends LitElement {

@property({type : String}) color: Color  = 'primary';
@property({type : Boolean}) negative = false;
@property({type : Boolean}) small = true;


handleClick = () => {
  console.log('handleclick')
  const event = new CustomEvent('fdp', {
    detail: {
      message: 'click'
    }
  });
  this.dispatchEvent(event);
}

  render() {
    return html`
    ${this.color === 'primary' ? primaryColor : this.color === 'secondary' ? secondaryColor : dangerColor}
      <button @click=${this.handleClick}><slot></slot></button>
    `;
  }
}

customElements.define('tdw-button', Button);
