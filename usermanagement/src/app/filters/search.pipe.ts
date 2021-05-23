import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerEmailFilter',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =
        val.empName.toLocaleLowerCase().includes(args.toLocaleLowerCase()) ||
        val.empEmailID.toLocaleLowerCase().includes(args.toLocaleLowerCase());
      return rVal;
    });
  }
}
