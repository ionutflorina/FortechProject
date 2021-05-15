import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCurrencies'
})
export class FilterCurrenciesPipe implements PipeTransform {

  transform(items: any[], searchText: String): any[] {
    if (searchText) {
      searchText = searchText.toLocaleLowerCase();
      return items.filter(item => {
        return item.currencies[0].name.toLocaleLowerCase().includes(searchText)
      })
    }
   
    return items;
  }

}
