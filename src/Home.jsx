import React from 'react';
import botImage from './assets/bot-image.png'; // Substitua pelo caminho da sua imagem do bot
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="background-blur"></div>
      <div className="content">
        <div className="bot-image-container">
          <img src={botImage} alt="AniBattle Bot" className="bot-image" />
        </div>
        <h1>AniBattle Bot</h1>
        <h2>em breve</h2>
      </div>
      <footer>Criado por @avilaa03</footer>
    </div>
  );
};

export default Home;
