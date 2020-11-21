import React from "react";
import { useDrag } from "react-dnd";
import BrowserFrame from "react-browser-frame";
import { ItemTypes } from "./ItemType";

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
      <BrowserFrame
        visible={exhibit}
        setVisible={setExhibit}
        url="portfolio.winnay.com/"
      >
        {/* Use React Router to turn image into a link */}
        <iframe
          src="https://portfolio.winnay.com/"
          title="Winnie X's portfolio"
          width="800px"
          height="550px"
          style={{ border: 0 }}
        ></iframe>
      </BrowserFrame>
    </div>
  );
}

export default Exhibition;
