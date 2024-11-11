class ToastNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.loadTemplate();
    }

    async loadTemplate() {
        const templateUrl = new URL('toast.html', import.meta.url);
        const response = await fetch(templateUrl);
        if (!response.ok) {
            throw new Error('Failed to load template');
        }
        this.template = await response.text();
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
        this.autoRemove();
    }

    autoRemove() {
        setTimeout(() => {
            this.remove();
        }, 3000);
    }
}

export default ToastNotification;