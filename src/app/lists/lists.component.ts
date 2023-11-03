import { Component } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  myList: any;
  key: string = 'list';


  backColor: string[] = [
      'is-primary',
      'is-link',
      'is-warning',
      'is-success is-light',
      'is-danger is-light'

  ]

  ngOnInit(): void {
    this.buscarLista();
  }

  getNumber(){
    return Math.floor(Math.random()* this.backColor.length)
  };

  getEdit( id: number){
    const objetoParaEditar = this.myList.find((item: { id: number }) => item.id === id);

    if (objetoParaEditar) {
      // Atualize o campo text
      objetoParaEditar.text = 'Texto atualizado';
    }
    localStorage.setItem(this.key, JSON.stringify(this.myList));
  }

  addList(): void{

    // Criar item:
    let myObj = {
      id: 12,
      title: 'Add lista',
      date: '18/02/2023',
      text: 'Teste de add na lista e atualizar',
      color: 'is-warning'
    };
    this.myList.push(myObj);
    localStorage.setItem(this.key, JSON.stringify(this.myList));

  }

  buscarLista(){
    const item = localStorage.getItem(this.key);
    if (item) {
      this.myList = JSON.parse(item);
    }
  };

  removeList(id: number){
    this.myList = this.myList.filter((item: { id: number }) => item.id !== id);
    localStorage.setItem(this.key, JSON.stringify(this.myList));
  }
}
