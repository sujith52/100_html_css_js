import React, { createElement, StrictMode } from 'react'
import createRoot from 'react-dom/client'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Hello />
    </StrictMode>
    
)

function Hello(){
    return(
        <div>
            <h1>Self contained bro </h1>
        </div>
    )
}

function Page(){
  return(
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

function Header(){
  return(
    <header className='flexe'>
        <img src={image} alt="react logo" srcset="" className='imgs' />
        <nav >
          <ul className='navbar'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
}

function Main(){
  return(
    <>
    <h1>Reasons that love react </h1>
      <ol>
        <li>i am exicited about leaning react because it is react</li>
        <li>maybe all the industry is hiring react devs so i followed like a sheep</li>
        <li>may be i can become a react teacher by learning extreme into it and placing a youtubechannel.</li>
      </ol>
    </>
  )
}

function Footer (){
  return(
    <footer>
        <p>@ 2026 sujith kumar all rights reserved.</p>
      </footer>
  )
}