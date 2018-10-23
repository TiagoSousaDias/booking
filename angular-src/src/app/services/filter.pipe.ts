import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(quartos: any, search: any): any {
    if(search === undefined) return quartos;

    return quartos.filter(function(quarto){
      return quarto.Nome.toLowerCase().includes(search.toLowerCase());
    })
  }

}
