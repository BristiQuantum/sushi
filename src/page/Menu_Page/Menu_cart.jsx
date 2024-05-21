/* eslint-disable react/prop-types */
import img4 from '../../assets/menu/leaf.png'
import img5 from '../../assets/menu/Dots.png'

const Menu_cart = ({ data }) => {
    const { name, price, description, photo_url } = data;


    return (
        <div className="menu-cart">
            <div className="menu-img-box"><img src={photo_url} alt="" className='img-size' /></div>
            <div className="">
                <div className="flex items-center gap-3">
                    <h4 className='h4'>{name}</h4>
                    <div className="menu-dacoration">
                        <div className=""><img src={img4} alt="" className='min-w-6 sm:w-6' /></div>
                        <div className=""><img src={img5} alt="" className='w-fit' /></div>
                    </div>
                    <p >$<span className='font-extrabold'>{price}</span></p>
                </div>
                <div className="p">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Menu_cart;