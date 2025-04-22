import { Component } from '@angular/core';



@Component({
  selector: 'app-vivero-home',
  standalone: false,

  templateUrl: './vivero-home.component.html',
  styleUrl: './vivero-home.component.scss'
})
export class ViveroHomeComponent {
  imagenes=
    {
      image1: "/img/1carousel.png",
      image2: "/img/2carousel.png",
      image3: "/img/3carousel.png",
      image4: "/img/mediodepago.png",
      image5: "/img/home2.png",
      image6: "/img/home3.png",
    }
}
