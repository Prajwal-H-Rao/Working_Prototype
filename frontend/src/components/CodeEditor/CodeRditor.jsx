import React from 'react'
import Editor from '@monaco-editor/react'

const CodeRditor = () => {
  function getEditorValue(value,event){
    console.log("Value:",value)
  }
  return (
    <>
    <div className=''>
      <Editor language='javascript' value='start typing' onChange={getEditorValue} height={"60vh"} width={"100%"}/>
    </div>
    </>
  )
}

export default CodeRditor