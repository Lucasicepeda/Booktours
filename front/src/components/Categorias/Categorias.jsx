import './categorias.css';
import { categories } from '../../helpers/getCategories.js';
import { useEffect, useState } from 'react';

function Categorias() {

  const [categorie, setCategoire] = useState([]);

  useEffect(() => {
    const catgorias = async () => {
      const cat = await categories();
      setCategoire(cat.result);
    };
    catgorias();
  }, []);

  return (
    <div className='categorias'>
      <h2>Categorias</h2>
      <div className='categoryCards'>
        {categorie.map((categ) => (
          <div className='unidCardCategory' key={categ._id}>
            <h4 className='textCardCat'>{categ.name}</h4>
            <img src={categ.url} alt={categ.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;