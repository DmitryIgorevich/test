import {second} from '../../system/states';
import {IComponent, IComponentElementSettings} from '../../system/types/types';

export class MainPageComponent implements IComponent {
    private button: HTMLButtonElement;

    constructor(
        protected settings: IComponentElementSettings
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
            <div class="main-page">
                <button class="main-page__button">
                    <span class="main-page__text">Старт</span>
                </button>
            </div>
        `;
    }

    protected setSubsribers(): void {
        this.button = this.settings.element.querySelector('.main-page__button');
        this.button.addEventListener('click', this.onClick);
    }

    protected onClick(): void {
        window.location.hash = second;
    }

    protected bindMethods(): void {
        this.setSubsribers = this.setSubsribers.bind(this);
        this.onClick = this.onClick.bind(this);
    }
}
