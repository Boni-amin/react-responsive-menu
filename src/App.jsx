import './assets/index.css'; // Import your CSS file
import React, { useState } from 'react'; // Import React and useState

const App = () => {
  
  const [isActive, setIsActive] = useState(false); // Use state to manage class toggle

  const handleMenuClick = () => {
    setIsActive(!isActive); // Toggle isActive state
  };

  return (
    <>
       <nav>
        <div className="continer">
            <div className="nav-bar">
                {/* log */}
                <div className="brand-name">
                    <h1>BoniAmin</h1>
                </div> 

                {/* Menu icon Show and hide  */}
                <div className='menu-icon'>
                  <div className={`toggle-icon ${isActive ? 'change' : ''}`} onClick={handleMenuClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                </div>
                
                {/* Menu item  */}
                <div className={`menu ${isActive ? 'menu-show':''}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Bloag</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
    </>
  );
};

export default App;
