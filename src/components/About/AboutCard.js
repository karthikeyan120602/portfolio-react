import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karthikeyan K </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I am a Computer Science and Engineering graduate passionate about
            Full Stack Development, Machine Learning, and AI.
            <br />
            I have experience working as a Software Development Intern at Clar
            Technologies and participated in the Samsung PRISM Program as a
            Virtual Intern.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Begin with simple tasks to pave the way for solving complex
            problems!"{" "}
          </p>
          <footer className="blockquote-footer">Karthikeyan K</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
