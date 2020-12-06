import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm,register } from '../../modules/auth';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form,auth,authError} = useSelector(({auth}) =>({
        form:auth.register,
        auth:auth.auth,
        authError:auth.authError
    }))

    const onChange = e => {
        const {value, name} =e.target;
        dispatch(
            changeField({
                form:'register',
                key:name,
                value
            })
        )
        }
        const onSubmit = e => {
            e.preventDefault();
            const {username,password,passwordConfirm} = form;
            if(password !== passwordConfirm) {
                alert('비밀번호와 비밀번호 확인이 틀립니다.')
                return;
            }
            dispatch(register({username,password}))
        }

        useEffect(()=> {
            dispatch(initializeForm('register'))
        },[dispatch]);

        //회원가입 성공/실패 처리
        useEffect(()=> {
            if(authError) {
                console.log('오류발생')
                console.error(authError)
            }
            if(auth) {
                console.log('성공')
                console.log(auth)
            }
        },[authError,auth])
    return(
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />

    );
}

export default RegisterForm;