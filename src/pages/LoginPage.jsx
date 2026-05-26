import React from 'react';
import Container from '../components/container/Container';
import AuthMenu from '../components/AuthMenu/AuthMenu';
import Row from '../components/row/Row';
import RegTopBar from '../components/regTopBar/RegTopBar';


const LoginPage = () => {
  return (
    <div>
      
          <RegTopBar isAuth={true} />
        <Row>
        <AuthMenu isLogin={true} />
        </Row>
    </div>
  );
}

export default LoginPage;
