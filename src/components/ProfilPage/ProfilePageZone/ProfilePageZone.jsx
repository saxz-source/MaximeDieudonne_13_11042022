import AccountZone from "../AccountZone/AccountZone";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import "./ProfilePageZone.css";
import PropTypes from 'prop-types';




const ProfilePageZone = ({ userName }) => {
    return (
        <main className="main bg-dark">
            <ProfileHeader userName={userName} />
            <h2 className="sr-only">Accounts</h2>
            <AccountZone />
        </main>
    );
};

ProfilePageZone.propType = {
    userName: PropTypes.userName,
};

export default ProfilePageZone;
