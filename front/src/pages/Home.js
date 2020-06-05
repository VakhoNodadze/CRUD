import React, {useState} from 'react';
import Employees from "./Employees";
import Grid from '../components/Grid';
import Container from '../components/Container';
import Button from "../components/Button";
import EmployeeFormModal from "../components/shared/modals/EmployeeFormModal";
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
            location
        }
    }
`;

const ADD_NEW_EMPLOYEE = gql`
    mutation createEmployee($firstName: String, $lastName: String, $company: String, $position: String, $location: String) {
        createEmployee(firstName: $firstName, lastName: $lastName, company: $company, position: $position, location: $location) {
            _id
            firstName
            lastName
            position
            company
            location
        }
    }
`;

const REMOVE_EMPLOYEE = gql `
    mutation removeEmployee($id: ID!){
        removeEmployee(id: $id){
            success
        }
    }
`

const UPDATE_EMPLOYEE = gql `
    mutation updateEmployee($id: ID!, $firstName: String, $lastName: String, $company: String, $position: String, $location: String){
        updateEmployee(id: $id, firstName: $firstName, lastName: $lastName, company: $company, position: $position, location: $location){
            _id
            firstName
            lastName
            position
            company
            location
        }
    }
`

const Home = () => {
    const [addEmployeeModal, setAddEmployeeModal] = useState(false);
    const [add_new_employee] = useMutation(ADD_NEW_EMPLOYEE);
    const [remove_employee] = useMutation(REMOVE_EMPLOYEE);
    const [update_employee] = useMutation(UPDATE_EMPLOYEE);
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
                    location: values.location
                }
            })
            refetchEmployees()
        } catch (error) {
            addToast('error', `${capitalizeFirstLetter(error.message.replace('GraphQL error: ', ''))}`)
        }
    }

    const handleEmployeeRemove = async id => {
        try {
            await remove_employee({
                variables: {
                    id
                }
            })
            refetchEmployees()
        } catch (error) {
            addToast('error', `${capitalizeFirstLetter(error.message.replace('GraphQL error: ', ''))}`)
        }
    }
    const handleEmplyeeUpdate = async (values, id) => {
        try {
            await update_employee({
                variables: {
                    id,
                        firstName: values && values.firstName,
                    lastName: values && values.lastName,
                    position: values && values.position,
                    company: values && values.company,
                    location: values && values.location
                }
            })
            refetchEmployees()
        } catch (error) {
            addToast('error', `${capitalizeFirstLetter(error.message.replace('GraphQL error: ', ''))}`)
        }
    }
  
  const renderNewEmployeeModal = () => (
    <EmployeeFormModal
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
        <Grid.Item xs={6} style={{justifyContent: 'center'}}>
          <Button onClick={() => setAddEmployeeModal(true)}
                  circular
                  color="primary"
                  size="mini"
          >ADD EMPLOYEES</Button>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs={12}>
          <Employees emloyeeArray={emloyeeArray} handleEmployeeRemove={handleEmployeeRemove} handleEmplyeeUpdate={handleEmplyeeUpdate}/>
        </Grid.Item>
      </Grid>
      {}
    </Container>
  );
};

export default Home;
