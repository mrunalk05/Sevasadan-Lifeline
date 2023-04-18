import react, { useEffect, useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
// import { useNavigate } from 'router';
import  { Link, useNavigate, useParams } from 'react-router-dom';
import { addUser, allUser, getUser } from '../services/api';

const initialValue = {
    name: '',
    company: '',
    quantity: '',
    disease: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const {id}= useParams;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, company, quantity, disease } = user;
    
    const navigate= useNavigate();

    useEffect(()=>{
        loadDetails();
    });

    const loadDetails=()=>{
        const res= getUser(id);
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        // navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Edit Medicines</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Company</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='company' value={company} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Quantity</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='quantity' value={quantity} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Disease</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='disease' value={disease} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails() }>Edit Medinine</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;