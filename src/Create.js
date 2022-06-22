import { useState } from "react";
import SignaturePad from 'react-signature-canvas'

const Create = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [one, setOne] = useState('');
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);

  let sigPad = {}

  const clear = () => {
    sigPad.clear()
  }

  const trim = () => {
    setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL('image/png'));
  }

  const onSubmit = () => {
    console.log(trimmedDataURL);

    // fetch('backend url', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(email)
    // }).then(() => {
    //   console.log('new patient info added');
    // })
  }

  return (
    <div className="create">
      <h2>Medical Form</h2>
      
        <label>Email</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <label>First Name</label>
          <input 
            type="text" 
            required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input 
            type="text" 
            required 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <label>Date of birth</label>
        <input 
          type="text" 
          required 
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <div>
          <label>One</label>
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={one === 'yes'}
              onChange={(e) => setOne(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={one === 'no'}
              onChange={(e) => setOne(e.target.value)}
            /> No
          </div>
        </div>

        {/* Sign Section Start */}
        
        <div className="container">
          <label>Signature</label>
          <div className="sigContainer">
            <SignaturePad canvasProps={{className:sigPad}}
              ref={(ref) => { sigPad = ref }} />
            </div>
          <div className="radio-buttons">
            <button className="buttons" onClick={(e) => clear()}>
              Clear
            </button>
            <button className="buttons" onClick={(e) => trim()}>
              Trim
            </button>
          </div>
          <img className="sigImage" alt=""
            src={trimmedDataURL} />
        </div>
        {/* Sign Section End */}

        <button className="submit-button" onClick={(e) => onSubmit()}>Submit</button>
      
    </div>
  );
}
 
export default Create;