import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../shared/models/product.service';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: IProduct) =>
      product.nom.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
      }
}
