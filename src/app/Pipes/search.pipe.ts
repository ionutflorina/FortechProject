import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: String, searchableList: any): any[] {
    if (searchText) {
      searchText = searchText.toLocaleLowerCase();
      return items.filter(item => {
        var isTrue = false;
        for (var k in searchableList) {
          if (item[searchableList[k]].toLowerCase().indexOf(searchText) > -1) {
            isTrue = true;
          }
          if (isTrue) {
            return item;
          }
          
        }
      })
    }
    return items;
  }
}