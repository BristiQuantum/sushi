import { Link } from 'react-router-dom';
import img1 from '../../assets/about/a1.png'
import img2 from '../../assets/about/a2.png'
import star from '../../assets/about/star.png'
import t1 from '../../assets/about/t2.jpg'
import Footer from '../common/Navbar/Footer/Footer';
import { TiArrowForward } from 'react-icons/ti';
import { Helmet } from 'react-helmet';


const About = () => {
    return (
        <div className="flex-home">
            <Helmet><title>Sushi || About</title></Helmet>
            {/* left side  */}
            <div className="menu-left about-bg">
                <h1>About Us</h1>
            </div>




            {/* right side  */}

            <div className="flex-right-side sm:overflow-y-scroll w-full">
                {/* 1st section  */}
                <div className="flex flex-col sm:flex-row h-fit gap-5">
                    <div className="basis-1/2 p-4 border border-gray-500 rounded-xl">
                        <h3 className='text-3xl'>Sushi Artistry Redefined</h3>
                        <p className='text-xs mt-7 leading-5'>Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.</p>
                    </div>
                    <div className="basis-1/2"><img src={img1} alt="" className='w-full rounded-xl h-full' /></div>
                </div>
                {/* 2nd section  */}
                <div className="flex gap-5 my-7 h-[20%]">

                    <img src={star} alt="" className='border border-gray-500 rounded-xl'/>
                    <img src={star} alt="" className='border border-gray-500 rounded-xl'/>
                    <img src={star} alt="" className='border border-gray-500 rounded-xl'/>

                </div>
                {/* 3rd section  */}
                <div className="flex  gap-5 my-7 h-[20%] border border-gray-500 rounded-xl p-5">

                    <div className="basis-1/4 ">
                        <img src={t1} alt="" className='w-full rounded-xl h-full'/>
                    </div>
                    <div className="flex items-center">
                        <Link to="/team" className='text-[#da0726] flex items-center gap-3'><h6 className='transi duration-300 hover:text-white'>Know More About Our Expert Chef</h6><TiArrowForward className=' ani2'/></Link>
                    </div>

                </div>
                {/* 4th section  */}
                <div className="flex flex-col sm:flex-row h-fit gap-5">
                    <div className="basis-1/2"><img src={img2} alt="" className='w-full rounded-xl h-full' /></div>
                    <div className="basis-1/2 p-4 border border-gray-500 rounded-xl">
                        <h3 className='text-3xl'>Our Story</h3>
                        <p className='text-xs mt-7 leading-5'>Founded with a passion for culinary excellence, Qitchens journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.</p>
                    </div>
                </div>

                <Footer></Footer>
            </div>


        </div>
    );
};

export default About;