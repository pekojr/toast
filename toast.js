class ToastNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.autoRemove();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #333;
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.5);
                    max-width: 300px;
                    transition: opacity 0.5s, bottom 0.5s;
                }
            </style>
            <slot></slot>
        `;
    }

    autoRemove() {
        setTimeout(() => {
            this.remove();
        }, 3000);
    }
}
export default ToastNotification;