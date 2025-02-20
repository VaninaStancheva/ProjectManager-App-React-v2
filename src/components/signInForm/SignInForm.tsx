import './signInForm.css'
import picProfile from '../../assets/picProfile.png'

export default function SignInForm() {
    return (
        <div className="signInForm">
            <h2>Project Management App</h2>
            <img className="profileImg" src={picProfile} alt="profile-img"/>
            <form className="signInForm">
                <input className="inputName" type="text" name="username" placeholder="Username" />
                <input className="inputPassword" type="password" name="password" placeholder="Password" />
                <button className="BtnSignIn" type="submit">Sign in</button>
            </form>
        </div>
    )
}