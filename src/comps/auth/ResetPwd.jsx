import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, CssBaseline, Grid, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { getAuth, sendPasswordResetEmail  } from "firebase/auth";
import app from '../firebase/fb';
import { Link, useNavigate } from 'react-router-dom';


const ResetPwd = () => {
  let navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string('Enter a valid email').email('Enter a valid email')
  })

  const formik = useFormik({
    initialValues: {
      email: 'gfalav@yahoo.com'
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const fb = app
      const auth = getAuth(fb);
      
      sendPasswordResetEmail (auth, values.email)
        .then(() => {
          navigate('/')
          // Send mail
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          // ..
        });      
    },
  })

  return(
    <div>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 12}}>
            <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon sx={{ backgroundColor: 'secondary.main' }}  />
            </Avatar>
            <Typography component="div" variant="h4" sx={{ mb: 4}}>
              Reset Password
            </Typography>

            <Box component="form" onSubmit={ formik.handleSubmit }>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} >
                  <TextField
                    id="email"
                    name="email"
                    label="email"
                    type="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                  <Button type="submit" variant='contained'>Submit</Button>
                </Grid>
              </Grid>
            </Box>
            <Button component={Link} to='/SignIn' variant="contained" sx={{mt: 2}}>Return to SignIn</Button>
      </Box>
    </div>
  )
}

export default ResetPwd