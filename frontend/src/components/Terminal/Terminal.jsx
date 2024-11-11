import React, { useEffect, useRef } from 'react'
import {Terminal} from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'

const BrowserTerminal = () => {
  const terminalRef = useRef(null)

  useEffect(()=>{
    const xterm = new Terminal();
    xterm.open(terminalRef.current);

    xterm.write("Welcome to web ide");
    return ()=>xterm.dispose();
  },[])
  return (
    <div ref={terminalRef} className='w-full h-full'/>
  )
}

export default BrowserTerminal