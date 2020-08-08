import React, { useState } from 'react'
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import theme, { sm, md, lg, xl } from '../theme'

const BorderSelect = ({id,name,currentValue, handleChange}) => {
  //const [val,setVal] = useState(1);

  //   const handleChange = (event) => {
  //     setVal(event.target.value);
  //   };

  const borderSelectClasses = useBorderSelectStyles();

  // moves the menu below the select input
  const menuProps = {
    classes: {
      list: borderSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon}/>
    )};

  const customBorder = 'solid 1px ' + theme.palette.topazBlue.main

  return (
    <FormControl style={{paddingLeft: '0.5rem',paddingTop: '0.5rem'}}>

      <Select
        disableUnderline
        classes={{ root: borderSelectClasses.select, }}
        labelId={id}
        IconComponent={iconComponent}
        MenuProps={menuProps}
        value={currentValue}
        onChange={handleChange}
        name={name}
        style={{width: '400px' }}
      >
        <MenuItem value={""}>Please select</MenuItem>
        <MenuItem value={"Independent"}>Independent</MenuItem>
        <MenuItem value={"Linnaeus"}>Linnaeus</MenuItem>
        <MenuItem value={"CVS"}>CVS</MenuItem>
        <MenuItem value={"Medivet"}>Medivet</MenuItem>
        <MenuItem value={"Goddards"}>Goddards</MenuItem>
        <MenuItem value={"VetPartners"}>VetPartners</MenuItem>
        <MenuItem value={"XL Vets"}>XL Vets</MenuItem>
        <MenuItem value={"IVCE"}>IVCE</MenuItem>
        <MenuItem value={"Vets4Pets / Companion Care (The Vet Group)"}>Vets4Pets / Companion Care (The Vet Group)</MenuItem>
        <MenuItem value={"Student"}>Student</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>

      </Select>
    </FormControl>
  );
};

export default BorderSelect
