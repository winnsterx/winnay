import React from "react";
import { useDrag } from "react-dnd";
import BrowserFrame from "react-browser-frame";
import map from "../../images/map.jpg";
import { ItemTypes } from "../ItemType";

function Vpn({ vpn, setVpn, id, left, top }) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.WINDOW },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const style = {
    position: "absolute",
    opacity: 1,
  };

  return (
    <div ref={drag} className="vpn" style={{ ...style, left, top }}>
      <BrowserFrame
        url="Currently:// Firenze, Toscana, Italy"
        visible={vpn}
        setVisible={setVpn}
      >
        <img
          src={map}
          alt="my location: Florence Italy"
          width="710px"
          height="380px"
        />
      </BrowserFrame>
    </div>
  );
}

export default Vpn;
