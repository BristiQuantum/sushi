import { Helmet } from "react-helmet";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate()
    const goMenu =() => {
        navigate("/menu")
    }
    const goTableBook =() => {
        navigate("/book-table")
    }
    const goContact =() => {
        navigate("/contact")
    }



    return (
        <div className='flex-home'>
            <Helmet><title>Sushi || Home</title></Helmet>
            {/* left side  */}
            <div className="flex-left home-bg1">
                <h1>Sushi <br /> Sensation</h1>
            </div>
            {/* right side  */}
            <div className="flex-right">
                <div className="home-link-container home-bg2">
                    <button onClick={goMenu} className="button-89" role="button">
                        <span>menu</span>
                        <IoMdArrowForward className="home-link-icon" />
                    </button>
                </div>
                <div className="home-link-container home-bg3">
                    <button onClick={goTableBook} className="button-89" role="button">
                        <span>Book A Tabl3</span>
                        <IoMdArrowForward className="home-link-icon" />
                    </button>
                </div>
                <div className="home-link-container home-bg4">
                    <button onClick={goContact} className="button-89" role="button">
                        <span>Location</span>
                        <IoMdArrowForward className="home-link-icon" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;