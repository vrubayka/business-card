import xing_ico from '../assets/xing.png';
import github_ico from '../assets/github.png';
import instagram_icon from '../assets/instagram.png';


export default function Footer() {
    const openXingLink = () => {
        window.open('https://www.xing.com/profile/Shamil_Khannanov', '_blank', 'noopener,noreferrer');
    };

    const openGithubLink = () => {
        window.open('https://github.com/vrubayka', '_blank', 'noopener,noreferrer');
    };
    
    const openInstagramLink = () => {
        window.open('https://www.instagram.com/shamil.khannanov/', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="footer_box">
            <img src={xing_ico} className="xing_ico" alt="Xing Icon" onClick={openXingLink} />
            <img src={github_ico} className="github_ico" alt="GitHub Icon" onClick={openGithubLink} />
            <img src={instagram_icon} className="instagram_icon" alt="Instagram Icon" onClick={openInstagramLink}/>
        </div>
    )
}