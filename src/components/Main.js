import email from "../images/email.png";
export default function Main() {
  return (
    <>
      <div className={"contact"}>
        <span className="title">Brad Kay</span>
        <span className="sub-title">Front end developer</span>
        <div>
          <button className="button1">
            <img src={email} alt="emailIcon" className="icons" />
            Email
          </button>
          <button className="button1">
            {" "}
            <img src={email} alt="emailIcon" className="icons" />
            Linkden
          </button>
        </div>
      </div>

      <div className="about">
        <span className="text-title">About</span>
        <span className="text">
          Front end developer Which, in this case, would be equivalent as the
          box is not allowed to flex and therefore retains the initial width set
          by flex-basis. Flex-basis defines the default size of an element
          before the remaining space is distributed so if the element were
          allowed to flex (grow/shrink) it may not be 50% of the width of the
          page.
        </span>
        <span className="text-title">Interests</span>
        <span className="text">
          Which, in this case, would be equivalent as the box is not allowed to
          flex and therefore retains the initial width set by flex-basis.
          Flex-basis defines the default size of an element before the remaining
          space is distributed so if the element were allowed to flex
          (grow/shrink) it may not be 50% of the width of the page.
        </span>
      </div>
    </>
  );
}
