import React from "react";
import "./Crud.css";
import { useRef,useState } from "react";

const Bussiness = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const [isActive1, setIsActive1] = useState(false);
    const onClick1 = () => setIsActive1(!isActive1);
    const [isActive2, setIsActive2] = useState(false);
    const onClick2 = () => setIsActive2(!isActive2);
  
    return (
        <>
      <div className="menu-container">
        <p onClick={onClick} className="sub">
          <span>Where is your return policy ?</span>
        </p>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
      <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, nobis voluptatibus rem repellat itaque facilis suscipit doloribus officiis recusandae quis cumque architecto corrupti dicta aut porro quia atque obcaecati veniam.</li> 
      </ul>
    </nav>
      </div>

    <div className="menu-container">
    <p onClick={onClick1} className="sub">
    <span>How do I track my order ?</span>
    </p>
    <nav ref={dropdownRef} className={`menu ${isActive1 ? 'active' : 'inactive'}`}>
    <ul>
    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, nobis voluptatibus rem repellat itaque facilis suscipit doloribus officiis recusandae quis cumque architecto corrupti dicta aut porro quia atque obcaecati veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum cum culpa sint repellendus voluptatum at ex, consequuntur dolore nulla natus officia tempore voluptate. Error, officiis dolor? Rem, rerum obcaecati?</li> 
    </ul>
    </nav>
    </div>

    <div className="menu-container">
    <p onClick={onClick2} className="sub">
    <span>Can I purchase this item again ?</span>
    </p>
    <nav ref={dropdownRef} className={`menu ${isActive2 ? 'active' : 'inactive'}`}>
    <ul>
    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, nobis voluptatibus rem repellat itaque facilis suscipit doloribus officiis recusandae quis cumque architecto corrupti dicta aut porro quia atque obcaecati veniam.</li> 
    </ul>
    </nav>
    </div>

</>
      
    );
}
 
export default Bussiness;