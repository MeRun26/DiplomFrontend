import { ControlPanel, Logo } from './components';
import styled from 'styled-components'

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 20px 0px;
  background-color: #fff;
  box-shadow: 0px 1px 10px #F34970;
  z-index: 10;
`;