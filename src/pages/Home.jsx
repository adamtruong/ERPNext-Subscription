import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer' 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    position: 'relative',
    backgroundColor: '#243C54',
    width: '100vw',
    paddingLeft: 0,
  };
  const navigate = useNavigate();

  const handleFooterClick = () => {
    console.log('Footer clicked');
    navigate('/Login');
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <img href="#" src="https://erpnext.com/files/erpnext-comic400604.png" width="1100" alt="" />
      </div>
      <div className="container-fluid" style={containerStyle}>
        <div className="row align-items-center">
          <div className="col pl-6">
            <h1 className="nav-link fs-3  fw-bold text-white" href="#">Comprehensive Business Management and Operation Platform</h1>
            <p className="text-white">Reasonable price</p>
            <p className="text-white">Suitable for different business fields</p>
            <p className="text-white">Based on the Frappe Framework</p>
          </div>
          <div className="col ml-aboutUs">
            <img className="navbar-brand mt-5 mb-5" href="#" src="https://erpnext.com/files/erpnext-hero-compressed.png" width="450" alt="" />
          </div>
        </div>
      </div>
      <p onClick={handleFooterClick}>
        <Footer onClick={handleFooterClick} /> 
      </p>
    </div>
  )
}

export default Home;
