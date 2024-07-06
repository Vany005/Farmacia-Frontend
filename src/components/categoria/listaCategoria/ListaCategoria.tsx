import React, {  useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Services';
import CardCategoria from '../cardCategoria/CardCategoria';


function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  const navigate = useNavigate();
  
  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategoria
      
      );

    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Erro ao buscar Categoria')
      
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);
  return (
    <>
    {}
      {categoria.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />

        
      )}

{}


      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;