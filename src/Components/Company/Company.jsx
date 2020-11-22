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
FormControl} from '@material-ui/core';
import React, {useState, useEffect} from 'react';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import {fetchCompany, createCompany, updateCompany, deleteCompany} from './../../Api/company'

function Company() {

    useEffect(()=>{
        const fetchApi = async () =>{
            const {data} = await fetchCompany();
            setCompanies(data);
            console.log(data);
            
        }

        fetchApi();
    }, [])

    const [companies, setCompanies] = useState([]);

    const [isEdit, setIsEdit] = useState(false);

    const [form, setForm] = useState({
        id:'',
        name:'',
        onProcess:false
    });

    const [createModal, setCreateModal] = useState(false);

    const addCompany = async e=> {
        e.preventDefault();
        setForm({...form, onProcess:true});
        try{
            const res = !isEdit ? await createCompany(form.name) : await updateCompany(form.id, form.name);
            if(res.status === 200){
            if(!isEdit){
                setCompanies([...companies, res.data.data])
            }else{
                setCompanies(companies.map(company=>{
                    if(form.id === company.id)
                    company.name = form.name;
                    return company
                }))
            }
            setForm({...form, onProcess:false});
            setCreateModal(false);
            }
        }catch(e){
            console.log(e);
            setForm({...form, onProcess:false});
            setCreateModal(false);
        }
        
    }

    const removeCompany = async id =>{
        const res = await deleteCompany(id);
        if(res.status === 200)
        setCompanies(companies.filter(company=>company.id!==id))
    }

    //Dialogs
    const addDialog = (
        <Dialog
          open={createModal}
          onClose={()=>setCreateModal(false)}
          scroll="body"
          fullWidth
        >
          <form onSubmit={addCompany} method="post">
            <DialogTitle className="mt-2">{isEdit ? 'Edit' : 'Add'} Company</DialogTitle>
            <DialogContent>
                <Container>
                    <FormControl margin="normal" fullWidth>
                        <TextField
                            required
                            name="Name"
                            onChange =  { (e)=>setForm({...form, name:e.target.value}) }
                            value={form.name}
                            label="Name"
                            type="text"
                            variant="filled"
                            fullWidth
                        />
                    </FormControl>
                </Container>
            </DialogContent>
            <DialogActions>
                <Container>
                    {
                        !isEdit ? (
                        <Button
                        id='addBtn'
                        variant="contained"
                        color="primary"
                        style={{float:'right', marginRight:'15px', marginBottom: '5px'}}
                        endIcon={<AddIcon />}
                        disabled={form.onProcess}
                        size="large"
                        type="submit"
                        >
                            Add
                        </Button> 
                        ) : (
                        <Button
                        id='editBtn'
                        variant="contained"
                        color="primary"
                        style={{float:'right', marginRight:'15px', marginBottom: '5px'}}
                        endIcon={<SaveIcon />}
                        disabled={form.onProcess}
                        size="large"
                        type="submit"
                        >
                            Save
                        </Button> 
                        )
                    } 
                </Container>
            </DialogActions>
          </form>
        </Dialog>
    )

    return (
        <div>
           <Container>
           <Grid container style={{marginTop:'20px'}}>
                <Grid item xs={5}>
                        <TextField label="Search..." />
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
                        Add
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
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {companies.map(company=>(
                                <TableRow key={company.id}>
                                    <TableCell>{company.name}</TableCell>
                                    <TableCell align="center">
                                        <EditIcon 
                                        style={{color:'#2ecc71' , 
                                        marginRight:'5px', 
                                        cursor:'pointer'}} 
                                        onClick={()=>{
                                            setIsEdit(true);
                                            setCreateModal(true);
                                            setForm(company)
                                        }} />
                                        <DeleteIcon onClick={()=>{
                                            removeCompany(company.id)
                                        }} style={{color:'#e74c3c' , marginLeft:'5px', cursor:'pointer'}} />
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

export default Company
