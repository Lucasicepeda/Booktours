import './categorias.css';
import { categories } from '../../helpers/getCategories.js';
import { useEffect, useState } from 'react';
import { getProducts } from '../../helpers/getProducts.js';
import { Link } from 'react-router-dom';

function Categorias({ setShowCards }) {

  const [category, setCategory] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const catgorias = async () => {
      const cat = await category();
      setCategory(cat.result);
    };
    catgorias();
  }, []);

  const handleCategory = async (name) => {
    setShowCards();
    const product = await getProducts({ query: name });
    setProductos(product.products);
  };

  const [favorites, setFavorites] = useState({});
  const addFav = (productId) => {
      setFavorites((prevFavorites) => ({
          ...prevFavorites,
          [productId]: !prevFavorites[productId],
      }));
  };

  return (
    <div className='categoriasContainer'>

      <div className='categorias'>
        <h2>Categorias</h2>
        <div className='categoryCards'>
          {categorie.map((categ) => (
            <div className='unidCardCategory' key={categ._id} onClick={() => handleCategory(categ.name)}>
              <h4 className='textCardCat'>{categ.name}</h4>
              <img src={categ.url} alt={categ.name} />
            </div>
          ))}
        </div>
      </div>

      <div className='cards'>
            {(productos && productos.docs) && productos.docs.map((prod) => (
                <div key={prod._id} className='cardDiv'>
                    <div className='cardText'>
                        <div className='titleYCat'>
                            <h4>{prod.title}</h4>
                            <div className='cardInterText'>
                                <p className='parr'>{prod.category}</p>
                                <p className='smallDesc'>{prod.smalldescription}</p>
                            </div>
                        </div>
                        <div className="priceYBtn">
                            <p className='price'>{prod.price} U$D</p>
                            <Link to={`/detail/${prod._id}`}>
                                <button>Reservar</button>
                            </Link>
                        </div>
                    </div>
                    <img src={prod.img[0].imgUrl} alt={prod.title} />
                    <div className='favBtnDiv'>
                        <button
                            onClick={() => addFav(prod._id)}
                            className="favButton"
                        >
                            {favorites[prod._id] ? '❤️' : '🤍'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Categorias;