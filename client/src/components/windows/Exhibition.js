import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemType";
import { Browser } from "../styles/lib";

function Exhibition({ exhibit, setExhibit, id, left, top }) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.WINDOW },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const style = {
    position: "absolute",
    opacity: 1,
    background: "white",
    borderRadius: "5px",
  };

  return (
    <div ref={drag} className="exhibit" style={{ ...style, left, top }}>
      <Browser
        visible={exhibit}
        setVisible={setExhibit}
        url="portfolio.winnay.com"
      >
        <iframe
          src="https://portfolio.winnay.com/"
          title="Winnie X's portfolio"
          width="800px"
          height="500px"
          style={{ border: 0 }}
        ></iframe>
      </Browser>
    </div>
  );
}

export default Exhibition;
