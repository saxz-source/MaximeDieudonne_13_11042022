import AccountZone from "../AccountZone/AccountZone";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "./ProfilePageZone.css";
const ProfilePageZone = () => {
    return (
        <main className="main bg-dark">
            <ProfileHeader />
            <h2 className="sr-only">Accounts</h2>
      <AccountZone/>
        </main>
    );
};

export default ProfilePageZone;
