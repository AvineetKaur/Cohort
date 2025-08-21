import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios"

export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (<>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"} />
                    <SubHeading label={"Enter your information to create and account"} />
                    <InputBox onChange={e => {
                        setFirstName(e.target.value)
                    }} label={"First Name"} placeholder={"Enter first name"} />
                    <InputBox label={"Last Name"} placeholder={"Enter last name"} onChange={e => {
                        setLastName(e.target.value)
                    }} />
                    <InputBox label={"Email"} placeholder={"Enter email"} onChange={e => {
                        setUsername(e.target.value)
                    }} />
                    <InputBox label={"Password"} placeholder={"Enter password"} onChange={e => {
                        setPassword(e.target.value)
                    }} />
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            password,
                            firstName,
                            lastName
                        })
                        localStorage.setItem("token", response.data.token);

                    }} buttonText={"Sign Up"} />
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>



    </>)

}