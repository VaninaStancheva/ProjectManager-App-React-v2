import './signInForm.css'
import picProfile from '../../assets/picProfile.png'
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../firebaseconfig.ts";
import {useForm, SubmitHandler} from "react-hook-form";


export default function SignInForm() {
    interface Data {
        email: string;
        password: string;
    }

// Create a collection (like a table in a traditional database)
    const usersCollection = collection(db, "users");

// Add a new document (like a row) to the collection
    addDoc(usersCollection, {
        name: "Alice",
        email: "alice@example.com",
    }).then(() => {
        console.log("Document written with name: ", usersCollection.id);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });

    const {register, handleSubmit} = useForm<Data>();
    const onSubmit: SubmitHandler<Data> = (data: Data) => {
        console.log(data)
    }

    return (
        <div className="signInForm">
            <h2>Project Management App</h2>
            <img className="profileImg" src={picProfile} alt="profile-img"/>
            <form className="signInForm" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} className="inputName" type="email" name="email" placeholder="Email"/>
                <input {...register("password")} className="inputPassword" type="password" name="password" placeholder="Password"/>
                <button className="BtnSignIn" type="submit">Sign in</button>
            </form>
        </div>
    )
}
