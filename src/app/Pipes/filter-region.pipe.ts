import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegion'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: String): any[] {
      if (searchText) {
        searchText = searchText.toLocaleLowerCase();
        return items.filter(item => {
          return item.region.toLocaleLowerCase().includes(searchText)
        })
      }
      return items;
    }

    
  }