import Swal from "sweetalert2";
import Footer from "../common/Navbar/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Helmet } from "react-helmet";


const Book_Table = () => {
    const {user} = useContext(AuthContext)

    // send data to backend 
    const handleTableBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const time = form.time.value;

        const booking = {
            Name: name,
            Phone: phone,
            Email: email,
            Date: date,
            Time: time,
        }
        // console.log(booking);

        // mongoDb operation 
        fetch('https://one-sushi-restruent-serverside.onrender.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'successfully added the coffee',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
                form.reset();
            })
    }

    // console.log(user);
    return (

        <div className="flex-home ">
            <Helmet><title>Sushi || Reservation</title></Helmet>

            {/* left side  */}
            <div className="menu-left table-bg">
                <h1>Book <br /> A Table</h1>
            </div>


            <div className="flex-right-side">

                <div className="mt-7 mb-16">
                    <h3 className="h3">Reservation</h3>
                    <div className="text-xs text-center leading-[2]">
                        Secure your spot at Qitchen, where exceptional sushi and a <br /> remarkable dining experience await.
                    </div>
                </div>


                {/* form  */}
                <div className="table-book">

                    <form onSubmit={handleTableBook} className="p-1 sm:p-6">
                        <input type="text" autoComplete="off" required name="name" id="" placeholder="Enter your name" />
                        <input type="number" name="phone" autoComplete="off" required id="" placeholder="Enter your phone number" />
                        <input type="email" name="email" id="" defaultValue={`${user?.email}`} placeholder="Enter your email" required />

                        <div className="sm:flex  sm:space-x-5">
                            <input type="date" name="date" id="" placeholder="Date" required/>
                            <input type="time" name="time" id="" placeholder="Time" required/>
                        </div>
                        <input type="submit" value="RESERVE" />
                    </form>
                </div>


                <Footer></Footer>
            </div>






        </div>
    );
};

export default Book_Table;