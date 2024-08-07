import React, {useState} from 'react';
import './BmiCalculator.css' //CSS in react is always directly linked to the .jsx, not html.

const BmiCalculator = () => {
    const [weight, setWeight] = useState("0");
    const [height, setHeight] = useState("0");
    const [bmi, setBmi] = useState(null);
    const [bmiStatus, setBmiStatus] = useState("");

    const calculateBMI = () => {
        if (weight <= 0 || height <= 0){
            alert('Please enter valid height and weight.')
            return;
        }

        const heightInMeters = parseFloat(height) / 100;
        const bmiValue = (parseFloat(weight) / (heightInMeters ** 2)).toFixed(2); // weight div by height^2

        setBmi(bmiValue)

        switch (true) {
            case bmiValue < 16:
                setBmiStatus("Severely Underweight");
                break;
            case bmiValue < 18.5:
                setBmiStatus("Underweight");
                break;
            case bmiValue < 24.9:
                setBmiStatus("Normal Weight");
                break;
            case bmiValue < 29.9:
                setBmiStatus("Overweight");
                break;
            case bmiValue < 34.9:
                setBmiStatus("Slight Obesity (Class I)");
                break;
            case bmiValue < 39.9:
                setBmiStatus("Severe Obesity (Class II)");
                break;
            default:
                setBmiStatus("Very Severe Obesity (Class III)");
                break;
        }
    }

    return (
        <>
        <div className="container">

            <h1>BMI Calculator</h1>
            <div className="input-group">
                <label>
                    Weight (kg):
                    <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Enter your weight" /> {/* Input in react is self closing */}
                </label>
            </div>
            <div className="input-group">
                <label>
                    Height (cm):
                    <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="Enter your height" />
                </label>
            </div>
            <button onClick={calculateBMI}>Calculate</button>
            {bmi && (<div className="result"><h3>Your BMI: {bmi}</h3><h3>Status: {bmiStatus}</h3></div>)} {/* && conditional makes sure this div only appears if the condition is fulfilled. */}
        </div>
        </>
    )

}

export default BmiCalculator