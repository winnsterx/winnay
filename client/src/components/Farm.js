import React from "react";
import { useDrag } from "react-dnd";
import BrowserFrame from "react-browser-frame";
import { ItemTypes } from "./ItemType";

function Farm({ farm, setFarm, id, left, top }) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.WINDOW },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const style = {
    position: "absolute",
    background: "white",
    borderRadius: "5px",
  };

  return (
    <div ref={drag} className="farm" style={{ ...style, left, top }}>
      <BrowserFrame
        visible={farm}
        setVisible={setFarm}
        url="bohemianbiotch.com"
        height="100%"
      >
        {/* Use React Router to turn image into a link */}
        <iframe
          src="https://bohemianbiotch.com/"
          title="Winnie X's portfolio"
          width="500px"
          height="500px"
          style={{ border: 0 }}
        ></iframe>
      </BrowserFrame>
    </div>
  );
}

export default Farm;
