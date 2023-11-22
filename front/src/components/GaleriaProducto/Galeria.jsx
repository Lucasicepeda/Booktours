import React, { useState, useEffect } from "react";
import Modal from "./modal";
import "./galeria-styles.css";

function Galeria({ img }) {
  const [images, setImages] = useState([]);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const imageData = img.map((prod) => ({ img: prod.imgUrl }));
    setImages(imageData);
  }, [img]);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };

  const handleRotationRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleRotationLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleShowMore = () => {
    if (showMore) {
      setVisibleItems(images.length);
    } else {
      setVisibleItems(5);
    }
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="image-container">
        {images.length > 0 && (
          <img
            src={images[currentIndex].img}
            onClick={() => handleClick(images[currentIndex], currentIndex)}
          />
        )}
        <div className="imgs-side">
          {images.slice(0, visibleItems).map((item, index) => {
            if (index === 0) {
              return null;
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
        <div></div>
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