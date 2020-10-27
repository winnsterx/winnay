import React from "react";

import Dock from "react-osx-dock";
import finder from "../images/dock_images/finder.png";
import note from "../images/dock_images/notes.png";
import mail from "../images/dock_images/mail.png";
import spotify from "../images/dock_images/spotify.png";
import nord from "../images/dock_images/nord.png";
import directory from "../images/dock_images/directory.png";
import firefox from "../images/dock_images/firefox.png";
import tetris from "../images/dock_images/tetris.png";
import potato from "../images/dock_images/potato.png";
import terminal from "../images/dock_images/terminal.png";
import trash from "../images/dock_images/trash.png";

// See https://lukehorvat.github.io/react-osx-dock/ for example usage
const items = [
  finder,
  note,
  mail,
  spotify,
  nord,
  terminal,
  firefox,
  tetris,
  potato,
  directory,
  trash,
];

function DockContainer({ setEmail, setVpn, setTetris }) {
  function sendEmail() {
    // alert("Send Winnie an Email");
    setEmail(true);
  }

  function showFarm() {
    window.open("https://bohemianbiotch.com/");
  }

  function showLocation() {
    console.log("Setting Location");
    setVpn(true);
  }

  function showSpotify() {
    window.open(
      "https://open.spotify.com/user/22ctqoguz67sek7vnsdtc7emy?si=ipLGymXZQ_25lvguqawj6w"
    );
  }

  // function showBooks() {
  //   alert("Books im reading");
  // }

  function showWritings() {
    var password = prompt("Password Please", "or hack me ;]");
    if (password === "1234") {
      window.open("https://bohemianbiotch.com/");
    }
  }

  function showTetris() {
    setTetris(true);
  }

  function selectMethod(e) {
    let index = parseInt(e.target.id);
    switch (index) {
      case 0:
      case 1:
        showWritings();
        break;
      case 2:
        sendEmail();
        break;
      case 3:
        showSpotify();
        break;
      case 4:
        showLocation();
        break;
      case 5:
      case 6:
      case 7:
        showTetris();
        break;
      case 8:
        showFarm();
        break;
      case 9:
      default:
    }
  }
  return (
    <div className="dock">
      <Dock
        backgroundClassName="dock-bg"
        width={800}
        magnification={0.5}
        magnifyDirection="up"
        // debug
      >
        {items.map((item, index) => (
          <Dock.Item className="dock-item" key={index}>
            <img
              className="dock-img"
              id={index}
              src={item}
              alt={item}
              onClick={(e) => selectMethod(e)}
            />
          </Dock.Item>
        ))}
      </Dock>
    </div>
  );
}
export default DockContainer;
