import React, {useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import './App.css';
import users from './data/data.json';
import Menu from './Components/Menu/Menu';
import User from './Components/User/User';

function App() {
  const [member, setMember] = useState([]);
  const [alert, setAlert] = useState({});
  const [showSalary, setShowSalary] = useState(false);
  const [allSalary, setAllSalary] = useState(0);

  const handleAdd = (user) => {
    if (member.includes(user.id)) {
      setAlert({
        message: 'Already in the list',
        variant: 'danger',
        id: user.id,
      });
    } else {
      const newList = [...member, user.id];
      setMember(newList);
      setAlert({
        message: 'Added Successfully',
        variant: 'success',
        id: user.id,
      });

      const newAllSalary = [parseInt(allSalary) + parseInt(user.annual_salary)];
      setAllSalary(newAllSalary);
    }
    window.setTimeout(() => {
      setAlert({visible: false});
    }, 2000);
  };

  const handleDelete = (user) => {
    if (member.includes(user.id)) {
      const newList = member.filter((single) => single !== user.id);
      setMember(newList);
      setAlert({
        message: 'Deleted Successfully',
        variant: 'success',
        id: user.id,
      });
      const newAllSalary = [parseInt(allSalary) - parseInt(user.annual_salary)];
      setAllSalary(newAllSalary);
    } else {
      setAlert({
        message: 'Member does not exist',
        variant: 'danger',
        id: user.id,
      });
    }
    window.setTimeout(() => {
      setAlert({visible: false});
    }, 2000);
  };

  const handleShowSalary = () => {
    setShowSalary(true);
    window.setTimeout(() => {
      setShowSalary({visible: false});
    }, 2000);
  };

  return (
    <div className='App'>
      <Menu
        member={member}
        alert={alert}
        handleShowSalary={handleShowSalary}
        allSalary={allSalary}
      ></Menu>
      {/* {
        <Alert fixed='top' variant={alert.variant}>{alert.message}</Alert>
      } */}
      <Container className='d-flex'>
        <Row>
          {users.map((user) => (
            <User
              user={user}
              key={user.id}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              member={member}
              alert={alert}
            ></User>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
