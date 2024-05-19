import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Authorization } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1350px;
  min-height: 100%;
  margin: 0 auto;
  background: rgb(0,206,249);
  background-color: #FFF;
`;

const Content = styled.div`
  padding: 120px;
`;

// const H2 = styled.h2`
// text-align: center;
// `;

export const SweetTime = () => {
  return (
    <AppColumn>
      <Header />
      <Content>
        <Routes>
          <Route path='/' element={<div>MAIN PAGE</div>} />
          <Route path='/login' element={<Authorization />} />
          <Route path='/register' element={<div>REGISTER PAGE</div>} />
          <Route path='/category/:category_id' element={<div>CATEGORY PAGE</div>} />
          <Route path='/category' element={<div>NEW CATEGORY PAGE</div>} />
          <Route path='/confection/:confection_id' element={<div>CONFECTION PAGE</div>} />
          <Route path='/confection' element={<div>NEW CONFECTION PAGE</div>} />
          <Route path='/users' element={<div>USERS PAGE</div>} />
          <Route path='/basket' element={<div>BASKET PAGE</div>} />
          <Route path='/orders' element={<div>ORDERS PAGE</div>} />
          <Route path='*' element={<div>ERROR PAGE</div>} />
        </Routes>
        {/*         
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
      // 10)Пользователи(управление) */}
      </Content>
      <Footer />
    </AppColumn>
  );
}
