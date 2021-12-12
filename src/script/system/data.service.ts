import {IContentToShow} from '../pages/second/item-component';

export class DataService {
    public actionItems: IContentToShow[] = [
        {
            title: 'Первый текст',
            description: 'Какое то описание',
        },
        {
            title: 'Второй текст',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, atque.',
        },
        {
            title: 'Третий текст',
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cumque soluta eligendi porro sapiente, nulla aliquam quasi tempora natus
            dolor itaque repellat incidunt ex quidem tenetur magnam iusto eaque blanditiis! Obcaecati excepturi aspernatur reiciendis, aliquid perferendis libero debitis
            placeat! Laboriosam quaerat nostrum nesciunt harum saepe est impedit sequi cumque facilis?`,
        },
        {
            title: 'Четвертый текст',
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cumque soluta eligendi porro sapiente, nulla aliquam quasi tempora natus
            dolor itaque repellat incidunt ex quidem tenetur magnam iusto eaque blanditiis!`,
        },
    ];
}
