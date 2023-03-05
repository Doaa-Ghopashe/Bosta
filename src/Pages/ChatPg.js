import React from 'react'
import "./ChatPgSt.css"
export default function ChatPg() {
  return (
    <div className='chatmain'>
        <div className='container'>
        <div className='chattingroom'>
            <div className='ChRmheader'>
                <div className='user-info'>
                    <div className='user-img'>
                        <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png'/>
                    </div>
                    <div className='sub-info'>
                        <span className='user-name'>Doaa Adel</span>
                        <span className='user-status'>Available</span>
                    </div>
                </div>
                <div className='chat-controllers'>
                    <span className='optionsbtn btn'>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                </div>
            </div>
            <div className='ChRmbody'>
                <div className='row'>
                    <div className='col-1 p-2'>
                        <div className='sender-img'>
                            <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"/>
                        </div>
                    </div>
                    <div className='col-10 pt-4 p-0'>
                        <div className='message'>
                            <pre>
                                Greetings,<br/>
                                My name is Doaa Adel. I hope this email finds you well, 
                                please look at my cv deeply and give me the chance to 
                                work with your company.
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ChRmfooter'>
                <div className='chat-input'>
                    <textarea placeholder='Write a message...'></textarea>
                </div>
                <div className='chat-adds'>
                    <div className='chatbtn btn'><i className="fa-solid fa-paperclip"></i></div>
                    <div className='chatbtn btn'><i className="fa-regular fa-face-smile"></i></div>
                    <div className='chat-send'>
                        <button className='btn'><i className="fa-regular fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </div>    
        </div>
    </div>
  )
}
