import React, { useRef, useEffect, useState } from 'react';
import '../css/carrosel.css';
import api from '../axios';
import copo from '../img/copo.png';
import { useSelector } from 'react-redux';

function Carrosel() {
  const carrosselRef = useRef(null);
  const [dados, setDados] = useState([]);
  const sacola = useSelector((state) => state.State_sacola.sacola);

  useEffect(() => {
    api.get('/api/drinks_values')
      .then((result) => {
        console.log('Dados recebidos:', result.data);
        setDados(result.data);
      })
      .catch((erro) => {
        console.error('Houve um erro ao fazer a consulta:', erro);
      });
  }, []);

  function right() {
    const carrossel = carrosselRef.current;
    if (carrossel) {
      carrossel.scrollBy({ left: 420, behavior: 'smooth' });
    }
  }

  function left() {
    const carrossel = carrosselRef.current;
    if (carrossel) {
      carrossel.scrollBy({ left: -420, behavior: 'smooth' });
    }
  }

  
  function getUser() {

  console.log('sacola:', sacola);

  if (!sacola || !sacola.nome) {
    console.error('sacola ou sacola.nome indefinido. Não foi feito o POST.');
    return;
  }

  api.post('/api/insercao_products', { nome: sacola.nome })
    .then((results) => {
      // axios retorna o corpo em results.data
      console.log('Resposta do servidor:', results.data);
    })
    .catch((error) => {
      console.error('Houve um erro:', error.response?.data ?? error.message);
    });
}




  return (
    <div>
      {/* Botões de navegação */}
      <div className='buttons'>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={left} width="32" height="32" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" onClick={right} width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
      </div>

      {/* Carrossel dinâmico com dados da API */}
      <div className='carrosel' ref={carrosselRef}>
        {dados.map((item, index) => (
          <div key={index} className='quadros-carrosel'>
            <div className='img'>
              {<img src={copo} width='150px'/>}

            </div>

            <div className='nome'>
              {item.nome}
            </div>

            <div className='valor'>
              {item.valor}
            </div>

            <div className='sabor'>
              {item.sabor}
            </div>

            <div className='button'>
              <button type="button" onClick={() => { 
  getUser(); 
 }}>
  Fazer pedido
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrosel;
