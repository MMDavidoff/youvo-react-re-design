import React from 'react';
import Container from '../components/container/Container';
import AuthMenu from '../components/AuthMenu/AuthMenu';
import Row from '../components/row/Row';
import RegTopBar from '../components/regTopBar/RegTopBar';

const RegisterPage = () => {
  return (
    <main>
          <RegTopBar isRegister={false} />
        <Row>
        <AuthMenu isLogin={false} />
        </Row>
      
    </main>
  );
}

export default RegisterPage;
