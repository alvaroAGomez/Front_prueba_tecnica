import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contratistasPîpe'
})
export class ContratistasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    return null;
  }

}
