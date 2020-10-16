import React, { useState, useEffect } from "react";

import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Email from "./windows/Email";

// import Top from "./Top";

function Desktop() {
  const [email, setEmail] = useState(false);

  return (
    <div className="Desktop">
      {/* <Top /> */}
      {email ? <Email email={email} setEmail={setEmail} /> : null}
      {/* <Software />
      <Exhibition /> */}
      <DockContainer setEmail={setEmail} />
    </div>
  );
}
export default Desktop;
