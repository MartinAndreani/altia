import React, { useEffect, useState } from 'react';



const imagenes = [
    '/images/ejemplo1.jpg',
    '/images/ejemplo2.jpg',
    '/images/ejemplo3.jpg',
    'images/ejemplo4.jpg',
];



const Home = () => {
    const [indexFondo, setIndexFondo] = useState(0);
    console.log(imagenes[indexFondo])

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndexFondo((prev) => (prev + 1) % imagenes.length);
        }, 10000); // 10 segundos

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div
            className="h-screen z-0 flex flex-col lg:flex-row justify-between text-white p-8 lg:p-20 transition-all duration-1000 ease-in-out"
            style={{
                backgroundImage: `url(${imagenes[indexFondo]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex flex-col gap-4 justify-center items-start  bg-opacity-50 p-4 rounded">
                <p className="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
                    ALTIA
                </p>
                <p className="font-sans font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Limpieza Final de Obra
                </p>
            </div>

            <div className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-end mt-10 lg:mt-0 lg:h-64 lg:w-[32rem] bg-opacity-50 p-4 rounded">
                Transformamos tu espacio con una limpieza innovadora y eficiente.
            </div>
        </div>
    );
};

export default Home;