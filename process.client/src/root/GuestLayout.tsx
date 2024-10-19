import { useStateContext } from "@/contexts/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout: React.FC = () => {

    const {token} = useStateContext();
    
    if (token) {
        return <Navigate to='/'/>
    }

    return (
        <>
            <Outlet/>
        </>
    )
}

export default GuestLayout;