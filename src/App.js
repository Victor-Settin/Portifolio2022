import './App.css';
import { useState} from 'react'
import emailjs from '@emailjs/browser'

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    function sendForm(e){
        e.preventDefault();

        if( name === '' || email === '' || message === ''){
            alert('preencha os campos')
            return;
        }
        const templateParams = {
            from_name: name,
            message:message,
            email: email
        }
        emailjs.send("service_qcivbv4", "template_3hdvijd", templateParams, "UCaCXkW7DG6bgVRCH")
        .then((response) =>{
            console.log('email enviado',response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        },(err) =>{ console.log('failled:', err)})
    };


  return (
    <div className="App">
      <div class="page">
        <header>
            <div class="header">
                <div class="content-header">
                    <span>Devolper</span>
                </div>
                <nav id="navigation" class="site-navigation" role="navigation">
                    <ul class="menu">
                      <li class="menu-item"><a href="#section-two-id">Contact</a></li>
                      <li class="menu-item"><a href="#">Blog</a></li>
                      <li class="menu-item"><a href="#">Portifolio</a></li>
                      <li class="menu-item"><a href="#">Pages</a>
                        <ul class="dropdown">
                          <li class="menu-item sub-menu not"><a href="#">Sub 1</a></li>
                          <li class="menu-item sub-menu not"><a href="#">Sub 2</a></li>
                          <li class="menu-item sub-menu not"><a href="#">Sub 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
            </div>
			
        </header>
        <div class="section-one">
            <div class="content-about">
                <aside class="aside-left">
                    <div class="linha-x"></div>
                    <div class="i-am">
                        Nice to meet you,<br></br>I'm Victor Settin
                    </div>
                    <div class="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </div>
					<hr></hr>
                    <div class="sub-content-about">
                        <div class="experience">
                            <div class="experience-left">
                                <p class="number">10</p>
                                <p>&nbsp;<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w" viewBox="0 0 512 512"><path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"  d="M256 112v288M400 256H112"/></svg></p>
                                <p class="font">Years of<br></br>experience</p>
                            </div>
                            <div class="experience-right">
                                <p class="number">100</p>
                                <p>&nbsp;<svg xmlns="http://www.w3.org/2000/svg" class="ionicon w" viewBox="0 0 512 512"><path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"  d="M256 112v288M400 256H112"/></svg></p>
                                <p class="font">Sucecssful<br></br>projects</p>
                            </div>
                        </div>
                    </div>
                </aside>
                <aside class="aside-right">
                    <div class="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </aside>
            </div>
        </div>
        <div class="section-two" id="section-two-id">
            <div class="content-lets-worked" data-aos="fade-left">
                <aside class="aside-left">
                    <div class="linha-x"></div>
                    <div class="i-am">
                       Let's work together
                    </div>
                </aside>
                <div class="section-dow-work">
                    <div class="box-section-two">
                        <div class="content">
                            <div class="sub-title">
                                <h4>Getin touch with me</h4>
                            </div>
                            <div class="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </div>
                            <div class="social-list">
                                <ul >
                                </ul>
                            </div>
                        
                        </div>
                        
                    
                    </div>
                    <div class="card-call-me">
                        <section class="form_wrap">
                            <form action="/Contact" method="post" class="form_contact" onSubmit={sendForm}>
                                <h2>Let's talk</h2>
                                <div class="user_info">
                                    <label for="name">Enter your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}>
                                    </input>
                    
                                    <label for="email not">Your email address</label>
                                    <input type="text"
                                        class="not"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}>
                                    </input>
                    
                                    <label for="mensaje" class="not">Write me a message</label>
                                    <textarea 
                                        class="not"
                                        id="mensaje"
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}>
                                    </textarea>
                    
                                    <input type="submit" value="Enviar" id="btnSend"></input>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    </div>
  )
}

export default App
