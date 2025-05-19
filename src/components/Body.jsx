import email_ico from "../assets/Mail.png";
import linkedin_ico from "../assets/linkedin.png";

export default function Body() {
  const openEmailLink = () => {
    window.open("mailto:shamil.khannanov@yahoo.com");
  };

  const openLinkedInLink = () => {
    window.open(
      "https://www.linkedin.com/in/shamil-khannanov/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="body">
      <h2 className="nameTitle">Shamil Khannanov</h2>
      <h3 className="jobTitle">Software Developer</h3>
      <h4 className="etc">Check24 GmbH</h4>
      <div className="buttons_line">
        <div className="email_button" onClick={openEmailLink}>
          <img src={email_ico} className="email_ico" alt="Email Icon" />
          <span className="button_string">Email</span>
        </div>
        <div className="linkedin_button" onClick={openLinkedInLink}>
          <img
            src={linkedin_ico}
            className="linkedin_ico"
            alt="LinkedIn Icon"
          />
          <span className="button_string">LinkedIn</span>
        </div>
      </div>
      <h3 className="text_header">About</h3>
      <div className="text">
        I am primarily a PHP developer with a particular interest in backend and database
        systems. I try to keep up with modern technologies and best practices,
        and am always looking for new things to learn.
      </div>
      <h3 className="text_header">Interests</h3>
      <div className="text">
        I love snowboarding and playing volleyball with my colleagues. I am also
        an avid gamer and can spend the entire day in front of my PC. Foodie,
        but trying to eat healthier.
      </div>
    </div>
  );
}
