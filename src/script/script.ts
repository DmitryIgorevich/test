// scss to css
import '../styles/index.scss';

// ts
import './system/types/types';
import * as _states from './system/states';
import {IState} from './system/types/types';
import {DataService} from './system/data.service';

window.dataService = new DataService();

let App: HTMLElement;

document.addEventListener('DOMContentLoaded', init);

function init(): void {
    App = document.querySelector('#app');

    showPage(detectShowedPage());
    setSubscribers();
}

function setSubscribers(): void {
    window.addEventListener('hashchange', () => {
        showPage(detectShowedPage());
    });
}

function detectShowedPage(): IState {
    for (const key in _states.states) {
        if (_states.states[key].state === window.location.hash) {
            return _states.states[key];
        }
    }
}

function showPage(state: IState): void {
    const Component = state.component;
    new Component({
        element: App,
        innerHTML: true,
    });
}
