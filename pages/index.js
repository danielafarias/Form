import Head from "next/head";
import React from 'react';
import styles from "../styles/Home.module.css";
import { TextField, Grid, Button, Typography, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Home() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");

  console.log(name, lastname, email, password, birthdate);

  const submitHandler = () => {
    //codigo
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Formulário</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={submitHandler}>
          <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="h1">Formulário de cadastro</Typography>
            </Grid>
            <Grid item>
              <TextField label="Nome" variant="filled" type="text" onChange={(e) => setName(e.target.value)}/>
            </Grid>
            <Grid item>
              <TextField label="Sobrenome" variant="filled" type="text" onChange={(e) => setLastname(e.target.value)}/>
            </Grid>
            <Grid item>
              <TextField label="Data de nascimento" variant="filled" type="date" InputLabelProps={{ shrink: true }} onChange={(e) => setBirthdate(e.target.value)}/>
            </Grid>
            <Grid item>
              <TextField label="E-mail" variant="filled" type="email" onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid item>
              <TextField 
              label="Senha" 
              variant="filled" 
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{ 
                endAdornment: 
                <IconButton
                  onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)}
                >
                  {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
               }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">Enviar</Button>
            </Grid>
          </Grid>
        </form>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
