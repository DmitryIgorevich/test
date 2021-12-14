import {
    IComponent,
    IComponentElementSettings,
} from '../../system/types/types';
import {PopupComponent} from './popup-component';

export interface IContentToShow {
    title: string;
    description: string;
}

export class ItemComponent implements IComponent {
    private uniqClass: string;

    protected button: HTMLButtonElement;

    constructor(
        protected content: IContentToShow,
        protected settings: IComponentElementSettings,
        protected elementForPopup: HTMLElement,
        protected itemWrapper: HTMLElement
    ) {
        this.bindMethods();
        this.init();
    }

    public init(): void {
        this.uniqClass = this.settings.uniqKey ? `action-item--${this.settings.uniqKey}` : '';

        if (this.settings.innerHTML) {
            this.settings.element.innerHTML = this.getTemplate();
            this.setSubsribers();
        }
    }

    public getTemplate(): string {
        return `
            <div class="second-page__item action-item ${this.uniqClass}">
                <button class="action-item__button">
                    <span class="action-item__title">${this.content.title}</span>
                    <span class="action-item__description">${this.content.description}</span>
                </button>
            </div>
        `;
    }

    public setSubsribers(): void {
        const _uniqClass = this.uniqClass ? `.${this.uniqClass}` : '';

        this.button = this.settings.element.querySelector(`.action-item${_uniqClass} .action-item__button`);
        this.button.addEventListener('click', this.onClick);
    }

    protected onClick(): void {
        const popup = new PopupComponent(
            this.content,
            {
                element: this.elementForPopup,
            },
            this.button,
            this.itemWrapper
        );

        popup.generateHtml();
        popup.setSubsribers();
    }

    private bindMethods(): void {
        this.setSubsribers = this.setSubsribers.bind(this);
        this.onClick = this.onClick.bind(this);
    }
}
