import React from "react";
import Terminal from "terminal-in-react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../ItemType";

function TerminalContainer({ setTerminal, left, top, id }) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.WINDOW },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const style = {
    position: "absolute",
    height: "70%",
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div
      ref={drag}
      className="terminal-container"
      style={{ ...style, left, top }}
    >
      <Terminal
        color="green"
        backgroundColor="black"
        barColor="black"
        style={{
          fontWeight: "bold",
          fontSize: "1em",
        }}
        actionHandlers={{
          handleClose: () => {
            setTerminal(false);
          },
        }}
        commands={{
          projects: (args, print, runCommand) => {
            print(
              "recent projects:\nArtxSpot      weatherFM    qinti\nwinnay    pintos    fibbing\n\ncd [project_name] to learn more about specific projects"
            );
          },
          bg: (args, print, runCommand) => {
            print(
              "1999 to 2012: Guangzhou, China\n" +
                "2012 to 2017: Toronto, Canada\n" +
                "2017 to undefined: Stanford, USA\n" +
                "       B.S. in Computer Science (Computer Systems Track) & B.A. in Art History\n" +
                "2020 to 2021: gap year with bases in Amsterdam, Florence, Guangzhou, Toronto ʕ•ᴥ•ʔ"
            );
          },
          contact: (args, print, runCommand) => {
            print(
              "try {\n" +
                "    winniex at stanford period edu\n" +
                "} catch (error) {\n" +
                "    plus one six five zero five seven five eight six two five\n" +
                "}"
            );
          },
          skills: (args, print, runCommand) => {
            print(
              "Languages: JavaScript, Rust, C, C++, Python, TypeScript, Java, SQL, Ruby on Rails\n" +
                "Frameworks / APIs: React, React Native, Node, Express, MongoDB, Jekyll, Styled-Components, OpenCV, LaTex, Lua, Julia\n" +
                "Tools: Docker, Docker-Compose, Kubernetes, GCP, Firebase, Heroku, Netlify, AWS, Expo, MySQL, Google Analytics\n" +
                "Software: EAGLE, SolidWorks, Fusion, Adobe Photoshop & Illustrator, Microsoft Office Suite\n" +
                "Spoken languages: Mandarin, English, Japanese, Cantonese, & learning Italian"
            );
          },
          experiences: (args, print, runCommand) => {
            print(
              "Google, Chrome Platform Security         Software Engineering Intern, June to Sept 2020\n" +
                "       * Conducted experiments of using Rust to improve memory safety in Chromium\n" +
                "       * Worked with open-source tools to convert memory-critical libraries to Rust\n" +
                "       * Created unit tests to ensure retenton of full functionality post-conversion\n" +
                "Reach Labs, YC S15                     Software Engineering Intern, June to Sept 2019\n" +
                "       * Created tracking program with OpenCV to live-report probes' coordinates\n" +
                "       * Built ML models (Keras & scikit-learn) to classify probes and emblems\n" +
                "       * Architected multiprocessing Python programs to halt charging stations\n" +
                "         upon detection of human\n" +
                "Stanford Microwave Integrated Circuits Lab        Research Assistant, June to Sept 2018\n" +
                "       * Prototyped & assembled original 2.45GHz RADAR PCB & phase shifter PCB\n" +
                "       * Coded Python scripts to convert audio signals to radiowaves at set frequencies\n"
            );
          },

          cd: {
            method: (args, print, runCommand) => {
              if (args._[0].toLowerCase().includes("fibbing")) {
                print(`Opening Fibbing reproduction paper.`);
                window.open(
                  "https://reproducingnetworkresearch.wordpress.com/2020/06/23/cs-244-20-reproducing-fibbing-central-control-over-distributed-routing/"
                );
              } else if (args._[0].toLowerCase() === "artxspot") {
                print(`Opening ArtxSpot.`);
                window.open("https://artxspot.winnay.com/");
              } else if (args._[0].toLowerCase().includes("pintos")) {
                print(
                  "Implemented threads, user programs, virtual memory, and a file system in C for the Pintos OS with a partner for CS140, Stanford's Operating Systems Class. For project details, navigate to https://web.stanford.edu/class/cs140/projects/pintos/pintos.pdf"
                );
              } else if (args._[0].toLowerCase().includes("winnay")) {
                print(
                  "You are on winnay.com, designed and built by Winnie X. Implemented with React, Styled-Components, Express, Node, and sundry other libraires / frameworks."
                );
              } else if (args._[0].toLowerCase().includes("weatherfm")) {
                print(
                  "IN PROGRESS. Fun alarm that rings sounds based on your location, time, and weather data. Built with Magenta.js, React, MongoDB, and Express. Currently in deployment stage."
                );
              } else if (args._[0].toLowerCase().includes("qinti")) {
                print(
                  "I co-created Qinti, a MERN-based scheduling & CRM web platform for local home cleaning businesses. I led a team of engineers & UI/UX designers to develop the web app & conduct user research. Qinti is architected as a microservice ecosystem with cloud-native infrastructure. Deployment and scaling is managed through Docker, Kubernetes, & GCP. For our largest client (based in L.A.), Qinti increases revenue by approx. $6k per month."
                );
              } else {
                print("specify a project using cd [project_name]");
              }
            },
          },
        }}
        descriptions={{
          projects: "show all projects",
          cd: "learn more about a specific project via 'cd [project_name]'",
          skills: "shows existing skills",
          bg: "show my background",
          contact: "show contact information",
          experiences: "show my work experiences",
        }}
        msg={
          "Last login: " +
          new Date() +
          ". \nUse help to see list of commands.\nTry one of these commands: contact, bg, skills, experiences, projects, cd [project_name]."
        }
      />
    </div>
  );
}

export default TerminalContainer;
