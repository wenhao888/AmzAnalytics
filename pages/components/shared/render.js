import {Form, Header, Button,Message} from "semantic-ui-react";


export const renderInputField=({input, label, placeholder="", type, required=false, meta: {touched, error, warning}}) => (
    <Form.Input {...input} label={label} placeholder={placeholder} type={type} required={required}  />
);