import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';

  search = '';
  searchField = 'title'

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво'},
    {title: 'Bread', text: 'Самый лучший хлеб'},
    {title: 'JS', text: 'Самый лучший костыль'},
  ];

  onTogleSearch (evetn){
    if( this.searchField === 'title') 
      this.searchField = 'text'
    else
    this.searchField = 'title';

    
    evetn.target.innerText = this.searchField
    console.log( this.searchField)
  }

}
