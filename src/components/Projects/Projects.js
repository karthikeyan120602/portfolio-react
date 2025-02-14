import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import waste from "../../Assets/Projects/wastemanagement.png";
import chatify from "../../Assets/Projects/chatify.png";
import calculator from "../../Assets/Projects/calculator.png";
import taxiapp from "../../Assets/Projects/taxi-app.png";
import game from "../../Assets/Projects/game-controller.png";
import gymWeb from "../../Assets/Projects/gym.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A personal chat room or workspace designed for sharing resources and hanging out with friends, built using the MERN stack, Socket.io, TailwindCSS, and Daisy UI. It features real-time messaging powered by Socket.io, image sharing, and message reactions. Authentication and authorization are handled with JWT, while Zustand is used for global state management. Additionally, it includes online user status tracking and robust error handling on both the server and client sides"
              ghLink="https://github.com/karthikeyan120602/chat-app"
              demoLink="https://drive.google.com/file/d/1UIOVYDqoRfLKixCJsKzTfnC_JYtn5xiM/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxiapp}
              isBlog={false}
              title="Taxi-App"
              description="Taxi App is a fully-featured mobile app built with React Native for the user interface, Google Maps for displaying maps and directions, Stripe for payment processing, and serverless Postgres for database management, all styled with TailwindCSS. The app is designed to showcase the development of full-stack mobile applications, highlighting the developer's skills in a unique and impactful way."
              ghLink="https://github.com/karthikeyan120602/taxi-app-frontend-expo-sdk52"
              demoLink="https://drive.google.com/file/d/1S6EKJ0M0qlvzkgNgwqe6cuHdOWz4_TZg/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waste}
              isBlog={false}
              title="Waste Management"
              description="Zero2Hero is an innovative AI-powered waste management platform built with Next.js 14, designed to incentivize and streamline the waste reporting and collection process. By integrating cutting-edge technologies such as Google Gemini AI, Web3Auth, and Neon Database, Zero2Hero fosters a community-driven approach to waste management, rewarding users for their eco-friendly actions. With features like AI-assisted waste verification, a user reward system, real-time task management, and an interactive leaderboard, this platform encourages environmental sustainability while promoting active community engagement."
              ghLink="https://github.com/karthikeyan120602/waste-management-ai-web"
              demoLink="https://drive.google.com/file/d/1iQPM_Pyym6KHQxh_cvD419NkbfteGfeQ/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Game Controller"
              description="This project uses OpenCV and MediaPipe for device-free full-body pose detection, enabling children to control games through natural body movements like arm gestures and leg lifts. By eliminating the need for external devices, it aims to improve gaming accuracy and promote physical activity for better health outcomes."
              ghLink="https://github.com/karthikeyan120602/game-controller"
              demoLink="https://drive.google.com/file/d/119yac0dHoQB0otBYGEIoNZqNHfiBhTD1/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="MathCanvas: AI-Powered Drawing Calculator"
              description="MathCanvas is an innovative AI-powered calculator that brings your drawings to life! Inspired by the iPad Math Notes/Calculator application, this project allows users to draw mathematical equations, which are then recognized and solved in real-time using the Gemini Flash AI API. Built with Python for the backend and React for the frontend, MathCanvas combines powerful AI with an interactive user interface to provide an intuitive and seamless experience for solving math problems.."
              ghLink="https://github.com/karthikeyan120602/calc-fe"
              demoLink="https://drive.google.com/file/d/1QWI-qF9vlVr-lYC9y6rWdCPWAY3gbd0Y/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymWeb}
              isBlog={false}
              title="Gym Trainer"
              description="This project leverages MediaPipe for real-time full-body pose detection to track gym workouts and provide feedback on body movements like arm gestures, squats, and jumps. By analyzing body posture and landmarks, it helps track calories burned, improve workout performance, and correct movement patterns to reduce injury risk, offering a device-free solution with increased accuracy and efficiency compared to existing methods."
              ghLink="https://github.com/karthikeyan120602/Gym-Trainer"
              demoLink="https://drive.google.com/file/d/1BJueU6W4qY8lwLAOcLGX0leCF3lA9JEY/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
