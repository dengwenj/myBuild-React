import React from 'react'

import './App.css'
import logo from './assets/logo192.png'

export default function App() {
  return (
    <div className='app'>
      <img src={logo} alt="logo" />
      <div className='wrapper'>
        Welcome to the react app created by the CLI developed by Deng Wenjie
      </div>
      <div className='wrapper'>
        If you want to know me this is my github:
        <a 
          className='info'
          href="https://github.com/dengwenj"
          target='_blank' 
          rel="noreferrer"
        >
          dengwenj
        </a>
      </div>
      <div className='wrapper'>
        我是中国人🇨🇳，如果你也是，我叫邓文杰 (dèng wén jié). 你也可以在 
        <a
          className='info' 
          href="https://weibo.com/u/6575004852" 
          target='_blank' 
          rel="noreferrer"
        >
          微博
        </a>和
        <a
          className='info' 
          href="https://www.zhihu.com/people/ni-shuo-bu-zou-de-98" 
          target='_blank' 
          rel='noreferrer'
        >
          知乎
        </a>上找到我
      </div>
    </div>
  )
}
