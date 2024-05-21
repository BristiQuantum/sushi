/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import { VscTrash } from "react-icons/vsc";
import Swal from "sweetalert2";


const Cart_Cart = ({ cart, booking, setBooking }) => {
    const { Date, Email, Name, Phone, Time, _id } = cart;

// MongoDB operation 
    const handleBookingCancle =(id)=> {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
          }).then((result) => {
            if (result.isConfirmed) {
    
                // mongoDB operation Delete
                fetch(`https://test-01-cgyo.onrender.com/booking/${id}`, {
                    method: 'DELETE',
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                          });
    
                      const remaining = booking.filter(cof => cof._id !== _id);
                      setBooking(remaining)
                    }
                    
                  })
            
            }
          });






    }


    return (
        <div className="cart-container">
            <Helmet><title>Sushi || Cart</title></Helmet>

            <h5 className="text-xl p"><span className="cart-title">Name: </span>{Name}</h5>
            <p><span className="cart-title p">Email: </span >{Email}</p>
            <p><span className="cart-title p">Phone: </span>{Phone}</p>
            <div className="date-time ">
                <p><span className="cart-title">Phone: </span>{Date}</p>
                <p><span className="cart-title">Time: </span> {Time}</p>
            </div>
            <button onClick={() => handleBookingCancle(_id)} className="cart-btn"><span className="text-xs">Cancle Booking</span><VscTrash /></button>
        </div>

    );
};

export default Cart_Cart;