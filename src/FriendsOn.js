import fundoBg from './resources/user.jpg';
import { AiFillVideoCamera, AiOutlineFileImage, AiFillMeh } from "react-icons/ai";

export default function()
{
  return (
    <div className="friendsOn">

    <div className="friendsContainer">
      <div className="newRoom">
        <AiFillVideoCamera />
        <span>Criar sala</span>
      </div>  

      <div className="peoplesOn">
        <img src={fundoBg} />
      </div>

      </div>{/* header left  */}
  </div>
  )
}