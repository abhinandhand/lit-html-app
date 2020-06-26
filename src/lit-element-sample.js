import { LitElement, html } from 'lit-element'

export class MyElement extends LitElement {
    render(){
        return html `
        <div>
        <h1>Welcome this is a Webcomponent built using lit-element</h1>
        </div>
        `
    }
}

customElements.define('my-element', MyElement);