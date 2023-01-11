import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name  : 'fillter'
}) 
export class FillterPipe implements PipeTransform {
  transform(value: any, searchTearm: string): any {
    return value.filter(function (search) {
      // return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }



}
