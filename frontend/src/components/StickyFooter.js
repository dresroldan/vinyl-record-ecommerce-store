import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

const Copyright = () => {
  return (
    <Typography variant="caption" color="#fff">
      {'Copyright © '}

      {'Andres Roldan '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#222',
    color: 'white',
  },
  social: {
    backgroundColor: '#333',
  },
}));

const StickyFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
export default StickyFooter;
