import { useNavigate } from 'react-router-dom';
import img from '../../assets/blog/b2.png'
import Footer from '../common/Navbar/Footer/Footer';
import { Helmet } from 'react-helmet';

const Blog_Page = () => {

    const navigate = useNavigate()
    const goToSingleBlog = () => {
        navigate('/blog-single')
    }

    return (
        <div className="flex-home">
            <Helmet><title>Sushi || Blogs</title></Helmet>
            {/* left side  */}
            <div className="menu-left blog-bg">
                <h1>Blog Page</h1>
            </div>

            {/* right side  */}
            <div className="flex-right-side sm:overflow-y-scroll">
                <div className="mt-7 mb-16 ">
                    <h3 className="text-3xl text-center mb-4">Behind the Scenes <br /> & Latest News</h3>
                </div>
                {/* blog post  */}
                <div className="blog-post sm:px-8 space-y-12">
                    {/* post 1  */}
                    <div onClick={goToSingleBlog} className="md:flex justify-between items-center border-b border-gray-500 pb-4">
                        <div className="h-28 w-56 mx-auto mb-2 md:mb-0 md:mr-5  md:mx-0"><img src={img} alt="" className='rounded-xl w-full h-full'/></div>
                        <div className="space-y-1">
                            <p className='text-[9px]'>24th Aug 2023</p>
                            <h3 className='text-xl'>How Qitchen Redefines Flavor Harmony in Every Bite</h3>
                            <p className='text-xs'>Experience an orchestra of tastes as Qitchens sushi unveils a symphony of perfectly balanced flavors.</p>
                        </div>
                    </div>
                    {/* post 2  */}
                    <div onClick={goToSingleBlog} className="md:flex justify-between items-center border-b border-gray-500 pb-4">
                        <div className="h-28 w-56 mx-auto mb-2 md:mb-0 md:mr-5  md:mx-0"><img src={img} alt="" className='rounded-xl w-full h-full'/></div>
                        <div className="space-y-1">
                            <p className='text-[9px]'>24th Aug 2023</p>
                            <h3 className='text-xl'>How Qitchen Redefines Flavor Harmony in Every Bite</h3>
                            <p className='text-xs'>Experience an orchestra of tastes as Qitchens sushi unveils a symphony of perfectly balanced flavors.</p>
                        </div>
                    </div>
                       {/* post 3  */}
                       <div onClick={goToSingleBlog} className="md:flex justify-between items-center border-b border-gray-500 pb-4">
                        <div className="h-28 w-56 mx-auto mb-2 md:mb-0 md:mr-5  md:mx-0"><img src={img} alt="" className='rounded-xl w-full h-full'/></div>
                        <div className="space-y-1">
                            <p className='text-[9px]'>24th Aug 2023</p>
                            <h3 className='text-xl'>How Qitchen Redefines Flavor Harmony in Every Bite</h3>
                            <p className='text-xs'>Experience an orchestra of tastes as Qitchens sushi unveils a symphony of perfectly balanced flavors.</p>
                        </div>
                    </div>
                       {/* post 4  */}
                       <div onClick={goToSingleBlog} className="md:flex justify-between items-center border-b border-gray-500 pb-4">
                        <div className="h-28 w-56 mx-auto mb-2 md:mb-0 md:mr-5  md:mx-0"><img src={img} alt="" className='rounded-xl w-full h-full'/></div>
                        <div className="space-y-1">
                            <p className='text-[9px]'>24th Aug 2023</p>
                            <h3 className='text-xl'>How Qitchen Redefines Flavor Harmony in Every Bite</h3>
                            <p className='text-xs'>Experience an orchestra of tastes as Qitchens sushi unveils a symphony of perfectly balanced flavors.</p>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog_Page;