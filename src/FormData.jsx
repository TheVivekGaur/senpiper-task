 import React from 'react';
 // import  './FormData.css';


 const FormData = ({fields,setValues, handleSubmit}) => {
  return (
   <div className="container">
    <form name="Aromatic Bar" onSubmit={(e)=> handleSubmit(e)}> 
      <div className="form-group">
      <label htmlFor="customer-name">Customer Name</label>
      <input 
       type="text"
       value={fields.customerName}
       onChange={(e) => setValues({...fields, customerName:e.target.value}) }
       placeholder="Enter your name here"
       id="customer-name"
       required 
      />
      </div>
      <div className="form-group">
      <label htmlFor="email">Email</label>
      <input 
       type="email"
       value={fields.email}
       onChange={(e)=> setValues({...fields, email:e.target.value})}
       placeholder="Enter your Email here"
       id="email"
       required 
      />
      </div>
      <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input 
       type="tel"
       value={fields.phone}
       onChange={(e)=> setValues({...fields, phone : e.target.value})}
       placeholder="Enter your Phone number here"
       id="phone"
       required 
      />
      </div>
      <div className="form-group">
        <div className="questions-container">
        <p><strong>Question 1: </strong>Please rate the quality of the service you received from your host?
        </p>
        <label htmlFor="Excellent" >
        <input 
         type="radio"
         value="Excellent"
         name="service"
         checked= {fields.service === 'Excellent'}
         onChange={(e) => setValues({...fields, service: e.currentTarget.value}) }
        />
        Excellent
        </label>
        <label htmlFor="Good" >
        <input 
         type="radio"
         value="Good"
         name="service"
         checked= {fields.service === 'Good'}
         onChange={(e) => setValues({...fields, service: e.currentTarget.value}) }
        />
        Good
        </label>
        <label htmlFor="Fair" >
        <input 
         type="radio"
         value="Fair"
         name="service"
         checked= {fields.service === 'Fair' || ''}
         onChange={(e) => setValues({...fields, service: e.currentTarget.value}) }
        />
        Fair
        </label>
        <label htmlFor="Bad" >
        <input 
         type="radio"
         value="Bad"
         name="service"
         checked= {fields.service === 'Bad' || ''}
         onChange={(e) => setValues({...fields, service: e.currentTarget.value}) }
        />
        Bad
        </label>
        </div>
               <div className="questions-container">
        <p><strong>Question 2: </strong>Please rate the quality of your beverage?
        </p>
        <label htmlFor="Excellent" >
        <input 
         type="radio"
         value="Excellent"
         name="beverage"
         checked= {fields.beverage === 'Excellent' || ''}
         onChange={(e) => setValues({...fields, beverage: e.currentTarget.value })}
        />
        Excellent
        </label>
        <label htmlFor="Good" >
        <input 
         type="radio"
         value="Good"
         name="beverage"
         checked= {fields.beverage === 'Good' || ''}
         onChange={(e) => setValues({...fields, beverage: e.currentTarget.value })}
        />
        Good
        </label>
        <label htmlFor="Fair" >
        <input 
         type="radio"
         value="Fair"
         name="beverage"
         checked= {fields.beverage === 'Fair' || ''}
         onChange={(e) => setValues({...fields, beverage: e.currentTarget.value })}
        />
        Fair
        </label>
        <label htmlFor="Bad" >
        <input 
         type="radio"
         value="Bad"
         name="beverage"
         checked= {fields.beverage === 'Bad' || ''}
         onChange={(e) => setValues({...fields, beverage: e.currentTarget.value })}
        />
        Bad
        </label>
        </div>
        <div className="questions-container">
        <p><strong>Question 3: </strong>Was our restaurant clean?
        </p>
        <label htmlFor="Excellent" >
        <input 
         type="radio"
         value="Excellent"
         name="clean"
         checked={fields.clean === 'Excellent'}
         onChange={(e) => setValues({ ...fields, clean: e.currentTarget.value})}
        />
        Excellent
        </label>
        <label htmlFor="Good" >
        <input 
         type="radio"
         value="Good"
         name="clean"
         checked={fields.clean === 'Good'}
         onChange={(e) => setValues({...fields,  clean: e.currentTarget.value})}
        />
        Good
        </label>
        <label htmlFor="Fair" >
        <input 
         type="radio"
         value="Fair"
         name="clean"
         checked={fields.clean === 'Fair'}
         onChange={(e) => setValues({ ...fields, clean: e.currentTarget.value})}
        />
        Fair
        </label>
        <label htmlFor="Bad" >
        <input 
         type="radio"
         value="Bad"
         name="clean"
         checked={fields.clean === 'Bad'}
         onChange={(e) => setValues({ ...fields, clean: e.currentTarget.value})}
        />
        Bad
        </label>
        </div>
        <div className="questions-container">
        <p><strong>Question 4: </strong>Please rate your overall dining experience?
        </p>
        <label htmlFor="Excellent" >
        <input 
         type="radio"
         value="Excellent"
         name="experience"
         checked={fields.experience === 'Excellent'}
         onChange={(e) => setValues({ ...fields, experience: e.currentTarget.value})}
        />
        Excellent
        </label>
        <label htmlFor="Good" >
        <input 
         type="radio"
         value="Good"
         name="experience"
         checked={fields.experience === 'Good'}
         onChange={(e) => setValues({ ...fields, experience: e.currentTarget.value})}
        />
        Good
        </label>
        <label htmlFor="Fair" >
        <input 
         type="radio"
         value="Fair"
         name="experience"
         checked={fields.experience === 'Fair'}
         onChange={(e) => setValues({...fields,  experience: e.currentTarget.value})}
        />
        Fair
        </label>
        <label htmlFor="Bad" >
        <input 
         type="radio"
         value="Bad"
         name="experience"
         checked={fields.experience === 'Bad'}
         onChange={(e) => setValues({ ...fields, experience: e.currentTarget.value})}
        />
        Bad
        </label>
        </div>

      </div>
    <button type="submit">Submit</button>
    </form>
   </div>
  )
 }

 export default FormData
