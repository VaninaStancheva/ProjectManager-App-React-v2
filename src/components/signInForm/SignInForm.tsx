import './signInForm.css'

export default function SignInForm() {
    return (
        <div className="signInForm">
            <h2>Project Management App</h2>
            <img className="profileImg" src="../../assets/219988.png" alt="profile-img"/>
            <form className="signInForm">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button className="BtnSignIn" type="submit">Sign in</button>
            </form>
        </div>
    )
}