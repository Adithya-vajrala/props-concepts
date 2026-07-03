import React from 'react'
import Child from './Child'
import Addtion from './Addtion'
import EmployeeCard from './EmployeeCard';
import EmployeeArray from './EmployeeArray';

function App() {
  const emp = {
    Name:"adithya",
    id:123,
    salary:1234453,
    city:"hyd"    
  };

  const emplArray = [
    {name:"Adithya",id:1,salary:25000,city:"VTZ"},
    {name:"Bobby",id:2,salary:50000,city:"NRT"},
    {name:"vinay",id:3,salary:510000,city:"Amalapuram"},
    {name:"Anil",id:4,salary:5430000,city:"Hyderabad"},
    {name:"pavan",id:5,salary:6750000,city:"kakainada"}
  ]

  return (
    <>
      <Child name = "Adithya" age={23}></Child>
      <Addtion number1={2} number2={4}></Addtion>
      <EmployeeCard emp={emp}></EmployeeCard>

      <h1>All Employeee</h1>
      {
        emplArray.map((empl)=>(
          <EmployeeArray empl={empl}></EmployeeArray>
        ))
      }
    </>
  )
}

export default App
