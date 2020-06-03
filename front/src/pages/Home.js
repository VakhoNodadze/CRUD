import React, {useState} from 'react';
import Employees from "./Employees";
import Grid from '../components/Grid';
import Container from '../components/Container';
import Button from "../components/Button";
import NewEmployeeModal from "../components/shared/modals/NewEmployeeModal";
import gql from "graphql-tag";
import {useMutation, useQuery} from "react-apollo-hooks";
import {capitalizeFirstLetter} from "../utils/helpers";
import useToasts from "../customHooks/useToasts";


const GET_EMPLOYEES = gql`
    query  employees{
        employees{
            _id
            firstName
            lastName
            position
            company
            dx_country
            dx_city
        }
    }
`;

const ADD_NEW_EMPLOYEE = gql`
    mutation createEmployee($firstName: String, $lastName: String, $company: String, $position: String, $dx_city: String, $dx_country: String) {
        createEmployee(firstName: $firstName, lastName: $lastName, company: $company, position: $position, dx_city: $dx_city, dx_country: $dx_country) {
            _id
            firstName
            lastName
            position
            company
            dx_city
            dx_country
        }
    }
`;

const Home = () => {
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);
    const [add_new_employee, { data }] = useMutation(ADD_NEW_EMPLOYEE);
    const [addToast, renderToasts] = useToasts();
    const { data: employeesRes, refetch: refetchEmployees} = useQuery(GET_EMPLOYEES, { fetchPolicy: 'network-only' });
    const emloyeeArray = employeesRes && employeesRes.employees;
    const handleEmployeeAdd = async values => {
        try {
            await add_new_employee({
                variables: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    position: values.position,
                    company: values.company,
                    dx_city: values.dx_city,
                    dx_country: values.dx_country
                }
            })
            refetchEmployees()
        } catch (error) {
            addToast('error', `${capitalizeFirstLetter(error.message.replace('GraphQL error: ', ''))}`)
        }
    }
  
  const renderNewEmployeeModal = () => (
    <NewEmployeeModal
      isOpen={addEmployeeModal}
      onClose={() => setAddEmployeeModal(false)}
      handleSubmit={handleEmployeeAdd}
    />
  );
  return (
    <Container>
    {renderToasts()}
      {addEmployeeModal && renderNewEmployeeModal()}
      <Grid>
        <Grid.Item xs={6}>
          <h1>Employees</h1>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Button onClick={() => setAddEmployeeModal(true)}>ADD EMPLOYEES</Button>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs={12}>
          <Employees emloyeeArray={emloyeeArray} />
        </Grid.Item>
      </Grid>
      {}
    </Container>
  );
};

export default Home;
