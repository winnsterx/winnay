import React from "react";
import Terminal from "terminal-in-react";

function TerminalContainer({ setTerminal }) {
  return (
    <div
      style={{
        marginTop: "5px",
        position: "fixed",
        height: "70%",
      }}
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
          ls: (args, print, runCommand) => {
            print(
              "recent projects:\nArtxSpot      weatherFM    qinti\nwinnay.com    pintos    fibbing_reproduction\n\ncd [project_name] to learn more about specific projects"
            );
          },
          skills: (args, print, runCommand) => {
            print(
              "Languages: JavaScript, Rust, C, C++, Python, TypeScript, Java, Git, Ruby on Rails, SQL\n\n" +
                "Frameworks / APIs: React, React Native, Node, Express, MongoDB, Jekyll, Styled-Components, OpenCV, LaTex, Lua, Julia\n\n" +
                "Tools: Docker, Docker-Compose, Kubernetes, Firebase, Heroku, GCP, AWS, MySQL, Google Analytics\n\n" +
                "Software: SolidWorks, Fusion, Microsoft Office Suite\n\n" +
                "Spoken languages: Mandarin, Cantonese, Japanese, & currently learning Italian"
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
              } else {
                print("specify a project using cd [project_name]");
              }
            },
          },
        }}
        descriptions={{
          ls: "shows all projects",
          cd: "learn more about a specific project via 'cd [project_name]'",
          skills: "shows existing skills",
        }}
        msg={
          "Last login: " + new Date() + ". \nUse help to see list of commands."
        }
      />
    </div>
  );
}

export default TerminalContainer;
