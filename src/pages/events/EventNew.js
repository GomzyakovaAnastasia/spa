import React from 'react';
import { Link } from 'react-router-dom';
import eventImage from '../../img/placeholder.png';

class EventNew extends React.Component{

 render(){
   return(
     <div><h3>New Event</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td rowspan='6'><img src={eventImage} className="event_img" /><br/>
              <input type="file" className="form-control-file" /><br/>
              <input type="button" value="Delete" /></td>
              <td className='float-right'>Event title</td>
              <td><input type='text' placeholder='GobGod' /></td>
            </tr>
            <tr>
              <td className='float-right'>Start date</td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td className='float-right'>C1 date</td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td className='float-right'>C+1 date</td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td className='float-right'>Finish date</td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td></td>
              <td><button>
                    <Link to='/events/event'>Ok</Link>
                </button> 
                <button>
                    <Link to='/events'>Cancel</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
     </div>
   );
  }

}


export default EventNew;