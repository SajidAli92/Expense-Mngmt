import React,{useState, useEffect} from 'react';
import {Form, Input, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Layout/Spinner';
import "../styles/RegisterPage.css";
import EMS_Logo from '../assets/EMS_logo.png';

const Register = () => {

    const navigate = useNavigate()
    const[loading, setLoading] = useState(false);

    //submit handler
    const submitHandler = async (values) =>{
        try {
            setLoading(true)
            await axios.post("http://localhost:8080/api/v1/users/register", values);
            message.success("registeration successfull");
            setLoading(false);
            navigate('/login');
            
        } catch (error) {
            setLoading(false);
            message.error('something went wrong');
        }
    };

    //prevent for login users
    useEffect(() => {
        if(localStorage.getItem('user')){
            navigate('/');
        }
    },[navigate]);

  return (
    <>
        <div className="register-page"> 

            {loading && <Spinner />}


            <Form layout='vertical' onFinish={submitHandler}>
                <div className="logo">
                    <img src={EMS_Logo} alt="logo" />
                </div>
                <h2>Register Form</h2>
                <Form.Item label='Name' name='name' >
                    <Input  />
                </Form.Item>
                <Form.Item label='Email' name='email' >
                    <Input type='email' />
                </Form.Item>
                <Form.Item label='Password' name='password' >
                    <Input type='password' />
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/login">Already Register? click here to login</Link>
                    <button className='btn btn-primary' > Register </button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Register