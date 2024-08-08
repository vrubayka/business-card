import photo from '../assets/new_profile.jpg';

export default function Photo() {
    return (
        <div>
            <img src={photo} className="photo" alt="Profile Pic" />
        </div>
    )
}