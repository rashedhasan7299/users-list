import React from 'react';
import {Card, ListGroup, ListGroupItem, Button, Alert} from 'react-bootstrap';

const User = (props) => {
  const {
    first_name,
    last_name,
    email,
    gender,
    annual_salary,
    photo,
    id,
  } = props.user;
  const full_name = first_name + ' ' + last_name;
  const handleAdd = props.handleAdd;
  const handleDelete = props.handleDelete;
  props.user.full_name = full_name;
  // const member = props.member;
  // console.log(search);

  return (
    <Card className='mx-auto my-4' style={{width: '18rem'}}>
      <Card.Img variant='top' src={photo} />
      <Card.Body>
        <Card.Title variant='primary'>{full_name}</Card.Title>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Email: {email}</ListGroupItem>
        <ListGroupItem>Gender = {gender}</ListGroupItem>
        <ListGroupItem>Annual Salary: {annual_salary}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button
          className='mb-1'
          onClick={() => {
            handleAdd(props.user);
          }}
          variant='primary'
        >
          Add as Member
        </Button>
        <Button
          className='mb-3'
          onClick={() => {
            handleDelete(props.user);
          }}
          variant='danger'
        >
          Delete Member
        </Button>
        {id === props.alert.id && (
          <Alert variant={props.alert.variant}>{props.alert.message}</Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default User;
