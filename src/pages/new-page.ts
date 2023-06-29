import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        css``
    ];

    render() {
        return html`
          <div>Hello World</div>
        `;
    }
}
