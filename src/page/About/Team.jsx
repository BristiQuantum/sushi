import { useNavigate } from 'react-router-dom';
import Footer from '../common/Navbar/Footer/Footer';
import t1 from '../../assets/about/t1.jpg';
import t2 from '../../assets/about/t2.jpg';
import Booking from '../common/Booking/Booking';
import { Helmet } from 'react-helmet';

const Team = () => {
    const navigate = useNavigate();
    const goToChef = () => {
        navigate("/chef-recipi")
    }

    return (
        <div className="flex-home">
            <Helmet><title>Sushi || About || Team</title></Helmet>
            {/* left side  */}
            <div className="menu-left about-bg">
                <h1>Our Chef</h1>
            </div>




            {/* right side  */}

            <div className="flex-right-side sm:overflow-y-scroll w-full ">
                <div className="">
                    <h3 className='text-3xl text-center'>Know More About Our <br /> Expert Chef</h3>
                    <p className='text-xs mb-9 mt-4 md:px-9 leading-[2]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate, maxime laboriosam ad illo labore vero? Dolorum repellendus esse neque voluptates voluptas impedit, molestias rem, ab consequatur nisi optio et cumque suscipit?</p>
                </div>



                <div className="  h-fit py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                      

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                           
                            <div onClick={goToChef}
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={t1} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative font-extrabold ml-4 mb-3 inline-block text-sm  md:ml-5 text-[#da0726]">View Details & Checks Recipies</span>
                            </div>
                            <div onClick={goToChef}
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img src={t2}loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm  md:ml-5 text-[#da0726] font-extrabold">View Details & Checks Recipies</span>
                            </div>
                            
                            <div onClick={goToChef}
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img src={t2} loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm  md:ml-5 text-[#da0726] font-extrabold">View Details & Checks Recipies</span>
                            </div>
                            <div onClick={goToChef}
                                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={t1} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>
                                
                                <span className="relative ml-4 mb-3 inline-block text-sm  md:ml-5 text-[#da0726] font-extrabold">View Details & Checks Recipies</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Booking></Booking>

                <Footer></Footer>
            </div>

        </div>
    );
};

export default Team;