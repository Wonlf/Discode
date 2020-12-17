import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


import './Sidebar.scss';

function Sidebar() {
  return(
      <Fragment>

      <aside className="servers-sidebar">
        <div className="servers-collection">
          <div className="server-sidebar focusable server-friends unread" role="button" aria-label="Friends unread">
            <Link to="/friends">
              <div className="server-icon-sidebar">
                  <svg>
                    <use xlinkHref="#icon-friends" />
                  </svg>
              </div>
            </Link>

          </div>
        </div>
        
      
        
        <div className="servers-collection">
          <div className="server-sidebar focusable active" role="button" aria-label="My Server" aria-selected="true">
            <Link to='/chat?name=chosungwon&room=general'>
              <div className="server-icon-sidebar">
                <img src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png" />
                </div>
            </Link> 
          </div>
        </div>
      </aside>
      


    </Fragment>
)
};

export default Sidebar;