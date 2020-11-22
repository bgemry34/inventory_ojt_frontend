import { Container,
     CssBaseline, 
     Divider, 
     Grid, 
     Paper, 
     TableCell, 
     TableContainer, 
     Typography,
     Table,
     TableHead,
     TableRow,
     TableBody } from '@material-ui/core';
import React from 'react';
import styles from './Dashboard.module.css';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

const Dashboard = () => {
    return (
        <div>
        <CssBaseline />
            <Container>
                {/* cards */}
                <Grid container 
                spacing={1}
                direction="row"
                justify="center"
                alignItems="stretch"
                className={styles.cardsContainer}
                >
                    <Grid item xs={12}>
                        <Grid container spacing={3} 
                        justify="space-evenly"
                        alignItems="stretch">
                            <Grid item md={4}>
                                <Paper className={styles.Items}>
                                    <div className={styles.ItemsSideColor}>
                                    </div>
                                    <div className={styles.Icons}>
                                        <Grid container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        style={{height:'100%'}}>
                                            <Grid item xs={12}>
                                                <AppsIcon className={styles.iconStyle} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={styles.Content}>
                                        <Typography variant={'h5'} className={styles.ContentTitle}>
                                            Items
                                        </Typography>
                                        <Divider/>
                                        <Typography variant={'h5'} className={styles.ContentValue}>
                                            1000
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper className={styles.Items}>
                                    <div className={styles.DepartmentsSideColor}>
                                    </div>
                                    <div className={styles.Icons}>
                                        <Grid container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        style={{height:'100%'}}>
                                            <Grid item xs={12}>
                                                <AccountTreeIcon className={styles.iconStyle} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={styles.Content}>
                                        <Typography variant={'h5'} className={styles.ContentTitle}>
                                            Departments
                                        </Typography>
                                        <Divider/>
                                        <Typography variant={'h5'} className={styles.ContentValue}>
                                            4
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper className={styles.Items}>
                                    <div className={styles.UsersSideColor}>
                                    </div>
                                    <div className={styles.Icons}>
                                        <Grid container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        style={{height:'100%'}}>
                                            <Grid item xs={12}>
                                                <PeopleIcon className={styles.iconStyle} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={styles.Content}>
                                        <Typography variant={'h5'} className={styles.ContentTitle}>
                                            Users
                                        </Typography>
                                        <Divider/>
                                        <Typography variant={'h5'} className={styles.ContentValue}>
                                            1000
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* 2 tables */}
                <Grid style={{marginTop:'35px'}} container spacing={3}>
                    <Grid item md={6}>
                    <Typography style={{opacity:0.5, marginBottom:'10px'}} variant="h5">Recent Added Equipment</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Model</TableCell>
                                <TableCell align="right">Serial No.</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Model</TableCell>
                                <TableCell align="right">Serial No.</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={6}>
                    <Typography style={{opacity:0.5, marginBottom:'10px'}} variant="h5">Recent Added User</Typography>
                        <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                               
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
    );
}

export default Dashboard;
