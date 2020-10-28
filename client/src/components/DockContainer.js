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
import farm from "../images/dock_images/farm.png";
import terminal from "../images/dock_images/terminal.png";
import trash from "../images/dock_images/trash.png";
import preview from "../images/dock_images/preview.png";

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
  farm,
  preview,
  directory,
  trash,
];

function DockContainer({ setEmail, setVpn, setTetris, setExhibit, setGithub }) {
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

  function showExhibit() {
    setExhibit(true);
  }

  function showGithub() {
    setGithub(true);
  }

  function selectMethod(e) {
    let index = parseInt(e.target.id);
    switch (index) {
      case 0:
        break;
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
        break;
      case 6:
        showGithub();
        break;
      case 7:
        showTetris();
        break;
      case 8:
        showFarm();
        break;
      case 9:
        showExhibit();
        break;
      case 10:
        break;
      case 11:
        alert("1-800-GOT-JUNK?");
        break;
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
