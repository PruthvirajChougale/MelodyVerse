import {Row,Col, Card,Form,Input,Divider, Button,notification, message} from "antd";
import musicImage from "./assets/music.png";
import { Checkbox } from 'antd';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () =>{
    const [terms, setTerms] = useState(false);
    const navigateUser = useNavigate();  
    const handleChange = (e) =>{
            setTerms(e.target.checked);
            console.log(e.target.checked);
    }
    const sendNotification = (message) => {
		notification["error"]({
			message: message,
			description: "Error!",
			placement: "bottomRight",
			duration: 0,
		});
	};
    const onFinish =async(v)=>{
        try{
            if(v.password !== v.confirmpassword){
                sendNotification("please recheck your password!!");
            }
            if(terms && v.password == v.confirmpassword){
                const values = {...v,terms};
                console.log(values);
                message.success('Thank you...kindly check welcome Email!');
                navigateUser('/login');
            }
            else if(!terms){
                sendNotification("Please read and accept terms and conditions");
            }
            
           
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        
        <>
        <Form onFinish={onFinish}>
            <Row>
            <Col xs={24} md={12}>
            <div id="image">
            <img 
            src={musicImage}
             alt="music"
             style={{height:"25rem",width:"25rem"}}
            />
            </div>
            </Col>
            <Col xs={24} md={12}>
            <Card className="loginCard">
                <Row>
                    <Col>
                    <h2>SIGNUP</h2>
                    </Col>
                </Row>
                <Divider />
                <Row>
                <Col xs={24} md={24}>
                <Form.Item
                name="username"
                label={<span>Username</span>}
                rules={[
                    {
                        required:true,
                        message:"Please enter your Username"
                    }
                ]}>
                    <Input placeholder="Username"></Input>
                </Form.Item>
                </Col>
                </Row>
               
                <Row>
                <Col xs={24} md={24}>
                <Form.Item
                name="password"
                label={<span>Password</span>}
                rules={[
                    {
                        required:true,
                        message:"Please enter your Password"
                    },
                ]}>
                    <Input.Password placeholder="Password"></Input.Password>
                </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                <Form.Item
                name="confirmpassword"
                label={<span>Confirm Password</span>}
                rules={[
                    {
                        required:true,
                        message:"Please enter your Password"
                    }
                ]}>
                    <Input.Password placeholder="Confirm Password"></Input.Password>
                </Form.Item>
                </Col>
                </Row>
                <Divider />
                <Row>
                    <Col xs={24} md={24}>
                    <Button htmlType="submit">Sign up</Button>
                    </Col>
                </Row>
                <Row>
                <Checkbox style={{marginTop:"1rem"}} onChange={handleChange}>
                    I have read all the terms and conditions and I accept.
                </Checkbox>
                </Row>

            </Card>
            </Col>
            </Row>
        </Form>
        </>
    )
}

export default Signup;