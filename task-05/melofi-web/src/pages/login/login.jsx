import "./login.css"
import { Link } from "react-router-dom"; 

const Login = () => {
   return(
    
    <div className="login-background">
        <h1 className="login-logo">MeloFi</h1>
        <div className="login-glass-card">
            <h2 className="login-heading">Login</h2>
            <form>
                <input type ="text" placeholder ="Enter UserName" className = "login-input"/>
                <input type ="password" placeholder = "password" className="login-input"/>
                <div className="login-forgot">
                    <Link to="/forgotPassword" >Forgot password?</Link>
                </div>
                <Link to = "/dashboard" className = "login-button"> Login </Link>
           </form>
           <div className ="login-new-to-melofi">
            <span className='login-newuser'>New to MeloFi?</span>
            <Link to = "/signUp" className= "login-create-Account"> Create Account </Link>
           </div>
        </div>
    </div>
   );
}

export default Login

// import "./login.css"
// // import { Link } from "react-router-dom";
// import { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";

// const Login = () => {
//     const [typedName, setTypedName] = useState("");
//     const { setUser } = useContext(UserContext);
//     const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Update the global user state
//     setUser({
//       username: typedName,
//       followers: "1.2k",
//       following: "450",
//       playlists: "12",
//       photo: "profile-pic.jpg" 
//     });
//     navigate("/profile"); // Redirect to profile
//   };
//    return(
    
//     <div className="login-background">
//         <h1 className="login-logo">MeloFi</h1>
//         <div className="login-glass-card">
//             <h2 className="login-heading">Login</h2>
//             <form onSubmit ={handleLogin}>
//                 <input type ="text" placeholder ="Enter UserName" className = "login-input"/>
//                 {/* // value={typedName} onChange={(e) => setTypedName(e.target.value)}/> */}
//                 <input type ="password" placeholder = "password" className="login-input"/>
//                 <div className="login-forgot">
//                     <Link to="/forgotPassword" >Forgot password?</Link>
//                 </div>
//                 <Link to = "/dashboard" className = "login-button"> Login </Link>
//                 {/* <button type="submit" className="login-button">Login</button> */}
           
//            </form>
//            <div className ="login-new-to-melofi">
//             <span className='login-newuser'>New to MeloFi?</span>
//             <Link to = "/signUp" className= "login-create-Account"> Create Account </Link>
//            </div>
//         </div>
//     </div>
//    );
// }

// export default Login