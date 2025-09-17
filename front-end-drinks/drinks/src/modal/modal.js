// modal.js
import '../css/modal.css';
import React from 'react';
import { Link } from "react-router-dom";

function Md() {


function clouse(){


let md = document.querySelector('.md');

md.classList.remove('md-desktop-phone');


}


  return (
    <div className='md fixed-top'>
      <div className='md-clouse'>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={clouse} width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
      </div>
      <div className='md-body'>
         <Link to='/login' className='Link'>Login</Link>
         <Link to='/cadastrar' className='Link'>Cadastrar</Link>
      </div>
    </div>
  );
}

export default Md;