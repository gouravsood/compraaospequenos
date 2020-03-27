import wrapStyles from 'Styles/wrapStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },

  title: {
    marginBottom: theme.spacing(14),
  },

  button: {
    marginTop: theme.spacing(8),
  },
});

export default component => wrapStyles(styles, component);