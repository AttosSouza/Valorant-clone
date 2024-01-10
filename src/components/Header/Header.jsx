import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Riot from '../../assets/images/logo-riot-games.svg?react';
import Valorant from '../../assets/images/logo-valorant.svg?react';
import Search from '../../assets/images/search.svg?react';
import Globe from '../../assets/images/globe.svg?react';
import Warn from '../../assets/images/warn.svg?react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`${isOpen ? 'active' : ''} nav`}>
        <div className="leftContent">
          <div className="logoBx">
            <div className="riotLogo">
              <Link to="#">
                <Riot />
              </Link>
            </div>
            <div className="valorantLogo">
              <Link to="#">
                <Valorant />
              </Link>
            </div>
          </div>
          <ul className="list">
            <li>
              <Link to="#">INFORMAÇÕES DO JOGO</Link>
            </li>
            <li>
              <Link to="#">MÍDIA</Link>
            </li>
            <li>
              <Link to="#">NOTÍCIAS</Link>
            </li>
            <li>
              <Link to="#">PLACAR</Link>
            </li>
            <li>
              <Link to="#">SUPORTE</Link>
            </li>
            <li>
              <Link to="#">SOCIAL</Link>
            </li>
            <li>
              <Link to="#">ESPORTS</Link>
            </li>
            <li>
              <Link to="#">COMUNIDADE</Link>
            </li>
          </ul>
        </div>
        <div className="rightContent">
          <div className="searchBx">
            <Link to="#">
              <Search />
            </Link>
          </div>
          <div className="alertBx">
            <Link to="#">
              <Warn />
            </Link>
          </div>
          <div className="globeBx">
            <Link to="#">
              <Globe />
            </Link>
          </div>
          <button className="playBtn">JOGUE AGORA</button>

          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-haspopup="true"
            aria-controls="menu"
            className="btn"
          >
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
