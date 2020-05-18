import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(posts: Post[], search: string = '',searchField:string = 'title'): Post[] {
    
    if(!search.trim()){
      return posts;
    } 
    return posts.filter(item => item[searchField].toLowerCase().includes(search.toLowerCase()))
  }

}
