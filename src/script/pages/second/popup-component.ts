import {
    IComponent,
    IComponentElementSettings,
} from '../../system/types/types';
import {IContentToShow} from './item-component';

export class PopupComponent implements IComponent {
    protected button: HTMLButtonElement;
    protected wrapperButton: HTMLDivElement;
    protected wrapper: HTMLDivElement;
    protected title: HTMLDivElement;

    constructor(
        protected content: IContentToShow,
        protected settings: IComponentElementSettings,
        protected triggerButton: HTMLButtonElement,
        protected triggerButtonsWrapper: HTMLElement
    ) {
        this.bindMethods();
        this.init();
    }

    public init(): void {
        if (this.settings.innerHTML) {
            this.settings.element.innerHTML = this.getTemplate();
            this.setSubsribers();
        }
    }

    public getTemplate(): string {
        return `
            <div class="popup opening">
                <div class="popup__top">${this.content.title}</div>
                <button class="popup__content">${this.content.description}</button>
            </div>
        `;
    }

    public generateHtml(): void {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('popup');
        this.wrapper.classList.add('open');

        this.title = document.createElement('div');
        this.title.classList.add('popup__top');
        this.title.textContent = this.content.title;

        this.wrapperButton = document.createElement('div');
        this.wrapperButton.classList.add('popup__content');

        this.button = document.createElement('button');
        this.button.classList.add('popup__button');
        this.button.textContent = this.content.description;
        this.button.classList.add('open');

        this.wrapper.append(this.title);
        this.wrapper.append(this.wrapperButton);
        this.wrapperButton.append(this.button);

        this.settings.element.append(this.wrapper);

        this.setButtonVariablesButton();
    }

    public setSubsribers(): void {
        this.button.addEventListener('click', this.onClick);
        this.wrapper.addEventListener('animationend', this.onAnimationendEnd);
    }

    protected setButtonVariablesButton(): void {
        const coords = this.triggerButton.getBoundingClientRect();
        const styles = window.getComputedStyle(this.triggerButtonsWrapper);

        document.documentElement.style.setProperty('--initial-button-height', `${this.triggerButton.clientHeight}px`);
        document.documentElement.style.setProperty('--initial-button-width', `${this.triggerButton.clientWidth}px`);
        document.documentElement.style.setProperty('--initial-button-right', `${coords.right - parseInt(styles.gridGap)}px`);
        document.documentElement.style.setProperty('--initial-button-left', `${coords.left - parseInt(styles.gridGap)}px`);
        document.documentElement.style.setProperty('--onopen-button-height', `${this.wrapperButton.scrollHeight}px`);
        document.documentElement.style.setProperty('--onopen-button-width', `${this.wrapperButton.scrollWidth}px`);
    }

    protected onClick(): void {
        this.wrapper.classList.remove('open');
        this.wrapper.classList.add('close');

        this.button.classList.remove('open');
        this.button.classList.add('close');
    }

    protected onAnimationendEnd(): void {
        if (this.wrapper.classList.contains('close')) {
            this.wrapper.remove();
        }
    }

    private bindMethods(): void {
        this.setSubsribers = this.setSubsribers.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onAnimationendEnd = this.onAnimationendEnd.bind(this);
        this.setButtonVariablesButton = this.setButtonVariablesButton.bind(this);
    }
}
