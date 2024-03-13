// eslint-disable-next-line no-unused-vars
import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';


function LoginInput({login}){
    const {locale} = React.useContext(LocaleContext);
    const [email,onEmailChange]= useInput('');
    const [password,onPasswordChange]= useInput('');

 const onSubmitHandler = (e) =>{
    e.preventDefault();
    login({email,password});
 };
return(
 <form className='noteInput' onSubmit={onSubmitHandler}>
 <h1>{locale === 'id' ?'Masuk': 'Login'}</h1>
 <input type="email" placeholder='Email' value={email} onChange={onEmailChange}/>
 <input type="password" placeholder={locale === 'id' ?'Kata Sandi': 'Password'} value={password} onChange={onPasswordChange}/>
 <button type='submit' className='btn-Add'>{locale === 'id' ?'Masuk': 'Sign In'}</button>
</form>
);
}

LoginInput.propTypes = {
    login:PropTypes.func.isRequired,
};

export default LoginInput;