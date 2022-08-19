import CompanyProfile from '../components/Profiles/CompanyProfile';
import UserProfile from '../components/Profiles/UserProfile';
import AdminProfile from '../components/Profiles/AdminProfile';

function Profile() {
  if (localStorage.getItem('accessLevel') === 'user') {
    return (
      <div>
        <UserProfile />
      </div>
    );
  } else if (localStorage.getItem('accessLevel') === 'company') {
    return (
      <div>
        <CompanyProfile />
      </div>
    );
  } else {
    return (
      <div>
        <AdminProfile />
      </div>
    );
  }
}

export default Profile;
