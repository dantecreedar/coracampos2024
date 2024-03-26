import { Component } from '@angular/core';
import { News } from '../interfaces/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  news: News[] = 
  [
    {
      id: "1",
      desc: "El sector yerbatero, avanza en su reaecuación de precios, mientras que el sector forestal incrementa su capacidad instalada. Muchas consultas y concreción de negocios en tierras para producción, en estos primeros meses del año.",
      url: "",
      title: "Noticias 2024",
      imgUrl: "./../../../../../assets/news/yerbamate.jpeg",
      date: "3/07/2024",
    },
    {
      id: "2",
      desc: "Estamos haciendo Valuaciones constantemente y Tasaciones en Toda la provincia de Misiones y Corrientes. Campos, Chacras, Yerbales, Edificios, Departamentos, Casas, Lotes. Contamos con Profesional Habilitado para ejercer el Corretaje Inmobiliario Ley n° 152.",
      url: "",
      title: "TASACIONES",
      imgUrl: "./../../../../../assets/news/terreno.jpg",
      date: "27/06/2023",
    },
    {
      id: "3",
      desc: "Estamos Comercializando Propiedades en Toda la Provincia y el País. Con nosotros contas con Asesoramiento, Acompañamiento y Respaldo legal durante la búsqueda  de tu Nueva Propiedad o la venta.",
      url: "",
      title: "COMERCIALIZACIÓN",
      imgUrl: "./../../../../../assets/news/houses.jpeg",
      date: "02/04/2023"
    }
  ]

}
