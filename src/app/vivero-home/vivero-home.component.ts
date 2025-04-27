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
      image1: "https://i.ibb.co/8nrXXZ1v/carousel1.jpg",
      image2: "https://i.ibb.co/20xdVghP/carousel2.jpg",
      image3: "https://i.ibb.co/cc6LS8Jj/carousel3.jpg",
      image4: "/img/mediodepago.png",
      image5: "https://i.ibb.co/XB0LzqJ/image5.jpg",
      image6: "https://i.ibb.co/F43cGHDY/image6.jpg",
      image7: "https://i.ibb.co/whTnHwHT/image7.jpg",
    }
}

