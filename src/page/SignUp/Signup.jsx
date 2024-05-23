import { FaGithubSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import Footer from "../common/Navbar/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Signup = () => {
    const { signUp, getName, verify, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // const info = {
        //     name, email, password
        // }
        // firebase signup 
        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // console.log(user);
                if (user) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Acount created successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }

                // update user name
                getName(name)

                // email verify
                verify()
                    .then(() => {
                        Swal.fire({
                            title: 'success!',
                            text: 'A verification email sent to your email acount. Please verify your email!',
                            icon: 'success',
                            confirmButtonText: 'ok'
                        })
                    });

                form.reset();
                navigate("/")

            })
            .catch((error) => {
                console.log(error.message);

            });

    }

    /// google login 
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                // console.log(user);

                Swal.fire({
                    title: 'success!',
                    text: 'A verification email sent to your email acount. Please verify your email!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                navigate("/")


            }).catch((error) => {
                console.log(error.message);
                // ...
            });

    }

    // sign up login
    // github login 
    const handleLoginGithub = () => {


        
        githubLogin()
            .then((result) => {
                const user = result.user;
                // console.log(user);

                Swal.fire({
                    title: 'success!',
                    text: 'A verification email sent to your email acount. Please verify your email!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                navigate("/")
            }).catch((error) => {
                console.log(error.message);

            });
    }



    return (
        <div className="flex-home ">
            <Helmet><title>Sushi || Sign up</title></Helmet>
            <div className="menu-left table-bg">
                <h1>Sign up</h1>
            </div>

            <div className="flex-right-side sm:overflow-y-scroll mt-5 ">
                <div className="login-form px-5 md:px-20 ">
                    <h3 className="text-4xl text-center my-7">Sign Up Form</h3>

                    <form onSubmit={handleSignUp}>
                        <input type="text" name="name" placeholder="your name" required autoComplete="off" />
                        <input type="email" name="email" id="" placeholder="youe email" required autoComplete="off"/>
                        <input type="password" name="password" id="" placeholder="your password" required autoComplete="off"/>
                        <input type="submit" value="Sign up" className="" />
                    </form>
                    <div className="text-center text-xs space-y-5">

                        <div className="pt-7">
                            <p className="text-lg mb-3 tracking-[3px]">or sign up with</p>
                            <div className="flex gap-2 justify-center items-center text-2xl">
                                <FaGithubSquare onClick={handleLoginGithub} className="round-2xl" />
                                <FcGoogle onClick={handleGoogleLogin} className="round-2xl " />
                                <ImFacebook2 className="text-blue-600 bg-white" />
                            </div>
                        </div>

                        <p>Already have an acound? <Link className="text-[#da0726]" to="/login">Login</Link></p>
                    </div>
                </div>

                <Footer></Footer>
            </div>

        </div>
    );
};

export default Signup;