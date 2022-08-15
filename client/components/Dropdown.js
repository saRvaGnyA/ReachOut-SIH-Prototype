import { useState } from 'react';

function Dropdown() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <button
        className="material-icons floating-btn"
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
      >
        {openDropdown ? 'remove' : 'add'}
      </button>
      {openDropdown && (
        <>
          <button className="material-icons floating-btn-1"></button>
          <button className="material-icons floating-btn-2"></button>
          <button className="material-icons floating-btn-3"></button>
        </>
      )}
    </div>
  );
}

export default Dropdown;
