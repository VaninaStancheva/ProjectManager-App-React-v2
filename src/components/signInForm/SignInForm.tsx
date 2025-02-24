import './signInForm.css'
import picProfile from '../../assets/picProfile.png'
import { addDoc, collection } from "firebase/firestore";
import {db} from "../../../firebaseconfig.ts";



export default function SignInForm() {

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




    return (
        <div className="signInForm" >
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
