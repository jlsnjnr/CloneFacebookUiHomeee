import fundoBg from './resources/user.jpg';
import { AiFillVideoCamera, AiOutlineFileImage, AiFillMeh } from "react-icons/ai";

export default function()
{
  return (
    
    <div className="feed">
        
        <div className="feedForm">
          <img src={fundoBg} />
          <input type="text" placeholder="No que você está pensando, Júnior?"/>
        </div>

        <div className="feedIcons">
            <div className="iconSingle">
              <AiFillVideoCamera />
              <span>Videos ao vivo</span>
            </div>

            <div className="iconSingle">
              <AiOutlineFileImage />
              <span>Videos ao vivo</span>
            </div>

            <div className="iconSingle">
              <AiFillMeh />
              <span>Videos ao vivo</span>
            </div>
            

        </div>

      </div>
    
    )
}