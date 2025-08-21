import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
    return <div className="text-sm flex justify-center py-2">
        <div>
            {label}
        </div>
        <Link className=" cursor-pointer underline px-1" to={to}>
            {buttonText}
        </Link>
    </div>

}