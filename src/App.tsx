import React from 'react'
import Child from './Child'
import Addtion from './Addtion'
import EmployeeCard from './EmployeeCard';

function App() {
  const emp = {
    Name:"adithya",
    id:123,
    salary:1234453,
    city:"hyd"    
  };

  return (
    <>
      <Child name = "Adithya" age={23}></Child>
      <Addtion number1={2} number2={4}></Addtion>
      <EmployeeCard emp={emp}></EmployeeCard>
    </>
  )
}

export default App
