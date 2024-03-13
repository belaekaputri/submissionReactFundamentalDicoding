// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ToggleTheme from '../components/ToggleTheme';
import ToggleLocale from '../components/ToggleLocale';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import LocaleContext from '../contexts/LocaleContext';
import {register} from '../utils/network-data';

function RegisterPage(){
const navigate = useNavigate();
const {locale} = React.useContext(LocaleContext);

    async function onRegisterHandler(user){
        const {error} = await register(user);
        if (!error) {
            navigate("/");
          }
    }

    return(
        <section>
            <div className='btn-tgl'>
            <ToggleTheme/>
            <p><Link to="/">{locale === 'id' ? 'Login' : 'Masuk'}</Link></p>
            <ToggleLocale/>
            </div>
            <div>
            <RegisterInput register={onRegisterHandler}/>
            </div>
        </section>
    )
    
}
RegisterPage.propTypes = {
    loginSuccess: PropTypes.func
  }
  
  export default RegisterPage;