import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rocco Caliandro </span>
            from <span className="purple"> Ceglie Messapica, Italy.</span>
            <br />
            I am currently employed as a BI developer at St. Patrick's Mental Healt Services.
            <br />
            I have completed with top marks the Bachelor's Degree in Computer Science at University of Bari Aldo Moro.
            I am continuing the Master Degree in Computer Science at the same university with AVG 28/30.
            <br />
            <br />
            Apart from computer science, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Trumpet 🎺
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🚀
            </li>
          </ul>
          <br></br>
          My slogan is:
          <p style={{ color: "rgb(155 126 172)" }}>
            "if the statistics are boring, you've got the wrong numbers!"{" "}
          </p>
          <footer className="blockquote-footer">Edward Tufte</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
