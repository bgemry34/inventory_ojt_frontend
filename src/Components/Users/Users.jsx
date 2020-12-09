import { Button, 
    Container, 
    Grid,
    Paper, 
    TextField,
    TableBody, 
    TableRow, 
    TableCell,
    Table,
    TableContainer,
    TableHead,
    Dialog,
DialogTitle,
DialogContent,
DialogActions,
} from '@material-ui/core';
import React, {useState, useEffect} from 'react';

import AddIcon from '@material-ui/icons/Add';

import {getUsers, registerUser} from './../../Api/users'

function Users() {

    useEffect(()=>{
        const fetchApi = async () =>{
            const {data} = await getUsers();
            setUsers(data.users)
        }

        fetchApi();
    }, [])

    const [users, setUsers] = useState([]);


    const [form, setForm] = useState({
        email:'',
        password:'',
        isProcessing:false
    });

    const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value});
    }

    const [createModal, setCreateModal] = useState(false);
 
    const register = async (e) =>{
        e.preventDefault();
        try{
            setForm({...form, isProcessing:true})
            const res = await registerUser(form);
            if(res.status===200){
                setCreateModal(false);
                const {data} = await getUsers();
                setUsers(data.users)
                setForm({...form, isProcessing:false})
            }else{
                setCreateModal(false);
                setForm({...form, isProcessing:false})
            }
            console.log(res);
        }catch(error){
            console.log(error)
            setForm({...form, isProcessing:false});
        }
    }

    //Dialogs
    const addDialog = (
        <Dialog
          open={createModal}
          onClose={()=>setCreateModal(false)}
          scroll="body"
          fullWidth
        >
          <form onSubmit={register} method="post">
            <DialogTitle className="mt-2">Add user</DialogTitle>
            <DialogContent>
                <Container>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                </Container>
            </DialogContent>
            <DialogActions>
                <Container>
                        <Button
                        id='addBtn'
                        variant="contained"
                        color="primary"
                        style={{float:'right', marginRight:'15px', marginBottom: '5px'}}
                        endIcon={<AddIcon />}
                        size="large"
                        type="submit"
                        disabled={form.isProcessing}
                        >
                            Add User
                        </Button> 
                </Container>
            </DialogActions>
          </form>
        </Dialog>
    );

    return (
        <div>
           <Container>
           <Grid container style={{marginTop:'20px'}}>
                <Grid item xs={5}>
                </Grid>
                <Grid item xs={7}>
                    <div style={{float:'right', marginTop: '15px'}}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>setCreateModal(true)}
                        style={{marginLeft:'10px', backgroundColor:'#2ecc71'}}
                        endIcon={<AddIcon />}
                    >
                        Add User
                    </Button>
                    </div>
                </Grid>
            </Grid>
            <Grid container style={{marginTop:'30px'}}>
                <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="center">Created Date</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user=>(
                                <TableRow key={user.email}>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell align="center">
                                        {user.create_date}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
           </Container>
           {addDialog}
        </div>
    )
}

export default Users
