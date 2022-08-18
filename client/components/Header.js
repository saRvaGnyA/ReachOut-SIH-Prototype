import { useState, useEffect } from 'react';
import UserHeader from './Headers/UserHeader';
import CompanyHeader from './Headers/CompanyHeader';
import AdminHeader from './Headers/AdminHeader';

function Header() {
  const visitor = 'Admin';

  if (visitor === 'User') {
    return (
      <div>
        <UserHeader />
      </div>
    );
  } else if (visitor === 'Company') {
    return (
      <div>
        <CompanyHeader />
      </div>
    );
  } else {
    return (
      <div>
        <AdminHeader />
      </div>
    );
  }
}

export default Header;
