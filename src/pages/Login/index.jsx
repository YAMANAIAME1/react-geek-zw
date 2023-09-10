import React from "react";
import styles from "./index.module.scss";
import { Card, Form, Input, Button, Checkbox, message } from "antd";
import logoImage from "@/assets/logo.png";
import { useDispatch } from "react-redux";
import { asyncLogin } from "@/store/reducers/login";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = async (values) => {
    delete values.remember;
    try {
      await dispatch(asyncLogin({ mobile: values.mobile, code: values.code }));
      // 提示
      message.success("登录成功", 0.8, () => {
        history.replace("/layout");
      });
    } catch (error) {
      // 失败了
      message.error(error.response.data.message, 1);
    }
  };
  return (
    <div className={styles.root}>
      <Card className="login-container">
        <img className="login-logo" src={logoImage} alt="" />
        <Form
          name="basic"
          size="large"
          initialValues={{
            mobile: "13911111111",
            code: "246810",
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: "手机号不能为空!",
                validateTrigger: "onBlur",
              },
              {
                pattern: /^1[3-9][0-9]{9}$/,
                message: "手机号不合法",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "验证码不能为空!",
              },
              {
                len: 6,
                message: "验证码必须是6位",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            valuePropName="checked"
            name="remember"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("必须勾选用户协议")),
              },
            ]}
          >
            <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
