import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@material-ui/core/styles';

const tableStyled = makeStyles({
  table_container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: '280px',
    maxWidth: '348px',
    maxHeight: '347px',
    borderRadius: '30px',
    background: '#4a56e2',
  },
  currency_head: {
    borderRadius: '30px 30px 0px 0px',
  },
  currency_header: {
    // fontFamily: 'Circe, sans-serif',
    fontSize: '118px',
    fontWeight: '700',
    paddingTop: '11px',
    paddingBottom: '12px',
    color: 'white',
    backgroundColor: '#6e78e8',
    alignItems: 'center',
    borderBottom: '0px',
  },

  currency_body: {
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',
  },

  currency_name: {
    fontFamily: 'Circe',
    fontSize: '16px',
    fontWeight: '400',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#ffffff',
    borderBottom: '0px',
  },

  currency_item: {
    fontFamily: 'Circe',
    fontSize: '16px',
    fontWeight: '400',
    color: '#ffffff',
    borderBottom: '0px',
  },
});
export default tableStyled;
