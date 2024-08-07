import {useState} from 'react'
import QrApp from './qr/QrApp.jsx'
import BmiApp from './bmi/BmiApp.jsx'

const App = () => {
    const appName = [
        {"QR Code Generator": QrApp},
        {"BMI Calculator": BmiApp}
    ]

    //const [appNum, setAppNum] = useState(appName.length) //for later use,
    
    
    // Generate gallery items based on the static appName array
    const galleryItems = appName.map((item, index) => { //in react, map can be used to "populate".
        const appTitle = Object.keys(item)[0]
        const AppComponent = item[appTitle]
        const row = Math.round(index/10) + 1
        const col = index%4 +1

        return (
            <div key={index} className="gallery-item" style={{gridRow: row + "/ span 1", gridColumn: col}}>
                <p>App {index + 1} - {appTitle}</p>
                < AppComponent />
            </div>
        )
    });

    return (
        <>
            <div className="appsPreview">
                <div style={{gridRow: 1, gridColumn: 1}}>
                    <h1 style={{color: "black"}}><img/>DXM Applets</h1>
                    <h3 style={{color: "black"}}>Powered by React.js <img id="reactLogo" src="https://cdn.worldvectorlogo.com/logos/react-2.svg"></img></h3>
                </div>   
                <div className="appGallery">
                    {galleryItems}
                </div>
            </div>
        </>
    )
}


export default App