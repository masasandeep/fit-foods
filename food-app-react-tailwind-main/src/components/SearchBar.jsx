import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';
import styled from 'styled-components';
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
  } from "react-icons/ai";

const suggestions = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%', // Set the width to 100% to fill the available space
  },
  
}));

const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
    border-radius: 0;
  }
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 0;
    border: none; // Remove borders
  }
`;

function SearchBar() {
  const classes = useStyles();
  const [value, setValue] = useState('');

  return (
    // <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        // <AiOutlineSearch size={25} />
    <StyledAutocomplete
      options={suggestions}
      getOptionLabel={(option) => option}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label="Search for fruits"
          variant="outlined"
          className={classes.root}
          style={{width:'470px',borderRadius:'20px !important'}}
        />
      )}
    />
    // </div>
  );
}  

export default SearchBar;
