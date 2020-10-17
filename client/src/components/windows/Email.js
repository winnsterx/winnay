import React from "react";
import emailjs from "emailjs-com";
import { Modal, Button, Form, Input } from "antd";
import { init } from "emailjs-com";
import {
  EMAILJS_SERVICEID,
  EMAILJS_TEMPLATEID,
  EMAILJS_USERID,
} from "../../config";

init(EMAILJS_USERID);

function Email({ email, setEmail }) {
  function submitEmail(mail) {
    emailjs.send(EMAILJS_SERVICEID, EMAILJS_TEMPLATEID, mail).then(
      (result) => {
        console.log("Email sent successfully: ", result.text);
        setEmail(false);
      },
      (error) => {
        console.log("Error in sending Email: ", error.text);
      }
    );
  }

  function cancelEmail() {
    setEmail(false);
  }

  return (
    <div className="Email">
      <Modal visible={email} footer={null} onCancel={() => cancelEmail()}>
        <Form
          name="myEmail"
          onFinish={(mail) => submitEmail(mail)}
          style={{ marginTop: "25px" }}
        >
          <h3 style={{ fontFamily: "tabular-nums", marginLeft: "28px" }}>
            To: mail.winnay@gmail.com
          </h3>
          <br />
          <Form.Item
            label="From"
            name="from"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={"Message"}
            name="message"
            rules={[{ required: true, message: "Please say something..." }]}
          >
            <Input.TextArea placeholder="Sending you a hot meme..." />
          </Form.Item>
          <Form.Item
            label="8 + 13 = "
            colon={false}
            name="check"
            rules={[
              {
                required: true,
                pattern: "21",
                message: "Wrong math!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Email;
