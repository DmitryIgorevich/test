export type TIndexing<T> = {
    [key: string]: T
}

export interface IComponentElementSettings {
    element: HTMLElement;
    innerHTML?: boolean;
    uniqKey?: any;
}

export interface IComponent {
    init: () => void;
    getTemplate: () => string;
}

export interface IComponentConstructor {
    new (element: IComponentElementSettings): IComponent
}

export interface IState {
    state: string;
    component: IComponentConstructor;
}
