import React, { useState, useEffect } from 'react';
import { FaDumbbell } from 'react-icons/fa'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../styles/Principal.css';
import Card from '../../componentes/Card';
import { Link } from 'react-router-dom';


function Principal() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulación de carga con un temporizador
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer); // Limpieza del temporizador
    }, []);

    // Datos de las tarjetas
    const slides = [
        {
            key: 1,
            content: (
            <Link to="/componentes/seccion1">
                <Card
                    image="https://img1.wsimg.com/isteam/ip/79cf376a-9f95-45db-8357-c4e4b3365ba4/Pic%201.jpg/:/rs=h:1000,cg:true,m"
                    title="Ananabel Lucinda"
                    description="Annabel Lucinda es una deportista fitness destacada, conocida por su dedicación al entrenamiento físico y estilo de vida saludable. Con una fuerte presencia en las redes sociales, comparte su enfoque en la disciplina, el bienestar y la superación personal."
                />
            </Link>
            )
        },
        {
            key: 2,
            content: (
                <Card
                    image="https://i.pinimg.com/736x/9f/19/27/9f19274f0deb61068297fb5572f893db.jpg"
                    title="Carlos Belcast"
                    description="Carlos Belcast es un reconocido entrenador y figura dentro del mundo fitness, destacado por su enfoque en la transformación física, el desarrollo muscular y la salud integral."
                />
            )
        },
        {
            key: 3,
            content: (
                <Card
                    image="https://i.pinimg.com/736x/89/64/50/89645002f0036837b79bd8419989b7be.jpg"
                    title="Diana Conforti"
                    description="Personalidad de TikTok conocida por sus entrenamientos y sus contenidos sobre bienestar y alimentación. Es conocida por sus programas de entrenamiento de cuatro semanas. También ha lanzado un reto de abdominales de 30 días."
                />
            )
        },
        {
            key: 4,
            content: (
                <Card
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYXjxufNZLDIXIA0JShhz3SxQdqNNqjjomA&s"
                    title="Tu marido Moises"
                    description="Moisés Ebrahim Justiniano es un culturista boliviano. Nació en 1995 en el municipio de Pero, Santa Cruz. Demostró habilidades innatas para el deporte desde su infancia. Se especializó en culturismo en Estados Unidos."
                />
            )
        },
        {
            key: 5,
            content: (
                <Card
                    image="https://i.pinimg.com/736x/1e/b2/b0/1eb2b088892da54ee6644e9d36185eda.jpg"
                    title="Miranda Cohenfit"
                    description="Miranda Cohen es una personalidad estadounidense de TikTok, influencer de Instagram, emprendedora y fanática del fitness que comenzó a construir su marca personal en 2016; ahora clasificada como una de las personalidades de fitness y estilo de vida de más rápido crecimiento de todos los tiempos."
                />
            )
        }
    ];

    return (
        <div className={isLoading ? 'loading-container' : 'content-container'}>
            {isLoading ? (
                <FaDumbbell style={{ fontSize: '100px', color: '#fff' }} />
            ) : (
                <div>
                    <h1 className="title">GYM BROTHERS</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        className="swiper-container2"
                    >
                        {slides.map(slide => (
                            <SwiperSlide key={slide.key} className="swiper-slide">
                                {slide.content}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export default Principal;

