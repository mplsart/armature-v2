import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import SmallActionButton from '../buttons/SmallActionButton';
import { ContentTitle } from '../../typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '16px',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    padding: '32px',
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      padding: '32px 0px',
    },
  },

  // TextField overrides - yes we ripped off the bootstrap example for MUI
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.gutterSize, // unit * 3
    },
  },
  bootstrapInput: {
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '12px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },

  button: {
    margin: 0,
    padding: '8px 16px',
    marginLeft: '-12px',
    marginTop: -1,
    fontSize: '16px',
    height: 45,
    borderRadius: '0 4px  4px 0',
    boxShadow: 'none',
  },

  textContainer: {
    display: 'inline-flex',
    flex: '0 0 auto',
    paddingRight: '32px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      textAlign: 'center',
      display: 'block',
    },
  },
  textContainerInner: {
    display: 'block',
  },

  text: {
    margin: '8px 0',
    fontSize: '32px',

    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '32px',
    },
    [theme.breakpoints.down('xs')]: {
      // This forces a line break on mobile
      '& span.line:after': {
        content: '"\\A"',
        whiteSpace: 'pre',
      },
    },
  },
  subtext: {
    fontSize: '14px',
    margin: '0 0 10px 0',
    fontWeight: 100,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '32px',
    },

    [theme.breakpoints.only('xs')]: {
      // This forces a line break on mobile
      '& span.line:after': {
        content: '"\\A"',
        whiteSpace: 'pre',
      },
    },
  },
  formContainer: {
    display: 'inline-flex',
    flex: 'auto',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'block',
      marginBottom: '16px',
    },
  },
  form: { width: '100%' }, // This is needed for the flex bits
}));

const LargeEmailSignUp: React.FC<{}> = () => {
  const classes = useStyles();
  const [emailValue, setEmailValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setEmailValue(value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.textContainerInner}>
          <ContentTitle className={classes.text}>
            <span className="line">Find out what's up</span> <span className="line">every weekend.</span>
          </ContentTitle>
          <p className={classes.subtext}>
            <span className="line">No spam. Just local art news and events</span>{' '}
            <span className="line">straight to your inbox.</span>
          </p>
        </div>
      </div>
      <div className={classes.formContainer}>
        <form
          action="//mplsart.us14.list-manage.com/subscribe/post?u=ced89bbd9bf83c5658247380d&id=1e75245409"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className={classes.form}
          target="_blank"
          noValidate
        >
          <TextField
            type="email"
            placeholder="Your Email Address"
            name="EMAIL"
            value={emailValue}
            onChange={handleChange}
            fullWidth
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },

              endAdornment: (
                <InputAdornment position="end">
                  <SmallActionButton className={classes.button} type="submit">
                    Subscribe
                  </SmallActionButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default LargeEmailSignUp;
