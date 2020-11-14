import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  footerContainer: {
    background: 'rgba(0, 0, 0, 0.9)',
  },

  footerWrap: {
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  socialMedia: {
    maxWidth: '1300px',
    width: '100%',
  },

  socialMediaWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '16px auto 0 auto',
  },

  socialLogo: {
    color: '#fff',
    justifySelf: 'start',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    fontWeight: 'bold',
  },

  socialIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '240px',
  },

  socialIconLink: {
    color: '#fff',
    fontSize: '24px'
  }
});