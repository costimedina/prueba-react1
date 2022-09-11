import logo from '../Assets/img/logo.png';
import '../Style-sheets/Logo.css';

const Logo = () => {
  return (
    <div className='container-img'>
      <img className='logo-img' src={logo} alt="logo estudio ghibli" />
    </div>
  );
};

export default Logo;  