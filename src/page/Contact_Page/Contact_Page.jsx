import { FaTwitter } from 'react-icons/fa';
import img from '../../assets/contact/c2.png'
import { ImFacebook2 } from 'react-icons/im';
import Footer from '../common/Navbar/Footer/Footer';
import { Helmet } from 'react-helmet';
import Map_Show from './Map_Show';


const Contact_Page = () => {
    return (
        <div className="flex-home">
            <Helmet><title>Sushi || Contact</title></Helmet>

            {/* left side  */}
            <div className="menu-left contact-bg">
                <h1>Contact</h1>
            </div>

            {/* right side  */}

            <div className="flex-right-side sm:overflow-y-scroll">
                {/* 1st iteam  */}
                <div className="flex flex-col lg:flex-row h-fit gap-5">
                    <div className="basis-1/2 text-nowrap">
                        <h3 className='text-3xl text-center mb-7'>Opening Hours</h3>
                        <div className="space-y-3">
                            <div className="flex items-center px-2">
                                <div className=""><h5>Monday</h5></div>
                                <div className="flex-grow text-center text-[9px]">.............................</div>
                                <div className=""><h5>16:00 - 22:30</h5></div>
                            </div>
                            <div className="flex items-center px-2">
                                <div className=""><h5>Tuesday</h5></div>
                                <div className="flex-grow text-center text-[9px]">................................</div>
                                <div className=""><h5>16:00 - 22:30</h5></div>
                            </div>
                            <div className="flex items-center px-2">
                                <div className=""><h5>Wednesday</h5></div>
                                <div className="flex-grow text-center text-[9px]">...............................</div>
                                <div className=""><h5>16:00 - 22:30</h5></div>
                            </div>
                            <div className="flex items-center px-2">
                                <div className=""><h5>Thursday</h5></div>
                                <div className="flex-grow text-center text-[9px]">..............................</div>
                                <div className=""><h5>16:00 - 22:30</h5></div>
                            </div>
                            <div className="flex items-center px-2">
                                <div className=""><h5>Friday</h5></div>
                                <div className="flex-grow text-center text-[9px]">..............................</div>
                                <div className=""><h5>16:00 - 22:30</h5></div>
                            </div>
                            <div className="flex items-center px-2">
                                <div className=""><h5>Saturday & Sunday</h5></div>
                                <div className="flex-grow text-center text-[9px]">.......................</div>
                                <div className=""><h5>10:30 - 22:30</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2"><img src={img} alt="" className='w-full h-full'/></div>
                </div>
                {/* 2nd iteam  */}
                <div className="flex flex-col-reverse lg:flex-row h-fit gap-5 mt-9">
                    {/* map  */}
                    <div className="basis-1/2 bg-red-600">
                        <Map_Show></Map_Show>
                    </div>

                    {/* contact  */}
                    <div className="basis-1/2  h-fit">
                        <h3 className='text-3xl text-center mb-7'>Get in touch</h3>
                        <div className="px-2">
                            <div className="space-y-5">
                                <div className="flex justify-between">
                                    <h6>Adress</h6>
                                    <p className='text-[10px]'>23 Greenfield Avenue,Prague 120 00</p>
                                </div>
                                <div className="flex justify-between">
                                    <h6>Phone</h6>
                                    <p className='text-[10px]'>+49 1234 567890</p>
                                </div>
                                <div className="flex justify-between">
                                    <h6>Email</h6>
                                    <p className='text-[10px]'>email@example.com</p>
                                </div>
                                <div className="flex justify-between">
                                    <h6>Follow</h6>
                                    <div className="flex gap-5">
                                    <FaTwitter />
                                    <ImFacebook2 />
                                    <FaTwitter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer></Footer>
            </div>


        </div>
    );
};

export default Contact_Page;