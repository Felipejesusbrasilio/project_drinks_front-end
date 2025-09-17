import '../css/admin.css';
import React, { useRef,useEffect,useState } from 'react';
import api from '../axios';


function Admin(){

const [dados, setDados] = useState([]);

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

const nome = useRef(null);
const valor = useRef(null);
const sabor = useRef(null);

function getValues(){


const nomeValue = nome.current.value;
const valorValue = valor.current.value
const saborValue = sabor.current.value;

console.log(nomeValue);
console.log(valorValue);
console.log(saborValue);

api.post('/api/drinks', {
      nome: nomeValue,
      valor: valorValue,
      sabor: saborValue
})
 .then((result) => {
      console.log('Resposta da API:', result.data);
 })
  .catch((error) => {
      console.log('Houve um erro:', error);
 });

}


function getInputs(index){

console.log("Índice do item a ser deletado:", index);

  // Aqui você faz a requisição para deletar
  api.delete('/api/drinks_delete', {
  data: { index } // index é o ID do drink que você quer deletar
})
  .then(() => {
    console.log('Drink deletado com sucesso!');
  })
  .catch((erro) => {
    console.error('Erro ao deletar:', erro);
  });

}


return(

<div className='admin'>

<div className='quadro-admin'>

<form>

<label>nome</label>
<input type='text' ref={nome} name='nome' placeholder='nome do drink'/>
<label>valor</label>
<input type='text' ref={valor} name='valor' placeholder='valor do drink'/>
<label>sabor</label>
<input type='text' ref={sabor} name='sabor' placeholder='sabor do drink'/>

<button type='button' onClick={getValues}>Enviar</button>

</form>

</div>

<div className='bd'>

{dados.map((result) => (
  <div className='quadros-bd' key={result.id}>
    <p>{result.nome}</p>

    <button type='button' onClick={() => getInputs(result.id)}>
      Deletar
    </button>
  </div>
))}

</div>

</div>


);


}

export default Admin;