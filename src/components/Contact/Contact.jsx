import React,{useRef} from 'react'
import './Contact.css'
import amazon from '../../assets/amazon.png'
import meta from '../../assets/meta.png'
 import google from '../../assets/google.png'
import ms from '../../assets/microsoft.svg'
import git from '../../assets/github.png'
import linkedin from '../../assets/linkedin.webp'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7rmvs4', 'template_r10a0ts', form.current, 'xWwCcQUqQyazsx0hQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
        <div className="clients">
            <h1 className="contentPageTitle">My Clients</h1>
            <p className="clientsDesc">
                I have had the opportunity to work with a diverse group of companies, some of the notale compaines I have worked with includes

            </p>
            <div className="clientImgs">
                <img src={amazon} alt="" className="clientImg" />
                <img src={google} alt="" className="clientImg" />
                <img src={meta} alt="" className="clientImg" />
                <img src={ms} alt="" className="clientImg" />
            </div>
        </div>

      <div className="contact">
        <h1 className="contentPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunity</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail} >
          <input type="text" className="name" placeholder='Your Name' name='from_name' />
          <input type="email" className='email' placeholder='Your Email' name='your_email' />
          <textarea name="message" rows="5" className='msg' placeholder='Message' ></textarea>
        </form>
        <button className='submitBtn' type='submit' value='Send'>Submit</button>
        <div className="links">
          <img src={linkedin} alt="linkedin" className="link" />
          <img src={git} alt="github" className="link" />
        </div>

      </div>

    </section>
  )
}

export default Contact