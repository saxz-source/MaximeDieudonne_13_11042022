import ProfilePageZone from "../../components/ProfilPage/ProfilePageZone/ProfilePageZone";
import Header from "../../layers/Header/Header";

const ProfilePage = ({ isLogged }) => {
    return (
        <>
            <Header isLogged={isLogged} />
            <ProfilePageZone isLogged={isLogged} />
        </>
    );
};

export default ProfilePage;
