import AccountZone from "../AccountZone/AccountZone";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "./ProfilePageZone.css";
import PropTypes from 'prop-types';




const ProfilePageZone = ({ user }) => {
    return (
        <main className="main bg-dark">
            <ProfileHeader user={user} />
            <h2 className="sr-only">Accounts</h2>
            <AccountZone />
        </main>
    );
};

ProfilePageZone.propType = {
    user: PropTypes.object,
};

export default ProfilePageZone;
