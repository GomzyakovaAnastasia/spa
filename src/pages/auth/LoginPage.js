import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{
 render(){
   return(
     <div><h3>Login Page</h3>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td><span className='float-right'>E-mail</span></td>
              <td><input type='email' placeholder='Email'/></td>
            </tr>
            <tr>
              <td><span className='float-right'>Password</span></td>
              <td><input type='password' placeholder='Password'/></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button>
                  <Link to='/user'>Sign in</Link>
                </button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button>
                  <Link to='/registration'>Sign up</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
     </div>
   );
  }
}


export default LoginPage;