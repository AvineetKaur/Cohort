import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";


export function Dashboard() {
    return (<>
        <Appbar />
        <div className="mt-4 ml-6">
            <Balance />
            <Users />



        </div>





    </>)

}