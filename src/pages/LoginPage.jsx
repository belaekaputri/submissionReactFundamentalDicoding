// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ToggleTheme from '../components/ToggleTheme';
import ToggleLocale from '../components/ToggleLocale';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import LocaleContext from '../contexts/LocaleContext';
import {login} from '../utils/network-data';

function LoginPage({loginSuccess}){
const {locale} = React.useContext(LocaleContext);

    async function onLogin({email,password}){
        const {error,data} = await login({email,password});
        if(!error){
            loginSuccess(data);
        }
    }

    return(
        <section>
            <div className='btn-tgl'>
            <ToggleTheme/>
            <p><Link to="/register">{locale === 'id' ? 'Daftar' : 'Register'}</Link></p>
            <ToggleLocale/>
            </div>
            <div>
            <LoginInput login={onLogin}/>
            </div>
        </section>
    )
    
}
LoginPage.propTypes = {
    loginSuccess: PropTypes.func
  }
  
  export default LoginPage;