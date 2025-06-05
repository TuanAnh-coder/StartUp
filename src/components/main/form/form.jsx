import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import './form.css'
const FormComponent = () => {
    const { TextArea } = Input;
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleClick = () => {
        console.log(name, email, value)
    }
    return (
        <div className="form">
            <div className="container">
                <div className="form__left">
                    <div className="title">
                        <h1>Need Help? Open a Ticket</h1>
                        <p>Our support team will get back to you ASAP via email.</p>
                    </div>
                    <Form
                        layout={'vertical'}    >
                        <Form.Item label="Your Name" className='form__item' name='name' >
                            <Input placeholder="Enter your name" id='name' style={{padding:'15px', borderRadius:'0'}} onChange={(e)=>{setName(e.target.value)}}/>
                        </Form.Item>
                        <Form.Item label="Your Email" className='form__item' name='email'>
                            <Input placeholder="Enter your email" type='email' id='email' style={{padding:'15px', borderRadius:'0'}} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Form.Item>
                        <Form.Item label="Your Message" className='form__item' name='mess'>
                            <TextArea
                                value={value}
                                id='mess'
                                onChange={e => setValue(e.target.value)}
                                placeholder="Enter your message"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                                style={{padding:'15px', borderRadius:'0'}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" style={{padding:'25px', borderRadius:'0'}} onClick={handleClick}>Submit Ticket</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="form__right">
                    <div className="title">
                        <h1>Subscribe to receive future updates</h1>
                        <p>Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
                    </div>
                    <Form>
                        <Form.Item><Input placeholder="Your name" onChange={(e)=>{setName(e.target.value)}}/></Form.Item>
                        <Form.Item><Input placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/></Form.Item>
                        <Form.Item>
                            <Button type="primary" style={{width:"100%",padding:'25px',borderRadius:'0'}} onClick={handleClick}>Subscribe</Button>
                        </Form.Item>
                    </Form>
                    <p style={{textAlign:"center", fontSize:'15px', color:'#767474'}}>No spam guaranteed, So please don’t send any spam mail.</p>
                </div>
            </div>
        </div>
    );
}
export default FormComponent;