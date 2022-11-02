import {ApiProperty} from "@nestjs/swagger";

export class CreateExcursionDto {
    @ApiProperty({example: 'Интересная Москва', description: 'Заголовок экскурсии'})
    readonly title: string;

    @ApiProperty({example: 'Интерересное описание экскурсии', description: 'Описание экскурсии'})
    readonly description: string;

    @ApiProperty({example: '1', description: 'Id пользователя, который создал экскурсию'})
    readonly ownerId: number;

    @ApiProperty({type: 'file', description: 'Файл картинки'})
    readonly image: string;

    //@ApiProperty({example: '4.91', description: 'Рейтинг экскурсии'})
    readonly rating: number;

    @ApiProperty({example: '2 часа', description: 'Продолжительность экскурсии'})
    readonly duration: string;

    @ApiProperty({example: '1, 2, 4, 6', description: 'Строка id-шников мест, которые относятся к этой экскурсии (в порядке на маршруте)'})
    readonly placesIds: string;
}
