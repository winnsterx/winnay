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
                "2017 to 2022: Stanford, USA\n" +
                "       B.S. in Computer Science (Systems) & Minor in Art History\n" +
                "2022 to undefined: San Francisco, USA \n" + 
                "       Research Engineer at Bitwise Asset Management \n" 

            );
          },
          contact: (args, print, runCommand) => {
            print(
              "try {\n" +
                "    winnayx at gmail dot com\n" +
                "} catch (error) {\n" +
                "    at winnay on farcaster\n" +
                "}"
            );
          },
          skills: (args, print, runCommand) => {
            print(
              "Languages: Rust, Solidity, TypeScript/JS & NodeJS, C, C++, Java\n" +
                "Frameworks / APIs: web3.js, NextJS, Vercel, React & Express, MongoDB, Jekyll, Styled-Components\n" +
                "Tools: Truffle, Infura, IPFS/Arweave, Pinata, hardhat, Remix, Firebase, VS Code\n" +
                "Spoken languages: Mandarin, English, Japanese, Cantonese, & learning Italian"
            );
          },
          experiences: (args, print, runCommand) => {
            print(
                "too lazy to put it all up here, ping me for it."
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
