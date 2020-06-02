import React, {useState} from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import Employee from "../components/shared/employee/Employee";

const GET_EMPLOYEES = gql`
    query  employees{
        employees{
            _id
            first_name
            last_name
            email
            address
            create_date
        }
    }
`;

const Employees = ({addEmployeeModal, setAddEmployeeModal}) => {

  const { data: employeesRes} = useQuery(GET_EMPLOYEES, { fetchPolicy: 'network-only' });
  const emloyeeArray = employeesRes && employeesRes.employees;


  return (
    <>
      {emloyeeArray && emloyeeArray.map((employee) => (
        <Employee {...employee} employee={employee} addEmployeeModal={addEmployeeModal} setAddEmployeeModal={setAddEmployeeModal}/>
      ))}
    </>
  );
};

export default Employees;
