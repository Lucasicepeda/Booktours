
// import './body.css'
import './newBody.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../Cards/Cards.jsx'

function Body() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const slideData = [
    {
      image: "/src/components/Body/Images/image1.jpg",
      title: "Título de la Imagen 1",
      parrafo: "24 Destinos"
    },
    {
      image: "/src/components/Body/Images/image1.jpg",
      title: "Título de la Imagen 2",
      parrafo: "23 Destinos"
    },
    {
      image: "/src/components/Body/Images/image1.jpg",
      title: "Título de la Imagen 3",
      parrafo: "20 Destinos"
    },
    {
      image: "/src/components/Body/Images/image1.jpg",
      title: "Título de la Imagen 4",
      parrafo: "18 Destinos"
    },
    {
      image: "/src/components/Body/Images/image1.jpg",
      title: "Título de la Imagen 5",
      parrafo: "10 Destinos"
    },
    {
      image: "/src/components/Body/Images/image1.jpg",
      title: "Título de la Imagen 6",
      parrafo: "24 Destinos"
    },
  ];

  return (
    <div className='divBody' >
      <div className="first-part">

        <input type="text" placeholder="Buscar por Destino, Actividad o Interés" />
        <button className="search-button">BUSCAR</button>
      </div>

      <div className="second-part">
        <Slider {...settings} className='slider'>
          {slideData.map((slide, index) => (
            <div key={index} className="slide-container">
              <img src={slide.image} alt={`Imagen ${index + 1}`} />
              <div className='carrusel_text'>
                <h2 className="image-title">{slide.title}</h2>
                <p>{slide.parrafo}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Cards />
    </div >
  );
}

export default Body;