import '../css/cadastrar.css';
import api from '../axios';
import { useDispatch } from 'react-redux';


function Cadastro_user(){

const dispatch = useDispatch();

function getUser(){


let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let senha = document.getElementById('senha').value;
let endereco = document.getElementById('endereco').value;
let numero = document.getElementById('numero').value;
let bairro = document.getElementById('bairro').value;

console.log(nome)
console.log(email)
console.log(senha)
console.log(endereco)
console.log(numero)
console.log(bairro)

api.post('/api/insercao_users',{

	nome:nome,
	email:email,
	senha:senha,
	endereco:endereco,
	numero:numero,
	bairro:bairro

}).then((result)=>{


console.log(result.data)

dispatch({
  type: 'ADD',
  payload: {
    nome,
    email,
    senha,
    endereco,
    numero,
    bairro
  } // adiciona "item3" à sacola existente
});

}).catch((error)=>{

console.log('Houve um error no post')

})


}



return(


<div className='cadastrar'>
 
<form>

<label>Nome</label>
<input type='text' id='nome' placeholder='nome'/>
<label>E-mail</label>
<input type='text' id='email' placeholder='email'/>
<label>senha</label>
<input type='password' id='senha' placeholder='senha'/>
<label>Endereço</label>
<input type='text' id='endereco' placeholder='endereco'/>
<label>Numero</label>
<input type='text' id='numero' placeholder='numero'/>
<label>Bairro</label>
<input type='text' id='bairro' placeholder='bairro'/>
<br/>
<button type='button' onClick={getUser}>Enviar</button>

</form>


</div>


);


}


export default Cadastro_user;