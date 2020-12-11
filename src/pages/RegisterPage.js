import React from 'react';

import AuthTemplate from '../components/auth/AuthTemplate';
import Footer from '../components/common/Footer';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm/>
    </AuthTemplate>
  );
};

export default RegisterPage;
