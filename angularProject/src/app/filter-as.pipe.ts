import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAs'
})
export class FilterAsPipe implements PipeTransform {

  transform(value: any): any {
    return value.filter(function(value){
      if (value.gender=='male') {
        return value.name = "Mr. " + value.name;
      } else {
        return value.name = "Mrs. " + value.name;
      }
    });
  }

}
