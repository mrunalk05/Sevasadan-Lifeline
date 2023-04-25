import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Files=()=>{

    const onValueChange = (e) => {
        console.log(e.target)
        // setUser({...user, [e.target.name]: e.target.value})
    }


    return(
        <>
<Container >
            <Typography variant="h4">Add Medicines</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Company</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='company'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Quantity</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='quantity'  id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Disease</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='disease'  id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => console.log("hehe")}>Add User</Button>
            </FormControl>
        </Container>
        </>
    )
}

export default Files;