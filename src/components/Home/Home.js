
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";


const Home = () => {
    const {user} =useContext(AuthContext);
   
    return (
        <div>
          
             {user?.email && <span>{user.email}</span>}
        </div>
    );
};

export default Home;