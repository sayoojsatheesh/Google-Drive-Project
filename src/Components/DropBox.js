import '../Components/DropBox.css'
import DB from './img/dropbox.png'
const DropBox=()=>{
    return(
        <button className="btn2" >
      <span className='span1'>
        Drop Box
        <img className='dropboximg' src={DB} alt="Drop Box"></img>
      </span>
    </button>
    );
}

export default DropBox;