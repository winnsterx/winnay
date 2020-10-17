import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Modal, Button, Form, Input } from "antd";

import "reactjs-popup/dist/index.css";

function Email({ email, setEmail }) {
  useEffect(() => {
    console.log("Email state: ", email);
  });

  function submitEmail(e) {
    e.preventDefault();
    console.log("Submitted email", console.log(e));

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

  return (
    <div className="Email">
      <Modal
        visible={email}
        onOk={(e) => submitEmail(e)}
        onCancel={() => cancelEmail()}
        footer={[
          <Button key="cancel" onClick={() => cancelEmail()}>
            Cancel
          </Button>,
          <Button
            type="primary"
            form="myEmail"
            key="submit"
            htmlType="submit"
            onClick={() => submitEmail()}
          >
            Send Email
          </Button>,
        ]}
      >
        <Form id="myEmail" name="email">
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
