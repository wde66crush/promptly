import '../styles/globals.css';
import React, {ReactNode} from 'react';
import Nav from '../components/Nav'

export const metadata = {
  title: "Promptly",
  description: "Get your prompts right here"
}
interface LayoutProps {
  children: ReactNode;
}


const Rootlayout = ({children} : LayoutProps)  => {
  return (
    <html lang="en">
      <body>
        <div className = "main">
          <div className = "gradient" />
        </div>
        <main className = "app">
          
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default Rootlayout;