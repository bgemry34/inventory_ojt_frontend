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
    TableHead} from '@material-ui/core';
import React from 'react';

import PrintIcon from '@material-ui/icons/Print';
import AddIcon from '@material-ui/icons/Add';

import {fetchItems} from './../../'

function Inventory() {
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
                        endIcon={<PrintIcon />}
                    >
                        Print
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{marginLeft:'10px', backgroundColor:'#2ecc71'}}
                        endIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                    </div>
                </Grid>
            </Grid>
            <Grid container style={{marginTop:'30px'}}>
                <Grid xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Qty.</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Email</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
           </Container>
        </div>
    )
}

export default Inventory
