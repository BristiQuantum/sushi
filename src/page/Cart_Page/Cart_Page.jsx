
import Footer from "../common/Navbar/Footer/Footer";
import Cart_Cart from "./Cart_Cart";
import Booking from "../common/Booking/Booking";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import hi from '../../assets/hi.gif'



const Cart_Page = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState();

    const url = `https://test-01-cgyo.onrender.com/booking?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, [url])


   
    return (
        <div className="flex-home">
            {/* left side  */}
            <div className="menu-left single-blog-bg">
                <h1>Welcome </h1>
            </div>

            {/* right side  */}
            <div className="flex-right-side md:px-9">
                <div className="h3">
                    {
                        user && <div className="flex items-center justify-center">
                            <h3 >Hi {user.displayName} </h3>
                            <img src={hi} alt="" className="w-16"/>
                        </div>
                    }
                </div>

                {/* cart  */}
                <div className="text-center my-16">
                    <h2 className="h4 border-b border-white pb-1 w-fit mx-auto mb-4">Welcome to your Cart</h2>
                    {
                        booking?.map(cart => <Cart_Cart
                            key={cart._id}
                            cart={cart}
                            booking={booking}
                            setBooking={setBooking}></Cart_Cart>)

                    }

                </div>




                <Booking></Booking>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Cart_Page;