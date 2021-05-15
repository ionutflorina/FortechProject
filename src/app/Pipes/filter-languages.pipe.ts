import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLanguages'
})
export class FilterLanguagesPipe implements PipeTransform {

  transform(items: any[], searchText: String): any[] {
    if (searchText) {
      searchText = searchText.toLocaleLowerCase();
      return items.filter(item => {
        return item.languages[0].name.toLocaleLowerCase().includes(searchText)
      })
    }
    return items;
  }

}
