// import React from 'react'

// const Index = () => {
//     const [faren, updateFaren] = React.useState(0)
//     const [celsius, updateCels] = React.useState(0)

//     const updateCelsius = event=> updateCels(
//         parseInt(event.target.value)
//       )

//     const updateFarenheit = event => updateFaren(
//         parseInt(event.target.value)

//       )
//       const convert =()=>{
//         if(faren){
//             const updateFarenheit = event => updateFaren(
//                 parseInt(event.target.value)

//               )

//         }
//         if(celsius){

//         }
//       }

//   return (
//     <div className='degree'>

//           <input
//             type = "number"
//             value = {faren}
//             onChange = {updateFarenheit} >
//           </input>

//           <input
//             type = "number"
//             value = {celsius}  onChange = {updateCelsius}>

//           </input>

//           <button type="button" onClick={convert }>Submit</button>
//     </div>
//   )
// }

// export default Index;

import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleConvert = () => {
    if (celsius !== "") {
      const fahrenheitValue = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue);
    } else if (fahrenheit !== "") {
      const celsiusValue = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(celsiusValue);
    } else if (celsius === "" || fahrenheit === "") {
      alert("Please fill inputs");
    } else if (celsius !== "" || fahrenheit) {
      const celsiusValue = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(celsiusValue);
    }
  };

  return (
    <div>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={(event) => setCelsius(event.target.value)}
        />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={(event) => setFahrenheit(event.target.value)}
        />
      </label>
      <br />
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default TemperatureConverter;
