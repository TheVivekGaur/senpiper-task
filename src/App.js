import React, {useState} from 'react';
import FormData from './FormData';
import { Tabs, Tab, AppBar} from "@material-ui/core"
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
  const [ errors, setErrors] =useState({
    customerName: ' ',
    email: ' ',
    phone: ' '
  });

  const [selectedTab , setSelectedtab] = useState(0);

const handleChange = (event , newValue) => {
  setSelectedtab(newValue)
}

   const validate = values => {
    const{ customerName, email, phone} = values
    const errors = {};

    if(!customerName) errors.customerName= 'customerName field cannot be blank';
    if(customerName.trim().length < 5) errors.customerName= 'customerName cannot be too short'
    if(!email) errors.email= 'email field cannot be blank';
    if(!phone) errors.phone= 'phoneNumber field  cannot be blank';
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
    <>
    <AppBar>
    <Tabs value={selectedTab} onChange={handleChange}>
    <Tab label="Form" />
    <Tab label="Table"  />
    </Tabs>
     {/* </AppBar><div className="app">
    <h1> Aromatic Bar</h1>
    <FormData
    setValues= {setValues}
    handleSubmit={handleSubmit}
    fields={values}
    />
    <SubmissionTable />
  </div> */}
  </AppBar>
  { selectedTab === 0 && <FormData
     setValues={setValues}
     handleSubmit={handleSubmit}
     fields={values}
     errors={errors}
   />
  }
   { selectedTab === 1 && <SubmissionTable /> }
  </>
  );
}

export default App;
