import { FaFilePdf } from "react-icons/fa6";
import Footer from "../common/Navbar/Footer/Footer";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import { useRef } from "react";


const Blog_Page_Single = () => {
    const navigate = useNavigate();
    const goToBlog = () => {
        navigate("/blog");
    };

    const dref = useRef();

    const handleDownload = () => {
        // Create a new instance of jsPDF
        const doc = new jsPDF({
            format: 'a4',
        });

        // Add title to the PDF
        doc.text("Blog Title", 10, 10); // Add your blog title here

        // Convert the content element to HTML string
        const content = dref.current.innerHTML;

        // Split the content into lines to fit the page width
        const contentLines = doc.splitTextToSize(content, 180); // Adjust width as needed

        // Add content to the PDF
        doc.text(contentLines, 10, 20); // Adjust position as needed

        // Save the PDF
        doc.save("blog.pdf");
    };

    return (
        <div className="flex-home">
            {/* left side  */}
            <div className="menu-left single-blog-bg">
                <h1>Blog Page</h1>
            </div>

            {/* right side  */}
            <div ref={dref} className="flex-right-side sm:overflow-y-scroll md:px-9">
                <div className="flex justify-between items-center">
                    <div onClick={goToBlog} className="flex items-center gap-3  text-[#da0726] py-2 px-8 rounded-full transition-all ease-in-out duration-300 hover:text-white"><TiArrowBack /> <h6>Go Back</h6></div>
                    <div onClick={handleDownload} className="flex items-center gap-3 border border-[#da0726] py-2 px-8 rounded-full text-xs transition-all ease-in-out duration-300 hover:border-white"><h6>Download</h6> <FaFilePdf className="text-[#da0726] text-lg" /></div>
                </div>
                <div className="md:text-center my-9">
                    <p className="text-xs">24th Aug 2023</p>
                    <h3 className='text-3xl md:text-4xl border-b-4 border-[#da0726] pb-3 mb-20'>How Qitchen Redefines Flavor Harmony in Every Bite</h3>
                </div>

                <div className="space-y-9">
                    <div className="">
                        <h4 className="text-2xl mb-2">Unveiling Culinary Artistry: A Journey into Qitchens Soul</h4>
                        <p className="text-xs">In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you are not merely entering an eatery; you are immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
                    </div>
                    <div className="">
                        <h4 className="text-2xl mb-2">Crafting a Feast for the Senses</h4>
                        <p className="text-xs">In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you are not merely entering an eatery; you are immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
                        <p className="text-xs mt-3">The heart of Qitchens allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchens passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece. The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; its a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>
                    </div>
                    <div className="">
                        <h4 className="text-2xl mb-2">Beyond Sushi: Nurturing Connections</h4>
                        <p className="text-xs">In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. </p>
                        <p className="text-xs mt-3">Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you are not merely entering an eatery; you arre immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog_Page_Single;
