import React, {useState} from 'react';
import Employees from "./Employees";
import Grid from '../components/Grid';
import Container from '../components/Container';
import Button from "../components/Button";

const Home = () => {
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);
  return (
    <Container>
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
          <Employees addEmployeeModal={addEmployeeModal} setAddEmployeeModal={setAddEmployeeModal}/>
        </Grid.Item>
      </Grid>
      {}
    </Container>
  );
};

export default Home;
