import { useNavigate } from 'react-router-dom';
import img from '../../../assets/ani.gif'

const Booking = () => {
    const navigate = useNavigate()
    const Booking = () => {
        navigate("/book-table")
    }

    return (
        <div onClick={Booking} className='booking  '>
            <h6 className="text-sm">Book A Table Right Now</h6>
            <img src={img} alt="" className='w-9'/>
        </div>
    );
};

export default Booking;