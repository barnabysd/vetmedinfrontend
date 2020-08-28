import React, { useState } from 'react'
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import theme, { sm, md, lg, xl } from '../theme'
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {

  },
  select: {
    minWidth: '200px',
    background: 'white',
    borderColor: 'rgb(49, 173, 211)',
    borderStyle:'solid',
    borderWidth: '1px',
    borderRadius: '4px',
    paddingLeft: '24px',
    paddingTop: '14px',
    paddingBottom: '15px',
    "&:focus":{
      borderRadius: '4px',
    },
    icon: {
      color: '#000',
    }
  }
});

const BorderSelect = ({id, name, currentValue, onChange}) => {
  //const [val,setVal] = useState(1);

  const handleSelectChange = (event) => {
      console.log("Changed select")
      onChange(event)
  }

  const borderSelectClasses = useBorderSelectStyles();

  const classes = useStyles();

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
      <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon} style={{color: 'black'}}/>
    )};

  const customBorder = 'solid 1px ' + theme.palette.topazBlue.main

  return (
    <ThemeProvider theme={theme}>
      <FormControl style={{
        paddingLeft: '0.5rem',
        paddingTop: '0.5rem',
        width: 'calc(100% - 0.5rem)',
      }}>

        <Select
          disableUnderline
          displayEmpty
          classes={{
            root: classes.root,
            select: classes.select,
            icon: classes.icon,
          }}
          labelId={id}
          IconComponent={iconComponent}
          MenuProps={menuProps}
          value={currentValue}
          onChange={handleSelectChange}
          name={name}
          style={{ backgroundColor: 'white'}}
        >
          <MenuItem disabled value={""}><span style={{opacity:'0.5'}}>Please select</span></MenuItem>
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
    </ThemeProvider>
  );
};

export default BorderSelect
