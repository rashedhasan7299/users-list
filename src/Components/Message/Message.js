import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = (props) => {
    return (
        <div>
            
            <Alert fixed='bottom' variant={props.alert.variant}>{props.alert.message}</Alert>
            
        </div>
    );
};

export default Message;