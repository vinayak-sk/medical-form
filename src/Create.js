import { useState } from "react";
import SignaturePad from 'react-signature-canvas';
import { useHistory } from "react-router-dom";

const Create = () => {
  // set default
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');
  const [nine, setNine] = useState('');
  const [ten, setTen] = useState('');
  const [trimmedDataURL, setTrimmedDataURL] = useState(null); // image of sign
  const history = useHistory();

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
      'two': two,
      'three': three,
      'four': four,
      'five': five,
      'six': six,
      'seven': seven,
      'eight': eight,
      'nine': nine,
      'ten': ten,
      'sign': signURL
    };

    console.log(postData);
    redirectToSuccess();
    // fetch('https://webhook.site/a934422b-74bb-4f61-8768-6df4640bc016', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(postData)
    // }).then(() => {
    //   console.log('new patient info added');
    // });
  }

  const redirectToSuccess = () => {
    history.push('/success');
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
          <label>Do you/they have fever or have you/they felt hot or feverish recently (14-21 days)?</label> {/* change label here for radio button questions */}
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
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Are you/they having shortness of breath or other difficulties breathing?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={two === 'yes'}
              onChange={(e) => setTwo(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={two === 'no'}
              onChange={(e) => setTwo(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Do you/they have a cough?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={three === 'yes'}
              onChange={(e) => setThree(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={three === 'no'}
              onChange={(e) => setThree(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Any other flu-like symptoms, such as gastrointestinal upset, headache or fatigue?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={four === 'yes'}
              onChange={(e) => setFour(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={four === 'no'}
              onChange={(e) => setFour(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Have you/they experienced recent loss of taste or smell?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={five === 'yes'}
              onChange={(e) => setFive(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={five === 'no'}
              onChange={(e) => setFive(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Are you/they in contact with any confirmed COVID-19 positive patients?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={ six === 'yes'}
              onChange={(e) => setSix(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={ six === 'no'}
              onChange={(e) => setSix(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Is your/their age over 60?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={ seven === 'yes'}
              onChange={(e) => setSeven(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={ seven === 'no'}
              onChange={(e) => setSeven(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Do you/they have heart disease, lung disease, kidney disease, diabetes or any auto-immune disorders?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={ eight === 'yes'}
              onChange={(e) => setEight(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={ eight === 'no'}
              onChange={(e) => setEight(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Have you/they traveled in the past 14 days to any regions affected by COVID-19? (as relevant to your location)</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={ nine === 'yes'}
              onChange={(e) => setNine(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={ nine === 'no'}
              onChange={(e) => setNine(e.target.value)}
            /> No
          </div>
        </div> {/* radio button end */}

        <div> {/* radio button start */}
          <label>Have you been tested positive to COVID-19?</label> {/* change label here for radio button questions */}
          <div className="radio-buttons">
            <input
              className="radio"
              type="radio" 
              value='yes'
              checked={ ten === 'yes'}
              onChange={(e) => setTen(e.target.value)}
            /> Yes
            <input
              className="radio"
              type="radio"  
              value='no'
              checked={ ten === 'no'}
              onChange={(e) => setTen(e.target.value)}
            /> No
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