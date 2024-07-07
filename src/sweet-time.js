import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Authorization, Registration, Users, Confection, Cart } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  background: rgb(0,206,249);
  background-color: #FFF;
`;

const Page = styled.div`
  padding: 120px;
`;

// const H2 = styled.h2`
// text-align: center;
// `;

export const SweetTime = () => {
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path='/' element={<div>ГЛАВНАЯ СТРАНИЦА</div>} />
          <Route path='/login' element={<Authorization />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/users' element={<Users />} />
          <Route path='/categories/:categoryId' element={<div>СТРАНИЦА КАТЕГОРИИ</div>} />
          <Route path='/category' element={<div>СТРАНИЦА НОВОЙ КАТЕГОРИИ</div>} />
          <Route path='/confections/:confectionId' element={<Confection />} />
          <Route path='/confection' element={<div>СТРАНИЦА НОВОГО ИЗДЕЛИЯ</div>} />
          <Route path='/carts/:cartId' element={<Cart />} />
          <Route path='*' element={<div>СТРАНИЦА ОШИБОК</div>} />
        </Routes>

        {/*  // Страницы:
      // 1)Регистрация
      // 2)Авторизация
      // 3)Главная (идет на катег)
      // 4)Категории (идет на товар)
      // 5)Изделия (описание товара)
      // 6)Корзина(стоимость, сумма)
      // 7)Форма заказать(история заказов)
      // 8)Новое изделие(создание)
      // 9)Новая категория(создание)
      // 10)Пользователи(управление) */}
      </Page>
      <Footer />
    </AppColumn>
  );
}
