import {React}from 'react'
import  {Link ,useHistory} from 'react-router-dom';


const Logout = () => {

  return (
    <div clasNmae="Logout">
        <form>
       <button className='Logout_btn' variant='outlined' color='blue'>Logout</button>
       <Link href="/" onClick={useHistory}></Link>
       </form>
    </div>
  )
}

export default Logout
