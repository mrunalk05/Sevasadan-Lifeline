import react, { useState } from 'react';
// import Link from 'react-router-dom';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { useEffect } from 'react';
import { allUser } from '../services/api';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const Allusers= ()=>{

    const [user, setuser]= useState([]);

    useEffect(()=>{
        getAllUsers();
    }, []);

    const getAllUsers=async()=>{
       const res= await allUser();
       console.log(res.data);
       setuser(res.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {/* {users.map((user) => ( */}


                {
                    user.map((i)=>{
                        <TRow>
                       <TableCell>{i.id}</TableCell> {/* change it to user.id to use JSON Server */}
                         <TableCell>{i.name}</TableCell>
                         <TableCell>{i.company}</TableCell>
                         <TableCell>{i.quantity}</TableCell>
                         <TableCell>{i.disease}</TableCell>
                         <TableCell>
                             <Button color="primary" variant="contained" style={{marginRight:10}} component to={`/edit/`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                             <Button color="secondary" variant="contained" onClick>Delete</Button> {/* change it to user.id to use JSON Server */}
                         </TableCell>
                     </TRow>
                    })
                }


               
                    // <TRow>
                    //     <TableCell></TableCell> {/* change it to user.id to use JSON Server */}
                    //     <TableCell></TableCell>
                    //     <TableCell></TableCell>
                    //     <TableCell></TableCell>
                    //     <TableCell></TableCell>
                    //     <TableCell>
                    //         <Button color="primary" variant="contained" style={{marginRight:10}} component to={`/edit/`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                    //         <Button color="secondary" variant="contained" onClick>Delete</Button> {/* change it to user.id to use JSON Server */}
                    //     </TableCell>
                    // </TRow>
               
            </TableBody>
        </StyledTable>
    )
}

export default Allusers;