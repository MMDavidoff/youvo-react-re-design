import React from 'react';
import Container from '../components/container/Container';
import RegisterMenu from '../components/registerMenu/RegisterMenu';
import Row from '../components/row/Row';
import RegTopBar from '../components/regTopBar/RegTopBar';

const RegisterPage = () => {
  return (
    <main>
      <Container>
          <RegTopBar isRegister={true} />
        <Row>
        <RegisterMenu signTitle="Sign Up"/>
        </Row>
      </Container>
      
    </main>
  );
}

export default RegisterPage;
