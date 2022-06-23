import { useState } from "react";
import SignaturePad from 'react-signature-canvas'

const Create = () => {
  // set default
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [one, setOne] = useState('');
  const [trimmedDataURL, setTrimmedDataURL] = useState(null); // image of sign

  let sigPad = {}

  const clear = () => {
    sigPad.clear()
  }

  const trim = () => {
    setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL('image/png'));
  }

  const onSubmit = () => {
    const signURL = sigPad.getTrimmedCanvas().toDataURL('image/png')
    const postData = {
      'email': email,
      'firstName': firstName,
      'lastName': lastName,
      'dob': dob,
      'one': one,
      'sign': signURL
    };

    console.log(postData);
    fetch('https://webhook.site/a934422b-74bb-4f61-8768-6df4640bc016', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData)
    }).then(() => {
      console.log('new patient info added');
    })
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
        <div> {/* radio button start */}
          <label>One</label> {/* change label here for radio button questions */}
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
            <input
              className="radio"
              type="radio"  
              value='maybe'
              checked={one === 'maybe'} // 1 === '1'
              onChange={(e) => setOne(e.target.value)}
            /> maybe
          </div>
        </div> {/* radio button end */}

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
            {/* <button className="buttons" onClick={(e) => trim()}>
              Set Signature
            </button> */}
          </div>
          {/* <img className="sigImage" alt=""
            src={trimmedDataURL} /> */}
        </div>
        {/* Sign Section End */}

        <button className="submit-button" onClick={(e) => onSubmit()}>Submit</button>
      
    </div>
  );
}
 
export default Create;