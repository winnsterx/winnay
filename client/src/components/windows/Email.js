import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import emailjs from "emailjs-com";
import { Modal, Button, Form, Input } from "antd";

import "reactjs-popup/dist/index.css";

function Email({ email, setEmail }) {
  useEffect(() => {
    console.log("hello");
  });

  function submitEmail(e) {
    console.log("Submitted email");
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function cancelEmail() {
    console.log("cancel email");
  }

  return (
    <div className="Email">
      <Modal
        title="Send Email"
        visible={email}
        onOk={submitEmail}
        onCancel={cancelEmail}
      >
        {/* <Form id="sendemail">
          <Form.Item label="Email Address" name="addr">
            <Input />
          </Form.Item>
        </Form> */}
        <p>Modal</p>
      </Modal>
    </div>
  );
}

export default Email;
