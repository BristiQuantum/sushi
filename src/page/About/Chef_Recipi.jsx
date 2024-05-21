
import img1 from '../../assets/menu/m2.png'
import img2 from '../../assets/about/t2.jpg'
import Booking from '../common/Booking/Booking';
import Footer from '../common/Navbar/Footer/Footer';

const Chef_Recipi = () => {
    return (
        <div className="flex-home">
            {/* left side  */}
            <div className="menu-left about-bg">
                <h1> Chef recipi</h1>
            </div>




            {/* right side  */}

            <div className="flex-right-side sm:overflow-y-scroll w-full">
                {/* 1st section  */}
                <div className="flex flex-col sm:flex-row h-fit gap-5">
                    <div className="basis-1/2 p-4 border border-gray-500 rounded-xl">
                        <h3 className='text-3xl'>Sushi Artistry Redefined</h3>
                        <p className='text-xs mt-7 leading-5'>Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.</p>
                    </div>
                    <div className="basis-1/2"><img src={img2} alt="" className='w-full rounded-xl h-full' /></div>
                </div>

                {/* 2nd section  */}
                <div className="mt-14 pb-14">
                    <h3 className='text-2xl text-center border-b md:w-1/2 mx-auto border-[#da0726] pb-1 mb-5'>My recipies</h3>
                    <div className="space-y-7 px-8">
                        <div className="flex items-center gap-5">
                            <div className="w-36 h-20"><img src={img1} alt="" className='w-full h-full rounded-2xl'/></div>
                            <div className="space-y-2">
                                <h5 className='text-xl'>Lorem, ipsum dolor.</h5>
                                <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laborum dolorum consequuntur eius ab harum?</p>
                                <p className='text-xs'>Available: <span className='text-[#da0726] font-bold inline-block ml-3'>Yes</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-36 h-20"><img src={img1} alt="" className='w-full h-full rounded-2xl'/></div>
                            <div className="space-y-2">
                                <h5 className='text-xl'>Lorem, ipsum dolor.</h5>
                                <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laborum dolorum consequuntur eius ab harum?</p>
                                <p className='text-xs'>Available: <span className='text-[#da0726] font-bold inline-block ml-3'>Yes</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-36 h-20"><img src={img1} alt="" className='w-full h-full rounded-2xl'/></div>
                            <div className="space-y-2">
                                <h5 className='text-xl'>Lorem, ipsum dolor.</h5>
                                <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laborum dolorum consequuntur eius ab harum?</p>
                                <p className='text-xs'>Available: <span className='text-[#da0726] font-bold inline-block ml-3'>Yes</span></p>
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

export default Chef_Recipi;