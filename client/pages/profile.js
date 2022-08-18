import CompanyProfile from '../components/Profiles/CompanyProfile';
import UserProfile from '../components/Profiles/UserProfile';
import AdminProfile from '../components/Profiles/AdminProfile';

function Profile() {
  const visitor = 'User';
  if (visitor === 'User') {
    return (
      <div>
        <UserProfile />
      </div>
    );
  } else if (visitor === 'Company') {
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
