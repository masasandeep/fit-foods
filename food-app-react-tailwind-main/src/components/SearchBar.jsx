import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';
import styled from 'styled-components';
import FoodCard from './FoodCard';
import FoodDisplay from './FoodDisplay';
import FoodList from '../backend/FoodList.json';
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
} from "react-icons/ai";
import { Button } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';

const suggestions = [
    'Cashew',
    'Badam',
    'Burger',
    'Pizza',
    'Dates',
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
    const nav=useNavigate();
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [found,setFound]=useState(true);
    const handleClick=()=>{
        
        FoodList.data.map((item1)=>{if(item1.name===value){
            // console.log(item1);
            // nav("/FoodDisplay");
            setFound(true);
            nav('/FoodDisplay',{state:{item1:item1,found:true}});
        }
        else
        {
            setFound(false);
            nav('/FoodDisplay',{state:{item1:item1,found:false}});
        }
    })
    }
    return (
        // <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        // <AiOutlineSearch size={25} />
        <div className="flex flex-row justify-between items-center">
            <Button onClick={handleClick}>
            <AiOutlineSearch size={25}  className="mr-4" />
             </Button>
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
                        style={{ width: '470px', borderRadius: '20px !important' }}
                    />
                   )}
            />
        </div>
  );
}

export default SearchBar;
