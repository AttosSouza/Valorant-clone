import React from 'react';
import './style.css';

const Hero = () => {
  return (
    <section>
      <div className="container hero">
        <div className="hero-content">
          <h1>Um jogo de tiro tático baseado em personagem 5v5</h1>
          <img
            src="/src/assets/images/logo-valorant-letter.svg"
            alt="Valorant"
          />
          <p>
            Valorant é um jogo eletrônico multijogador gratuito para jogar de
            tiro
            <br /> em primeira pessoa desenvolvido e publicado pela Riot Games.
          </p>
          <button>JOGUE GRÁTIS</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
