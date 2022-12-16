import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodificaSesso'
})
export class DecodificaSessoPipe implements PipeTransform {

  transform(sesso: string, ...args: string[]): string {
    console.log(args)
    return sesso === 'MASCHIO' ? 'M' : 'F';
  }

}
