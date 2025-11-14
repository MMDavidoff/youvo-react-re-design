import React from 'react';
import Container from '../components/container/Container';
import RegisterMenu from '../components/registerMenu/RegisterMenu';
import Row from '../components/row/Row';
import RegTopBar from '../components/regTopBar/RegTopBar';

const LoginPage = () => {
  return (
    <div>
       <Container>
          <RegTopBar isRegister={false} />
        <Row>
        <RegisterMenu signTitle="Sign In"/>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
