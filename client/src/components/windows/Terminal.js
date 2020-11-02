import React from "react";
import Terminal from "terminal-in-react";

function TerminalContainer() {
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
        commands={{
          ls: (args, print, runCommand) => {
            print(
              "recent projects: fibbing, PintosOS, artxspot, weatherfm, qinti, this website"
            );
          },

          cd: {
            method: (args, print, runCommand) => {
              if (args._[0] === "fibbing") {
                print(`cd'ing into ${args._[0]}`);
                window.open(
                  "https://reproducingnetworkresearch.wordpress.com/2020/06/23/cs-244-20-reproducing-fibbing-central-control-over-distributed-routing/"
                );
              } else if (args._[0] === "artxspot") {
                print(`cd'ing into ${args._[0]}`);
                window.open("https://artxspot.winnay.com/");
              } else {
                print("specify a project using cd [project_name]");
              }
            },
          },
        }}
        descriptions={{
          ls: "shows all projects",
          cd: "change the shell working directory",
        }}
        msg={
          "Last login: " + new Date() + ". Use help to see list of commands."
        }
      />
    </div>
  );
}

export default TerminalContainer;
