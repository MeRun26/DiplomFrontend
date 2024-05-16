import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
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

const H2 = styled.h2`
text-align: center;
`;

export const SweetTime = () => {
  return (
    <AppColumn>
      <Header />
      <Content>
        <H2>Контент Страницы</H2>

        <Routes>
          <Route path='/' element={<div>MAIN PAGE</div>} />
          <Route path='/login' element={<div>LOGIN PAGE</div>} />
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

      </Content>
      <Footer />
    </AppColumn>
  );
}
