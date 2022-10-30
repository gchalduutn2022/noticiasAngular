import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticia-api';

  constructor(private _api: NoticiasService)
  {

  }
  buscarNoticias(parametro: any)
  {
    console.log('Soy el padre');
    console.log(parametro);
    this._api.getNoticias(parametro).subscribe(result=>
      {console.log(result)}
      )
  }
}
