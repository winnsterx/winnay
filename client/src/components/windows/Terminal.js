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
            print("list of projects");
          },
        }}
        descriptions={{
          ls: "shows all projects",
          showmsg: "shows a message",
          alert: "alert",
          popup: "alert",
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
