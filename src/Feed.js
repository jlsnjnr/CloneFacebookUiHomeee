import { AiOutlineEllipsis, AiOutlineLike, AiOutlineShareAlt, AiFillMessage, AiOutlineGlobal } from "react-icons/ai";

import fundoBg from './resources/user.jpg';
import bg from './resources/bg.png';
import bgDois from './resources/bgDois.jpg';
import bgTres from './resources/bgTres.jpg';

export default function()
{
  return (

    <div className="Post">
        
    <div className="postTop">
      
      <div className="userPost">
      
        <div className="userDatails">
          <img src={fundoBg} />
          <strong>Júnior Andrade <br/>
            <small>32min</small> - 
            <AiOutlineGlobal />
          </strong>
        </div>

        <div className="btnMore">
          <AiOutlineEllipsis />
        </div>

      </div>{/* Post Top */}

      <div className="postContent">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod distinctio ex recusandae architecto omnis assumenda, doloribus eveniet quas odio sint sed est dignissimos non praesentium, cumque ab iure, enim labore.</p>
      </div>

      <div className="postImg">

        <img src={bg} />
      </div>

      <div className="postReaction">

        <div className="postIconSingle">
          <AiOutlineLike />
          <strong>Curtir</strong>
        </div>
        <div className="postIconSingle">
          <AiFillMessage />
          <strong>Comentar</strong>
        </div>
        <div className="postIconSingle">
          <AiOutlineShareAlt />
          <strong>Compartilhar</strong>
        </div>

        <div className="clear"></div>
      </div>

      <div className="postForm">
        <img src={fundoBg} />
        <input type="text" placeholder="Escreva um comentario..."/>
      </div>

    </div>


    <div className="Post">
        
        <div className="postTop">
          
          <div className="userPost">
          
            <div className="userDatails">
              <img src={fundoBg} />
              <strong>Júnior Andrade <br/>
                <small>32min</small> - 
                <AiOutlineGlobal />
              </strong>
            </div>

            <div className="btnMore">
              <AiOutlineEllipsis />
            </div>

          </div>{/* Post Top */}

          <div className="postContent">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod distinctio ex recusandae architecto omnis assumenda, doloribus eveniet quas odio sint sed est dignissimos non praesentium, cumque ab iure, enim labore.</p>
          </div>

          <div className="postImg">

            <img src={bgDois} />
          </div>

          <div className="postReaction">

            <div className="postIconSingle">
              <AiOutlineLike />
              <strong>Curtir</strong>
            </div>
            <div className="postIconSingle">
              <AiFillMessage />
              <strong>Comentar</strong>
            </div>
            <div className="postIconSingle">
              <AiOutlineShareAlt />
              <strong>Compartilhar</strong>
            </div>

            <div className="clear"></div>
          </div>

          <div className="postForm">
            <img src={fundoBg} />
            <input type="text" placeholder="Escreva um comentario..."/>
          </div>
          
        </div>

      </div>

      <div className="Post">
        
        <div className="postTop">
          
          <div className="userPost">
          
            <div className="userDatails">
              <img src={fundoBg} />
              <strong>Júnior Andrade <br/>
                <small>32min</small> - 
                <AiOutlineGlobal />
              </strong>
            </div>

            <div className="btnMore">
              <AiOutlineEllipsis />
            </div>

          </div>{/* Post Top */}

          <div className="postContent">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod distinctio ex recusandae architecto omnis assumenda, doloribus eveniet quas odio sint sed est dignissimos non praesentium, cumque ab iure, enim labore.</p>
          </div>

          <div className="postImg">

            <img src={bgTres} />
          </div>

          <div className="postReaction">

            <div className="postIconSingle">
              <AiOutlineLike />
              <strong>Curtir</strong>
            </div>
            <div className="postIconSingle">
              <AiFillMessage />
              <strong>Comentar</strong>
            </div>
            <div className="postIconSingle">
              <AiOutlineShareAlt />
              <strong>Compartilhar</strong>
            </div>

            <div className="clear"></div>
          </div>

          <div className="postForm">
            <img src={fundoBg} />
            <input type="text" placeholder="Escreva um comentario..."/>
          </div>
          
        </div>

      </div>


  </div>


  )
}