import React, {useState} from 'react';
import FormData from './FormData';
import SubmissionTable  from './SubmissionTable';

function App() {
  const [values, setValues] = useState({
    customerName: ' ',
    email: ' ',
    phone: '',
    service:' ',
    beverage:' ',
    clean: ' ',
    experience:' '

  });
  const [counter, setCounter] = useState(1);
  const [ errors, setErrors] =useState({});

  const validate = values => {
    const{ customerName, email, phone} = values
    const errors = {};

    if(!customerName) errors.customerName= "customerName field cannot be blank";
    if(customerName.trim().length < 5) errors.customerName= 'customerName cannot be too short'
    if(!email) errors.email= alert("email field cannot be blank");
    if(!phone) errors.phone= "phoneNumber field  cannot be blank";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    const originalData = JSON.parse(localStorage.getItem('submissions')) || {};
    localStorage.setItem('submissions', JSON.stringify({
      ...originalData,
    [`submission_${counter}`]: values
    }))
    setCounter(counter + 1);
  }
  return (
    <div>
    <h1> Aromatic Bar</h1>
    <FormData
    setValues= {setValues}
    handleSubmit={handleSubmit}
    fields={values}
    />
    <SubmissionTable />
    </div>
  );
}

export default App;
