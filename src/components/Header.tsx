import { FaSearch } from 'react-icons/fa';
import { CgCrown } from 'react-icons/cg';
import { BsPerson } from 'react-icons/bs';

import {
  Container,
  LeftMenu,
  MiddleMenu,
  RightMenu,
} from '../styles/components/Header';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <Container>
      <LeftMenu>
        <img src="/favicon.svg" alt="Twitch Clone" width="32" height="32" />
        <ul>
          <li>
            <a href="#">Procurar</a>
          </li>
          <li>...</li>
        </ul>
      </LeftMenu>
      <MiddleMenu>
        <div>
          <input id="search" type="text" placeholder="Buscar" />
          <label aria-label="search" htmlFor="search">
            Buscar
          </label>
          <FaSearch size={16} />
        </div>
      </MiddleMenu>
      <RightMenu>
        <CgCrown size={24} />
        <Button buttonType="secondary">Entrar</Button>
        <Button buttonType="primary">Cadastrar-se</Button>
        <BsPerson size={24} color="#fafafa" />
      </RightMenu>
    </Container>
  );
};

export default Header;
