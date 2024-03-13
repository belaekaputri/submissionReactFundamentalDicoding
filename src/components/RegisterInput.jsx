// eslint-disable-next-line no-unused-vars
import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';


function RegisterInput({register}){
    const {locale} = React.useContext(LocaleContext);
    const [name, onNameChange] = useInput('');
    const [email,onEmailChange]= useInput('');
    const [password,onPasswordChange]= useInput('');
    const [password2, onPasswordChange2] = useInput('');

    const onSubmitHandler = (e) =>{
    e.preventDefault();
    password !== password2
      ? alert("Confirm Password not match!")
      : register({ name, email, password,password2 });
 };
return(
 <form className='noteInput' onSubmit={onSubmitHandler}>
 <h1>{locale === 'id' ?'Daftar': 'Register'}</h1>
 <input type="text" placeholder={locale === 'id' ?'Nama': 'Name'} value={name} onChange={onNameChange}/>
 <input type="email" placeholder='Email' value={email} onChange={onEmailChange}/>
 <input type="password" placeholder={locale === 'id' ?'Kata Sandi': 'Password'} value={password} onChange={onPasswordChange}/>
 <input type="password" placeholder={locale === 'id' ? 'Ulang Kata Sandi' : 'Repeat Password'} value={password2} onChange={onPasswordChange2}/>
 <button type='submit' className='btn-Add'>{locale === 'id' ?'Daftar': 'Sign Up'}</button>
</form>
);
}

RegisterInput.propTypes = {
    register:PropTypes.func.isRequired,
};

export default RegisterInput;