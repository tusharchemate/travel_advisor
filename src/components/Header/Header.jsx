import react from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyle from './styles';

const Header = () => {
  const styles = useStyle();
  return (
    <AppBar position='static'>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h5" className={styles.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h5" className={styles.title}> 
            Explore new places
          </Typography>
          <Autocomplete>
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase  placeholder ="Search ..." />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>

    </AppBar>

  );
};

export default Header;
