import {main} from '../../system/states';
import {
    IComponent,
    IComponentElementSettings,
} from '../../system/types/types';
import {ItemComponent} from './item-component';

export class SecondPageComponent implements IComponent {
    protected components: ItemComponent[];
    private button: HTMLButtonElement;
    private itemsWrapper: HTMLDivElement;
    private elementForPopup: HTMLElement;

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

        this.setItems();
    }

    public getTemplate(): string {
        return `
            <div class="second-page">
                <div class="second-page__content">
                    <div class="second-page__button-wrapper">
                        <button class="second-page__button">Вернуться к кнопке</button>
                    </div>

                    <div class="second-page__items-wrapper">
                    </div>
                </div>
            </div>
        `;
    }

    protected onClick(): void {
        window.location.hash = main;
    }

    protected setItems(): void {
        let items: string = '';

        this.itemsWrapper = this.settings.element.querySelector('.second-page__items-wrapper');

        this.components = window.dataService.actionItems.map((data, i) => {
            const component = new ItemComponent(
                data,
                {
                    element: this.itemsWrapper,
                    uniqKey: i,
                },
                this.settings.element.querySelector('.second-page'),
                this.itemsWrapper
            );
            items += component.getTemplate();

            return component;
        });

        this.itemsWrapper.innerHTML = items;

        this.components.forEach(item => item.setSubsribers());
    }

    private setSubsribers(): void {
        this.button = this.settings.element.querySelector('.second-page__button');
        this.button.addEventListener('click', this.onClick);
    }

    private bindMethods(): void {
        this.setSubsribers = this.setSubsribers.bind(this);
        this.onClick = this.onClick.bind(this);
    }
}
