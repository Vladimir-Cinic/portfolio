import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Bg1 from '../../../assets/Images/ContactPhoto.png';
import Bg2 from '../../../assets/Images/Gif3.gif';

import {
  Contact,
  Subtitle,
  FormContainer,
  HeadingContainer,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  SocialIcons,
  A,
  BgImage1,
  BgImage2,
  MessageDisplay,
  LinksContainer,
} from './ContactElements';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_imy1j3f',
        'template_1zqoo1o',
        e.target,
        'user_w36O3hxvuIrvpRfTATf3n'
      )
      .then((res) => {
        console.log(res);
        setAlertMsg(
          'Thank you for contacting me. I will reply as soon as possible!'
        );
        setTimeout(() => {
          setAlertMsg('');
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        setAlertMsg('Something went wrong,try sending your message again!');
      });
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <Contact id='contact'>
      <HeadingContainer>
        <Title>
          Have a question or <br /> want to hire me?
        </Title>
        <Subtitle>Feel free to contact me.</Subtitle>
      </HeadingContainer>

      <FormContainer>
        <BgImage1 src={Bg1} />
        <BgImage2 src={Bg2} />
        <Form onSubmit={sendEmail}>
          <Input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type='email'
            name='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextArea
            name='message'
            placeholder='Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type='submit' value='send'>
            Submit
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Button>
        </Form>

        <MessageDisplay>{alertMsg}</MessageDisplay>
        <SocialIcons>
          <li>
            <A href='https://www.linkedin.com/in/vladimir-%C4%87ini%C4%87-227326215/'>
              LinkedIn
            </A>
          </li>
          <li>
            <A href='https://www.instagram.com/force_choke_me_daddy/'>
              Instagram
            </A>
          </li>

          <li>
            <A href='https://github.com/Vladimir-Cinic?tab=repositories'>
              GitHub
            </A>
          </li>
        </SocialIcons>
      </FormContainer>
    </Contact>
  );
};

export default ContactSection;
