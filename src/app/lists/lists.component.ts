import { Component } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  data: any[] = [
    {
    id: 1,
    title: 'Teste',
    date: '15/02/2023',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
  },
  {
    id: 2,
    title: 'Exemplo',
    date: '16/02/2023',
    text: 'The Bengal is a domestic cat breed developed to look like exotic jungle cats such as leopards, ocelots, margays and clouded leopards. Bengal cats were developed by selective breeding from hybrids of the Asian leopard cat and the domestic cat.'
  },
  {
    id: 3,
    title: 'Outro teste',
    date: '17/02/2023',
    text: 'The red panda (Ailurus fulgens) is a mammal species native to the eastern Himalayas and southwestern China. It is listed as Endangered on the IUCN Red List because the wild population is estimated at fewer than 10,000 mature individuals and continues to decline due to habitat loss and fragmentation, poaching, and inbreeding depression.'
  },
  {
    id: 4,
    title: 'Mais um exemplo',
    date: '18/02/2023',
    text: 'The African elephant is the largest land animal on Earth, and the females of the species are some of the most intelligent creatures on the planet. African elephants have a complex social structure and exhibit a wide range of behaviors, including mourning their dead and showing empathy for others in their group.'
  },
   {
    id: 5,
    title: 'Exemplo 5',
    date: '05/03/2023',
    text: 'Este é um exemplo de texto aleatório para o quinto objeto do array.'
  },
  {
    id: 6,
    title: 'Exemplo 6',
    date: '06/03/2023',
    text: 'Este é um exemplo de texto aleatório para o sexto objeto do array.'
  },
  {
    id: 7,
    title: 'Exemplo 7',
    date: '07/03/2023',
    text: 'Este é um exemplo de texto aleatório para o sétimo objeto do array.'
  }
  ]

  backColor: string[] = [
      'is-primary',
      'is-link',
      'is-warning',
      'is-success is-light',
      'is-danger is-light'

  ]
  getNumber(){
    return Math.floor(Math.random()* this.backColor.length)
  };
  
  getEdit( id: number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this! " + id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
