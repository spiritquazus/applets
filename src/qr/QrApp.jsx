import { useState, useEffect} from 'react'
import './QrApp.css'

function QrApp() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState(""); //input
  const [size, setSize] = useState(100); //size by pixel
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(()=>{
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]) //use effect triggers when one of the following variables are changed.

  function handleClick() {
    setWord(temp); //on click, change "word" state to the value from temp.
  }

  return (
    <div className="App">

      <h1>QR Code Generator</h1>
      <div className="input-box">

        <div className="gen aligned">
          <label htmlFor="qrInput">Text to QR Code:</label>
          <input type="text" id="qrInput" onChange={(e) => {setTemp(e.target.value)}} placeholder="Enter your text" />
          <button onClick={handleClick}>Generate</button>
        </div>
      
        <div className="extra aligned">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => { setBgColor(e.target.value.substring(1))}} />
          <h5>Dimensions:</h5>
          <input type="range" min="50" max="600" value={size} onChange={(e) => {setSize(e.target.value)}}/>
        </div>
        
      </div> 

      <div className="output-Box">
        <img src={qrCode} alt=""/>
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>

    </div>
  )
}

export default QrApp
