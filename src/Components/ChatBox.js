import React from 'react'
import "./ChatBoxSt.css"
import $ from "jquery"
import {Link} from "react-router-dom"
export default function ChatBox() {
    const openchat = () => {
        $(".chatingbox").removeClass("hidden")
        $(".chatshow").hide();
    }
    const cancelchat = () => {
        $(".chatingbox").addClass("hidden")
        $(".chatshow").show();
    }
    const ShowOpt = () => {
        $(".optionslist").toggleClass("showoptions")
        $(".emojibox").removeClass("showemojis")
    }
    const emojisshow = () => {
        $(".emojibox").toggleClass("showemojis")
        $(".optionslist").removeClass("showoptions")
    }
  return (
    <>
    <div className='chatshow'>
        <button className='btn' onClick={openchat}>
            <i className="fa-regular fa-comment-dots"></i>
        </button>
    </div>
    <div className='chatingbox hidden'>
        {/*chat header*/}
        <div className='chatheader'>
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
                <Link to="/chat" className='fullscreenbtn btn'>
                    <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                </Link>
                <span className='optionsbtn btn' onClick={ShowOpt}>
                    <i className="fa-solid fa-ellipsis"></i>
                    <div className='optionslist'>
                        <ul>
                            <li>mute</li>
                            <li>notify</li>
                            <li>Archive</li>
                            <li>Delete</li>
                            <li>mark as unread</li>
                        </ul>
                    </div>
                </span>
                <span className='closebtn btn' onClick={cancelchat}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
            </div>
        </div>
        {/*chat body*/}
        <div className='chatbody'>
            <div className='row'>
                <div className='col-2 p-2'>
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
        {/*chat controllers*/}
        <div className='chatfooter'>
            <div className='chat-input'>
                <textarea placeholder='Write a message...'></textarea>
            </div>
            <div className='chat-adds'>
                <div className='chatbtn btn'><i className="fa-solid fa-paperclip"></i></div>
                <div className='chatbtn emojibtn btn'>
                    <i className="fa-regular fa-face-smile" onClick={emojisshow}></i>
                    <div className='emojibox'>
                        <div className='emojieslider'>
                            <ul>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f604.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f605.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f60d.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f923.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1fae0.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f619.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f609.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f61c.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f642.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f617.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f972.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f970.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f643.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f607.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f60b.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f606.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/263a-fe0f.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f603.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f929.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f917.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f60f.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f910.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f92d.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f92b.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f914.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f636.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f611.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f911.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1fae2.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f612.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f928.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                                <li>
                                    <button className='btn'>
                                        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f637.png" alt="smile" class="__EmojiPicker__ epr-emoji-img" loading="eager"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='chat-send'>
                    <button className='btn'><i className="fa-regular fa-paper-plane"></i></button>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
