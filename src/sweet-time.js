import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`

padding: 120px;
`;

const H2 = styled.h2`
text-align: center;
`;

const Header = () => <div>SHAPKA</div>
const Footer = () => <div>FOOTER</div>

export const SweetTime = () => {
  return (
    <>
      <Header />
      <Content>
        <H2>Content page</H2>

        <Routes>
          <Route path='/' element={<div>MAIN PAGE</div>} />
          <Route path='/lodin' element={<div>LOGIN PAGE</div>} />
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
    </>
  );
}
