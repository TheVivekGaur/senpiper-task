import React from "react";
import { Table} from 'reactstrap';

const SubmissionTable = () => {

const submissionData = JSON.parse(localStorage.getItem('submissions'));

// console.log(submissionData);
const submissionsArray = Object.values(submissionData);

// console.log(submissionsArray[1].beverage)

 return (
  <div>
  {
     submissionsArray.map((submission, index) =>{
      const {customerName, email, phone} = submission;
      // for( let i=index; i< submission.length[index]; i++ ){

      // }
      console.log(customerName)
      return(
       <Table striped bordered hover>
       <thread>
         <tr>
           <th>Form Name</th>
           <th>Phone Field</th>
           <th>Email Field</th>
           <th>Name Field</th>
         </tr>
       </thread>
       <tbody>
       <tr>
       <td>1</td>
       <td>{phone}</td>
       <td>{email}</td>
       <td>{customerName}</td>
       </tr>
       </tbody>
       </Table>
      )
     })
  }
  </div>
 )
 
   
}

export default SubmissionTable