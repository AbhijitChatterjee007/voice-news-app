import { Link } from '@material-ui/core';
import React from 'react';
import { Typography } from '@material-ui/core';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import useStyles from './styles';

const Footer = () => {

  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerWrap}>
        <div className={classes.socialMedia}>
          <div className={classes.socialMediaWrap}>
          <Typography variant="body1" component="h2" style={{"color" : "white", "marginRight" : "20px"}}>
            Created by Abhijit Chatterjee
            </Typography>
            <div className={classes.socialIcons}>
              <Link className={classes.socialIconLink} href='https://www.facebook.com/abhijit.chatterjee.52' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </Link>
              <Link className={classes.socialIconLink} href='https://www.instagram.com/abhijitchatterjee_/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </Link>
              <Link className={classes.socialIconLink} href='https://www.instagram.com/abhijitchatterjee_/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
                <FaTwitter />
              </Link>
              <Link className={classes.socialIconLink} href='https://www.linkedin.com/in/abhijitchatterjee007/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
