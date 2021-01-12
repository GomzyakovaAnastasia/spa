import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import personImage from '../../img/regimg.png';

class RegPage extends React.Component{
 render(){
   return(
     <div><h3>Registration</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td rowspan='8'><img src={personImage} width="100" height="100"/><br/>
              <input type="file" className="form-control-file" /><br/>
              <input type="button" value="Delete" /></td>
              <td className='float-right'>First name</td>
              <td><input type='text' placeholder='Вася' /></td>
            </tr>
            <tr>
              <td className='float-right'>Last name</td>
              <td><input type='text' placeholder='Пупкин' /></td>
            </tr>
            <tr>
              <td className='float-right'>Country</td>
              <td><input type='text' placeholder='Россия' /></td>
            </tr>
            <tr>
              <td className='float-right'>E-mail</td>
              <td><input type='email' placeholder='vasyapypkin@mail.ru' /></td>
            </tr>
            <tr>
              <td className='float-right'>Password</td>
              <td><input type='password' placeholder='****' /></td>
            </tr>
            <tr>
              <td className='float-right'>Repeat password</td>
              <td><input type='password' placeholder='****' /></td>
            </tr>
            <tr>
              <td></td>
              <td><button>
                    <Link to='/user'>Ok</Link>
                </button> 
                <button>
                    <Link to='/'>Cancel</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
     </div>
   );
  }
}


export default RegPage;