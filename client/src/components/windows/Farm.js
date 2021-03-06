import React from "react";
import { useDrag } from "react-dnd";
import { Browser } from "../styles/lib";
import { ItemTypes } from "../ItemType";

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
      <Browser visible={farm} setVisible={setFarm} url="bohemianbiotch.com">
        {/* Use React Router to turn image into a link */}
        <iframe
          src="https://bohemianbiotch.com/"
          title="Winnie X's portfolio"
          width="500px"
          height="500px"
          style={{ border: 0 }}
        ></iframe>
      </Browser>
    </div>
  );
}

export default Farm;
