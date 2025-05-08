import { NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function ExtendedNav({ to, label }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <NavLink
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {({ isActive }) => (
        <span className={isActive ? "active" : ""}>
          {/*isHovered || isActive ? label : label[0]*/}
          {label}
        </span>
      )}
    </NavLink>
  );
}

export default ExtendedNav;