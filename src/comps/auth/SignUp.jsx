import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, CssBaseline, Grid, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup'

const SignUp = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string('Enter a valid email').email('Enter a valid email'),
    password: Yup.string('enter a password').required('required').min(8,'min 8 chars'),
    repassword: Yup.string('Enter the same password').required().min(8,'').oneOf([Yup.ref('password'), null], 'Passwords must match')
    
  })

  const formik = useFormik({
    initialValues: {
      email: 'gfalav@yahoo.com',
      password: '',
      repassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return(
    <div>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 8}}>
            <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon sx={{ backgroundColor: 'secondary.main' }}  />
            </Avatar>
            <Typography component="div" variant="h4" sx={{ m: 2}}>
              Sign up
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
                  <TextField
                    id="password"
                    name="password"
                    label="password"
                    type="password"
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                  <TextField
                    id="repassword"
                    name="repassword"
                    label="Confirm password"
                    type="password"
                    fullWidth
                    value={formik.values.repassword}
                    onChange={formik.handleChange}
                    error={formik.touched.repassword && Boolean(formik.errors.repassword)}
                    helperText={formik.touched.repassword && formik.errors.repassword}
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                  <Button type="submit">Submit</Button>
                </Grid>
              </Grid>
            </Box>
      </Box>
    </div>
  )
}

export default SignUp