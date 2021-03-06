import React from 'react'
import Grid from "../components/primitives/Grid"

import Employee from "../components/shared/employee/Employee"

const Employees = ({emloyeeArray, handleEmployeeRemove, handleEmplyeeUpdate}) => {



  return (
    <Grid style={{width: '100%'}} spacing={4}>
      {emloyeeArray && emloyeeArray.map((employee) => (
        <Grid.Item xs={12} md={6} lg={4} key={employee._id}>
          <Employee 
            employee={employee} 
            handleEmployeeRemove={handleEmployeeRemove} 
            handleEmplyeeUpdate={handleEmplyeeUpdate} />
        </Grid.Item>
      ))}
    </Grid>
  )
}

export default Employees
