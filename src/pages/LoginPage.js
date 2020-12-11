import React from 'react';

import AuthTemplate from '../components/auth/AuthTemplate';
import Footer from '../components/common/Footer';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return (
        <>
        <AuthTemplate>
            <LoginForm/>
        </AuthTemplate>
         </>
    );
}

export default LoginPage;