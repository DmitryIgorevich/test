import {MainPageComponent} from '../pages/mian/main';
import {SecondPageComponent} from '../pages/second/second';
import {
    IState,
    TIndexing,
} from './types/types';

export const main = '';
export const second = 'second';

export const states: TIndexing<IState> = {
    '': {
        state: main,
        component: MainPageComponent,
    },
    second: {
        state: doHashed(second),
        component: SecondPageComponent,
    },
};

function doHashed(hash: string) {
    return `#${hash}`;
}
