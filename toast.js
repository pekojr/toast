class ToastNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.loadTemplate();
    }

    async loadTemplate() {
        const response = await fetch('toast.html');
        this.template = await response.text();
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
        this.remove();
    }

    autoRemove() {
        setTimeout(() => {
            this.remove();
        }, 3000);
    }
}
export default ToastNotification;