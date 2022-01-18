import { Button } from "@mui/material"
import { getAuth, signOut } from "firebase/auth"
import app from "../firebase/fb"

const SignOut = () => {
    const fb = app
    const auth = getAuth(fb)

    const LogOutClick = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error)
        });
    }

    return(
        <div>
            <Button onClick={LogOutClick} variant="contained">SignOut</Button>
        </div>
    )
}

export default SignOut