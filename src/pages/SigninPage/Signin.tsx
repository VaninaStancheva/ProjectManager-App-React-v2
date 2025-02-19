import './signinPage.css'
import HeaderSignIn from "../../components/headerSignIn/HeaderSignIn.tsx";
import SignInForm from "../../components/signInForm/SignInForm.tsx";

export default function SignInPage() {
    return (
        <div className="signInPage">
            <HeaderSignIn />
            <SignInForm />
        </div>
    )
}