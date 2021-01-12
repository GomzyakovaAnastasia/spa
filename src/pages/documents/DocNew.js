import React from 'react';
import { Link } from 'react-router-dom';

class DocNew extends React.Component{

 render(){
   return(
     <div><h3>New Doc</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td className='float-right'>Document title</td>
              <td><input type='text' placeholder='GobGod' /></td>
            </tr>
            <tr>
              <td className='float-right'>Day</td>
              <td><input type='text' placeholder='C1' /></td>
            </tr>
            <tr>
              <td className='float-right'>Document content</td>
              <td><textarea/></td>
            </tr>
            <tr>
              <td className='float-right'>For</td>
              <td>
                <input type="radio" name="docbut" id="experts" checked/>
                <label for="experts">Experts</label><br/>
                <input type="radio" name="docbut" id="competitors"/>
                <label for="competitors">Competitors</label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button>
                    <Link to='/docs/docpage'>Ok</Link>
                </button> 
                <button>
                    <Link to='/docs'>Cancel</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
     </div>
   );
  }

}


export default DocNew;