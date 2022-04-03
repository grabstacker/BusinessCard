import email from "../images/email.png";
export default function Main() {
  return (
    <>
      <div className={"contact"}>
        <span className="title">Brad Kay</span>
        <span className="sub-title">Front-end developer</span>
        <div>
          <button className="btn-default">
            <img src={email} alt="emailIcon" className="icons" />
            Email
          </button>
          <button className="btn-primary">
            {" "}
            <img src={email} alt="emailIcon" className="icons" />
            Linkden
          </button>
        </div>
      </div>

      <div className="about">
        <span className="text-title">About</span>
        <span className="text">
          <p>
            Hello! I am a full stack developer that is interested in React
            JavaScript looking to expand into new technologies and have NOSQL
            and application deployment experience. I have completed the bachelor
            of information technolgy degree and look forward to start coding
            again with some new project ideas! I am looking to learn typescript
            as this is becoming a common occurance in the requirements of code
            that I look at on the web.
          </p>
        </span>
        <span className="text-title">Interests</span>
        <span className="text">
          <p>
            I enjoy challenges and learning new technologies while contributing
            to usefull and creative applications. I am interested in blockchain
            technolgy but spend my spare time reading about the latest physics
            and astronomy discoveries.
          </p>
        </span>
      </div>
    </>
  );
}
