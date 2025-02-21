import './signInForm.css'
import picProfile from '../../assets/picProfile.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../../firebaseconfig.ts";
import axios from "axios";

export default function SignInForm() {
interface SignInFormData {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    administrator: boolean,
    email: string,
}
        const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>();
        const onSubmit = async (data: SignInFormData) => {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
                const token = await userCredential.user.getIdToken();

                await axios.post("/api/auth", { token });

                alert("Signed in successfully!");
            } catch (error) {
                console.error("Error:", error);
            }
        }

    return (
        <div className="signInForm" onSubmit={handleSubmit(onSubmit)}>
            <h2>Project Management App</h2>
            <img className="profileImg" src={picProfile} alt="profile-img"/>
            <form className="signInForm">
                <input {...register("email", { required: "Username is required" })}
                       className="inputName" type="text" name="username" placeholder="Username" />
                {errors.username && <p>{errors.username.message}</p>}

                <input {...register("password", { required: "Password is required" })}
                       className="inputPassword" type="password" name="password" placeholder="Password" />
                {errors.password && <p>{errors.password.message}</p>}
                <button className="BtnSignIn" type="submit">Sign in</button>
            </form>
        </div>
    )
}
