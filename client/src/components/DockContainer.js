import React from "react";
import Dock from "react-osx-dock";
import finder from "../images/dock_images/finder.png";
import note from "../images/dock_images/notes.png";
import mail from "../images/dock_images/mail.png";
import spotify from "../images/dock_images/spotify.png";
import book from "../images/dock_images/book.png";
import nord from "../images/dock_images/nord.png";
import directory from "../images/dock_images/directory.png";
import firefox from "../images/dock_images/firefox.png";
import terminal from "../images/dock_images/terminal.png";
import trash from "../images/dock_images/trash.png";

// See https://lukehorvat.github.io/react-osx-dock/ for example usage

const items = [
  finder,
  note,
  mail,
  spotify,
  nord,
  book,
  terminal,
  firefox,
  directory,
  trash,
];

function DockContainer() {
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
          <Dock.Item
            className="dock-item"
            key={index}
            onClick={() => console.log(item)}
          >
            <img className="dock-img" src={item} alt="dock" />
          </Dock.Item>
        ))}
      </Dock>
    </div>
  );
}
export default DockContainer;
