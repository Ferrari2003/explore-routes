import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    
    const handleSingOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error =>{
            console.error('error', error)
        })
    }
    
        return (
        <div>
         
        <div className="navbar bg-primary text-primary-content">
           <Link to={'/'} className="btn btn-ghost normal-case text-xl">Ferrari Auth</Link>
           <Link className="btn btn-ghost normal-case text-xl"  to={'/'}>Home</Link>
           <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Log in</Link>
           <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
           {user?.email && <span>Welcome,{user.email}</span>}
           <button onClick={handleSingOut} className="btn btn-outline btn-warning">Log Out</button>
       </div>
    </div>
    );
};

export default Header;