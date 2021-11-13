import { useHistory } from "react-router-dom";
import {useState} from 'react'
import React from 'react';
import $ from 'jquery';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Card, Typography, CardContent, Link, Button, TextField } from '@mui/material';

export default function Role() {
    function BoxItem(props) {
        const { sx, ...other } = props;
        return (
          <Box
            sx={{
              color: 'white',
              p: 1,
              m: 1,
              borderRadius: 1,
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: '700',
              ...sx,
            }}
            {...other}
          />
        );
      }

const [rolename, getRole] = useState(''); 
const [roles, setRoles] = useState([]);
const addRole = (e) => {
  setRoles([...roles, rolename]);
  console.log("roles", roles)
  getRole('');
  e.preventDefault();
}

  return (
    <>
     <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
          }}
        >
          <BoxItem>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent id="rolelist">
                <Typography gutterBottom variant="h5" component="div">
                  Select a role 
                  <Link href="#" underline="none">
                    {'(refresh)'}
                  </Link>
                </Typography>
                <Button variant="outlined" onClick={addRole} startIcon={<AddCircleOutlineIcon />}>
                  New None-Role Product
                </Button>

                <div>
                  <ul>
                  {
                     roles.map(role => {
                       console.log("role", role)
                       return <li>{role}</li>
                     })
                  }
                  </ul>
                </div>
              </CardContent>
            </Card>
          </BoxItem>
          <BoxItem>
              <Card>
                <CardContent>
                <TextField
                  id="filled-helperText"
                  label="Please input new role name"
                  defaultValue="New Role Name"
                  helperText="Some important text"
                  value={rolename}
                  onChange={(e)=>getRole(e.target.value)}
                  variant="filled"
                />
                
                </CardContent>
              </Card>
          </BoxItem>
          <BoxItem>
            <Card sx={{ border: '1px solid green', maxWidth: 345 }}>
              <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                  Your Public Checkout Link
                  </Typography>
                <TextField
                  id="outlined-size-small"
                  size="small"
                />
              </CardContent>
                <Button variant="contained" color="success">
                  View your public store
                </Button>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Share this link anywhere. This is also the link you place on your
                  <Link href="#" underline="none">
                    {' Medal profile. '}
                  </Link>
                  Users who buy donations are not required to be in your server.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   Donations inside Discord
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  The roles on the left sync directly with your 
                  <Link href="#" underline="none">
                    {' Discord Roles '}
                  </Link>
                  . To get started, price your roles and set a PayPal email in settings.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  Your users can type <strong>"donate"</strong>  in your Discord Server, they will be sent your donate link.
                </Typography>
              </CardContent>
            </Card>
          </BoxItem>
        </Box>
    </>
  );
}
