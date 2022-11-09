import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import img1 from '../../assets/husband.png'

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
        <li tabIndex={0}>
          <Link to='/login' className="justify-between">
            Login
            
          </Link>
        
        </li>
       
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
<img src={img1} className='rounded-circle' style={{height:'100px'}} alt="" />
    <Link className="btn btn-ghost normal-case text-4xl" to='/'>ESPOUSE</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/home'>Home</Link></li>
     


      {
                user?.email?
              <> <li> <button variant="btn btn-ghost" className=' '  onClick={logOut}>Log Out</button></li>
               <li><Link to='/service'>Add Service</Link></li>
               <li><Link to='/my-reviews'>My Review</Link></li>
              </>
            :
           <>  <li><Link to='/signup'>Sign up</Link></li>
           <li tabIndex={0}>
             <Link to='/login'>
               Login
               
             </Link>
            
           </li>
           </>
            }



      <li><Link to='/add-service'>Add Service</Link></li>
      <li><Link to='/reviews'>My review</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Get started</Link>
  </div>
</div>
        </div>
    );
};

export default Header;