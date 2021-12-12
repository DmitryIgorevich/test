import {DataService} from './data.service';

declare global {

    interface Window {
        dataService: DataService
    }
}
