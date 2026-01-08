import "./signUp.css";

const SignUp = () => {
   return(
    
    <div className="signup-background">
        <h1 className="signup-logo">MeloFi</h1>
        <div className="signup-glass-card">
            <h2 className="signup-heading">Create Account</h2>
            <form>
                <input type ="text" placeholder ="Enter UserName" className = "signup-input"/>
                <input type ="tel" placeholder ="Enter PhoneNumber" className = "signup-input"/>
                <input type ="password" placeholder = "Set password" className="signup-input"/>
                <button className = "signup-Button">Verify</button>
           </form>
        </div>
    </div>
   );
}

export default SignUp