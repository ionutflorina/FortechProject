import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTimezone'
})
export class FilterTimezonePipe implements PipeTransform {

  transform(items: any[], searchText: String): any[] {
    if (searchText) {
      searchText = searchText.toLocaleLowerCase();
      return items.filter(item => {
        return item.timezones[0].toLocaleLowerCase().includes(searchText)
      })
    }
   
    return items;
  }

}
