import CompanyProfile from '../components/Profiles/CompanyProfile';
import UserProfile from '../components/Profiles/UserProfile';

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
        <div></div>
      </div>
    );
  }
}

export default Profile;
