import React from "react";
import './SubmissionTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

const SubmissionTable = () => {

const submissionData = JSON.parse(localStorage.getItem('submissions'));

const submissionsArray = Object.values(submissionData);

 return (
  <div className="table">
<Table> 
  <thead>
    <tr className="table-rows">
    <th>Form Name</th>
    <th>Email Field</th>
    <th>Phone Field</th>
    <th>Name Field</th>
    </tr>
    </thead>
    <tbody>
  {
     submissionsArray.map( (submission, index) =>(
        <tr key={index}>
        <td>Aromatic Bar</td>
        <td>{submission.email}</td>
        <td>{submission.phone}</td>
        <td>{submission.customerName}</td>
        </tr>   
     ))
    }
    </tbody>
    </Table>
  </div>
 )
}

export default SubmissionTable