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
  width: 1310px;
  height: 50px;
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0px 2px 12px #F34970;
`;

// Страницы:
// 1)Регистрация
// 2)Авторизация
// 3)Главная (идет на катег)
// 4)Категории (идет на товар)
// 5)Изделия (описание товара)
// 6)Корзина(стоимость, сумма)
// 7)Форма заказать(история заказов)
// 8)Новое изделие(создание)
// 9)Новая категория(создание)
// 10)Пользователи(управление)