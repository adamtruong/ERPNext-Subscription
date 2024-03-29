import StripePricingTable from "./StripePricingTable";
const Footer = () => {

    const cardStyle = {
        backgroundColor: '#243C54',
        width: '20rem',
    };

    const itemStyle = {
        backgroundColor: '#243C54',
    }

    const textStyle = {
        color: '#243C54',
    };

    const buttonStyle = {
        backgroundColor: '#EA0774',
    }


    return (
            
        <nav className="footer section" id="pricing" style={{width: '100vw'}}>
            <div className="container-fluid text-center mb-5">
            <h1 className="nav-link fs-3  fw-bold mt-5 mb-5" style={textStyle} href="#">Pricing</h1>
            <StripePricingTable />
            </div>

        </nav>
    )
}

export default Footer
