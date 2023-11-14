import React, { useState } from "react";
import data from "./images.json";
import Modal from "./modal";
import "./galeria-styles.css";

function Galeria() {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [visibleItems, setVisibleItems] = useState(5); // Número de elementos visibles
    const [showMore, setShowMore] = useState(true); // Estado para controlar el botón

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.img);
    };

    const handleRotationRight = () => {
        const totalLenght = data.data.length;
        if (currentIndex + 1 >= totalLenght) {
            setCurrentIndex(0);
            const newUrl = data.data[0].img;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item => {
            return data.data.indexOf(item) === newIndex;
        }));
        const newItem = newUrl[0].img;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handleRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.data[totalLength - 1].img;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].img;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const primerElemento = data.data[0];

    const toggleShowMore = () => {
        // Cambia el estado del botón y ajusta la cantidad de elementos visibles
        if (showMore) {
            setVisibleItems(data.data.length);
        } else {
            setVisibleItems(5); // Cambia a la cantidad inicial que desees
        }
        setShowMore(!showMore); // Cambia el estado del botón
    };

    return (
        <div>
            <div className="image-container">
                <img
                    src={primerElemento.img}
                    onClick={() => handleClick(primerElemento, 0)}
                />
                <div className="imgs-side">
                    {data.data.slice(0, visibleItems).map((item, index) => {
                        if (index === 0) {
                            return null; // Omitir el primer elemento
                        }
                        return (
                            <div key={index} className="wrapper-images">
                                <img
                                    src={item.img}
                                    onClick={() => handleClick(item, index)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="verMasBtn">
                <button onClick={toggleShowMore}>
                    {showMore ? "Ver Más" : "Ver Menos"}
                </button>
            </div>
            {clickedImg && (
                <Modal
                    clickedImg={clickedImg}
                    handleRotationRight={handleRotationRight}
                    setClickedImg={setClickedImg}
                    handleRotationLeft={handleRotationLeft}
                />
            )}
        </div>
    );
}

export default Galeria;