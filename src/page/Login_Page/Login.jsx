import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import Footer from "../common/Navbar/Footer/Footer";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const Login = () => {
    const { login, forgetPassword, googleLogin, githubLogin } = useContext(AuthContext)
    const emailRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"
    const [error, setError] = useState('')



    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // const info = {
        //     email, password
        // }

        // firebase login
        // password login
        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(from, {replace: true})

            })
            .catch((error) => {
                console.log(error.message);
                if (error) {
                    Swal.fire("Your email or password is invalid! please try again with coreect information");
                }
                form.reset()
            });
    }

    /// google login 
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'success!',
                    text: 'A verification email sent to your email acount. Please verify your email!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                navigate(from, {replace: true})


            }).catch((error) => {
                console.log(error.message);
                // ...
            });
    }

    // github login 
    const handleLoginGithub = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'success!',
                    text: 'A verification email sent to your email acount. Please verify your email!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                navigate(from, {replace: true})
            })
            .catch((error) => {
                console.log(error.message); 
                
            });
    }

    // forget password
    const handleForgot = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('please prodive a email address first')
        }
        forgetPassword(email)
            .then(() => {
                Swal.fire({
                    title: 'success!',
                    text: 'A paaword reset message was sent to your email acount.',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })

            })
            .catch((error) => {
                console.log(error.message);
                // ..
            });

    }

    console.log(location);
    return (
        <div className="flex-home ">
            <Helmet><title>Sushi || Login</title></Helmet>

            {/* left side */}
            <div className="menu-left table-bg">
                <h1>Login</h1>
            </div>


            {/* right side  */}
            <div className="flex-right-side sm:overflow-y-scroll mt-5 ">
                <div className="login-form px-5 md:px-20 ">
                    <h3 className="text-4xl text-center my-7">Login Form</h3>

                    <form onSubmit={handleLogin}>
                        <input type="email" ref={emailRef} name="email" id="" autoComplete="off" placeholder="youe email" required />
                        <input type="password" autoComplete="off" name="password" id="" placeholder="your password" required />
                        <input type="submit" value="Login" className="" />
                    </form>
                    <div className="text-center text-xs space-y-5">
                        <p onClick={handleForgot}>Forget <span className="text-[#da0726]">password?</span></p>

                        <div className="pt-7">
                            <p className="text-lg mb-3 tracking-[3px]">or login with</p>
                            <div className="flex gap-2 justify-center items-center text-2xl">
                                <FaGithubSquare onClick={handleLoginGithub} className="round-2xl" />
                                <FcGoogle onClick={handleGoogleLogin} className="round-2xl " />
                                <ImFacebook2 className="text-blue-600 bg-white" />
                            </div>
                        </div>

                        <p>Do not have any acound? <Link className="text-[#da0726]" to="/signup">Sign up</Link></p>
                    </div>
                </div>


                <Footer></Footer>
            </div>

        </div>
    )
}

export default Login;