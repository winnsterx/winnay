import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Modal, Button, Form, Input } from "antd";

import "reactjs-popup/dist/index.css";

function Email({ email, setEmail }) {
  useEffect(() => {
    console.log("Email state: ", email);
  });

  function submitEmail() {
    console.log("Submitted email");
    // e.preventDefault();

    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    setEmail(false);
  }

  function cancelEmail() {
    console.log("cancel email");
    setEmail(false);
  }

  function trigger() {
    if (email) {
      setEmail(false);
    } else {
      setEmail(true);
    }
  }

  return (
    <div className="Email">
      <Modal
        visible={email}
        onOk={() => submitEmail()}
        onCancel={() => cancelEmail()}
        okText="Send Email"
        cancelText="Discard"
      >
        <Form name="email">
          <br /> <br />
          <Form.Item label="From" name="addr">
            <Input />
          </Form.Item>
          <Form.Item label="Message" name="message">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Email;
