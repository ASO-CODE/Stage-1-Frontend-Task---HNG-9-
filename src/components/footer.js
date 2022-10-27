import React from "react";
import SlackImg from "../images/slack.svg";
import GithubImg from "../images/Social icon.svg";
import ZuriLogo from "../images/Zuri.Internship_Logo.svg";
import I4G from "../images/I4G.svg";

const Footer = () => {
    return (
      <section id="footer">
        <div className="socials">
          <img src={SlackImg} alt="slack img" />
          <img src={GithubImg} alt="github img" />
        </div>
        <hr />
        <div className="logos">
          <img src={ZuriLogo} alt="zuri logo" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src={I4G} alt="I4G logo"/>
        </div>
      </section>
    );
};

export default Footer;
