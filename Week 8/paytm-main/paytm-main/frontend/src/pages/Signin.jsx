import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin() {
    return (<div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox label={"Email"} placeholder={"Enter Email"} />
                <InputBox label={"Password"} placeholder={"Enter Password"} />
                <Button buttonText={"Sign In"} />
                <BottomWarning buttonText={"Sign Up"} label={"Don't have an account?"} to={"/signup"} />


            </div>
        </div>
    </div>)

}