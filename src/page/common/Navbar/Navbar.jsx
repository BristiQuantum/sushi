import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/home/logo.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';
import Swal from 'sweetalert2';
import { PiUserCircleFill } from 'react-icons/pi';
import { FaCartArrowDown } from 'react-icons/fa';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const handlelogOut = () => {
        logOut()
        Swal.fire({
            title: 'success!',
            text: 'logged Out',
            icon: 'success',
            confirmButtonText: 'ok'
        })
        navigate("/")
    }

    const openMenu = () => {
        setOpen(true)
    }

    return (
        <div className="nanbar">
            <div className="nav-container">
                <div className="navbar-start w-fit">
                    <div className="dropdown z-40">
                        {/* nav button  */}
                        <div onClick={openMenu} tabIndex={0} role="button" className="nav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>

                        {/* navigation menu 
                        ------------------------------ */}
                        {
                            open && 
                            <ul onClick={(() => setOpen(false))} className="menu-container ">
                                <li>
                                    <Link className='a-hover' to="/">Home</Link>
                                </li>
                                {
                                    user &&
                                    <li>
                                        <Link className='a-hover' to="/cart"><span>My Cart</span> <FaCartArrowDown className='text-xl ml-3 text-[#da0726]' /></Link>
                                    </li>
                                }
                                <li>
                                    <Link className='a-hover' to="/menu">Menu</Link>
                                </li>
                                <li>
                                    <Link className='a-hover' to="/book-table">Reservation</Link>
                                </li>
                                <li>
                                    <Link className='a-hover' to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link className='a-hover' to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link className='a-hover' to="/blog">Blogs</Link>
                                </li>
                                <li>
                                    <Link className='a-hover' to="/signup">Sign Up</Link>
                                </li>


                            </ul>
                        }
                    </div>
                </div>

                {/* middle menu  */}
                <div className="mid-nav">

                    <Link to="/"><img src={logo} alt="" className='w-22' /></Link>

                    {/* user ? 'user' : 'blog' */}
                    {
                        user ?
                            <Link to="/cart" className='mid-nav-a'><PiUserCircleFill className='text-2xl' title={`${user && user.displayName}`} /></Link>
                            : <Link className='mid-nav-a' to="/blog">Blogs</Link>
                    }

                    {/* user ? 'logout' : 'login' */}
                    {
                        user ?
                            <button onClick={handlelogOut} className='mid-nav-a'>Log Out</button>
                            : <Link to="/login" className='mid-nav-a'>Login</Link>

                    }


                </div>

                {/* bkkoing button  */}
                <div className="hidden md:block navbar-end">
                    <Link className='button nav-book-btn' to="/book-table">Book a Table</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;