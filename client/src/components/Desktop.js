import React from "react";
import Dock from "react-osx-dock";
import note from "../images/dock_images/notes.png";
import mail from "../images/dock_images/mail.png";
import spotify from "../images/dock_images/spotify.png";
import book from "../images/dock_images/book.png";
import nord from "../images/dock_images/nord.png";
import directory from "../images/dock_images/directory.png";
import firefox from "../images/dock_images/firefox.png";
import terminal from "../images/dock_images/terminal.png";

import Exhibition from "./Exhibition";
import Software from "./Software";

const items = [note, mail, spotify, nord, book, terminal, firefox, directory];

function Desktop() {
  return (
    <div className="Desktop">
      {/* <Software /> */}
      <Exhibition />
      <div className="dock">
        <Dock
          backgroundClassName="DockBg"
          width={580}
          magnification={0.5}
          magnifyDirection="up"
          // debug
        >
          {items.map((item, index) => (
            <Dock.Item
              className="DockItem"
              key={index}
              onClick={() => console.log(item)}
            >
              <img src={item} alt="dock" />
            </Dock.Item>
          ))}
        </Dock>
      </div>
    </div>
  );
}
export default Desktop;
