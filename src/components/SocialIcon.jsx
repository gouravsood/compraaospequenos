import React from 'react';
import { shape, string } from 'prop-types';
import clsx from 'clsx';

import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';

import useStyles from 'Styles/components/socialIcon';

const SocialIcon = ({
  extraClasses,
  icon,
  link,
  title,
}) => {
  const classes = useStyles();

  return (
    <Fab
      className={ clsx(classes.link, extraClasses.link) }
      component="a"
      href={ link }
      title={ title }
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className={ clsx(classes.icon, extraClasses.icon) }
        icon={ icons[icon] }
      />
    </Fab>
  );
};

SocialIcon.propTypes = {
  extraClasses: shape({}),
  icon: string.isRequired,
  link: string.isRequired,
  title: string.isRequired,
};

SocialIcon.defaultProps = {
  extraClasses: {},
};

export default SocialIcon;
