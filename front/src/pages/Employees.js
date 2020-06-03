import React, {useState} from 'react';
import { useQuery, useMutation} from 'react-apollo-hooks';
import gql from 'graphql-tag';
import useToasts from '../customHooks/useToasts';
import { capitalizeFirstLetter } from '../utils/helpers';

import Employee from "../components/shared/employee/Employee";


const Employees = ({emloyeeArray}) => {




  return (
    <>
      {emloyeeArray && emloyeeArray.map((employee) => (
        <Employee {...employee} employee={employee} />
      ))}
    </>
  );
};

export default Employees;
