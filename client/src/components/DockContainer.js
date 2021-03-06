import React from "react";
import Dock from "react-osx-dock";
import items from "../images/dock_images/dock_images";

// See https://lukehorvat.github.io/react-osx-dock/ for example usage

function DockContainer({
  setAbout,
  setEmail,
  setVpn,
  setTetris,
  setExhibit,
  setGithub,
  setTerminal,
  setFarm,
}) {
  function showAboutMe() {
    setAbout(true);
  }
  function sendEmail() {
    setEmail(true);
  }

  function showFarm() {
    setFarm(true);
  }

  function showLocation() {
    setVpn(true);
  }

  function showSpotify() {
    window.open(
      "https://open.spotify.com/user/22ctqoguz67sek7vnsdtc7emy?si=ipLGymXZQ_25lvguqawj6w"
    );
  }

  function showWritings() {
    var password = prompt("Password Please", "or hack me ;]");
    if (password === "1234") {
      window.open("https://jokes.com/");
    }
  }

  function showTetris() {
    setTetris(true);
  }

  function showExhibit() {
    setExhibit(true);
  }

  function showGithub() {
    window.open("https://github.com/winnayx");
  }

  function showProjects() {
    setGithub(true);
  }

  function showTerminal() {
    setTerminal(true);
  }

  function selectMethod(e) {
    let index = parseInt(e.target.id);
    switch (index) {
      case 0:
        showAboutMe();
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
        showTerminal();
        break;
      case 6:
        break;
      case 7:
        showTetris();
        break;
      case 8:
        showFarm();
        break;
      case 9:
        showGithub();
        break;
      case 10:
        showExhibit();
        break;
      case 11:
        showProjects();
        break;
      case 12:
        alert("1-800-GOT-JUNK?");
        break;
      default:
        break;
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
