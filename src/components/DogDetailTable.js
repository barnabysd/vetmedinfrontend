import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import theme, { sm, md, lg, xl } from '../theme'
 
import styled, { css, keyframes } from 'styled-components'
// import mainLogoSvg from '../images/userChoicePage/master_logo_light.svg'
import get from 'lodash/get'
import { graphql } from "gatsby"
import { processInternalLink, stripUneededHtml, removeParagraphsTags } from '../utils/displayUtils'

import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'

const TableHolder = styled.div`
    background-color: ${theme.palette.skyBlue.main};
    border-radius: 2rem 2rem 2rem 2rem;
    box-shadow: none;
    border-color: ${theme.palette.skyBlue.main};
    width: 500px;
    @media (max-width: ${md}px) {
      width: 100%;
      border-radius: 0;
    }
`

const PanelTitle = styled.div`
    font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
    font-size: ${theme.overrides.MuiTypography.h1.fontSize};
    font-weight: ${theme.overrides.MuiTypography.h1.fontWeight};
    background-color: ${theme.palette.skyBlue.main};
    transform: rotate(270deg);
    color: #30c1e2;
    border-radius: 2rem 2rem 2rem 0rem;
    width: 406px;
    height: 574px;
    position: absolute;
    left: 59px;
    top: -84px;
    padding: 1rem;
    box-shadow: -6px -3px 5px rgba(35,42,54,0.2);  
    @media (max-width: ${md}px) {
      position:static;
      box-shadow: none;
      transform: rotate(0deg);
      height: 100px;
      width:100%;
      left:0;
      top:0;
      font-size:2rem;
      border-radius: 0 0 0 0rem;
    }
`
/* -8px 6px 5px rgba(35,42,54,0.2);*/

const DogTabText = styled.div`
 
  height: 16.5rem;
  font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
  font-size: 2.313rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: 7.4px;
  text-align: center;
  color: ${theme.palette.topazBlue.main};
`

const StyledTableCellMainTitle = withStyles((themeMaterial) => ({
    head: {
       backgroundColor: 'white', // theme.palette.skyBlue.main,
       color: theme.palette.midnightBlue.main,
       fontWeight: '700',
       fontFamily: theme.overrides.MuiTypography.h1.fontFamily,
       fontSize: theme.overrides.MuiTypography.h1.fontSize,
       fontWeight: theme.overrides.MuiTypography.h1.fontWeight,
       ['@media (max-width:' + md + 'px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%',
        lineHeight: '3rem'
      }
     
    },
    body: {
       backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
       color: theme.palette.raven.main,
       fontFamily: theme.overrides.MuiTypography.body1.fontFamily,
       fontSize: theme.overrides.MuiTypography.body1.fontSize,
       fontWeight: theme.overrides.MuiTypography.body1.fontWeight,
    
       padding: '1rem',
       margin: '1rem',
       ['@media (max-width:' + md + 'px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%'
      }
       
    },
  }))(TableCell);

const StyledTableCellTitle = withStyles((themeMaterial) => ({
    head: {
      backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
      verticalAlign: 'top',
      color: theme.palette.raven.main,
      fontFamily: theme.overrides.MuiTypography.h4.fontFamily,
       fontSize: theme.overrides.MuiTypography.h4.fontSize,
       fontWeight: theme.overrides.MuiTypography.h4.fontWeight,
       ['@media (max-width:' + md + 'px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%'
      }
   
    },
    body: {
       backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
       color: theme.palette.raven.main,
       fontFamily: theme.overrides.MuiTypography.h5.fontFamily,
       fontSize: theme.overrides.MuiTypography.h5.fontSize,
       fontWeight: theme.overrides.MuiTypography.h5.fontWeight,
       padding: '1rem',
       margin: '1rem',
       ['@media (max-width:' + md + 'px)']: { // eslint-disable-line no-useless-computed-key
        width: '30%'
      }
    
    },
  }))(TableCell);

const StyledTableCell = withStyles((themeMaterial) => ({
  head: {
    backgroundColor: '#effcfe',
    color: theme.palette.raven.main,
    ['@media (max-width:' + md + 'px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%'
    }
  },
  body: {
    backgroundColor: '#effcfe',
    color: theme.palette.raven.main,
    fontFamily: theme.overrides.MuiTypography.body1.fontFamily,
    fontSize: theme.overrides.MuiTypography.body1.fontSize,
    fontWeight: theme.overrides.MuiTypography.body1.fontWeight,
    height: '2.6rem',
    padding: '1rem',
    "& p": {
      color: theme.palette.raven.main,
      fontFamily: theme.overrides.MuiTypography.body1.fontFamily,
      fontSize: theme.overrides.MuiTypography.body1.fontSize,
      fontWeight: theme.overrides.MuiTypography.body1.fontWeight,
    },
    "& ul": {
      color: theme.palette.raven.main,
      fontFamily: theme.overrides.MuiTypography.body1.fontFamily,
      fontSize: theme.overrides.MuiTypography.body1.fontSize,
      fontWeight: theme.overrides.MuiTypography.body1.fontWeight,
    },
    "& li": {
      color: theme.palette.raven.main,
      fontFamily: theme.overrides.MuiTypography.body1.fontFamily,
      fontSize: theme.overrides.MuiTypography.body1.fontSize,
      fontWeight: theme.overrides.MuiTypography.body1.fontWeight,
    },
    ['@media (max-width:' + md + 'px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%'
    }
      
   
  },
}))(TableCell);

const StyledTableRow = withStyles((themeMaterial) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'white',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: "200px"
    },
});

const TableContainerStyled = styled(({ ...otherProps }) => (<TableContainer {...otherProps} />))`
  border-radius:0 2rem 0 0;
  position: relative;
  height: 406px;
  overflow: hidden;
  box-shadow:none;
  padding-left:1.5rem;
  padding-right:1.5rem;
  padding-top:1.5rem;
  @media (max-width: ${md}px) {
    height: auto;
    overflow: auto;
  }
`

const TableStyled = styled(({ ...otherProps }) => (<Table {...otherProps} />))`
  width: 100%;
  padding: 0;
  margin:0;
  @media (max-width: ${md}px) {
    & .MuiTableCell {
      width:100%;
      height:600px;
    }
    & .MuiTableRow {
      width:100%;
      height:600px;
    }
    &.MuiTable-root {
      display: block;
    }
  }
`
const PaperStyled = styled(Paper)`
 @media (max-width: ${md}px) {
   width:100%;
 }
`

export default function DogDetailTable({resources, tabPointer = 1 }) {
    const classes = useStyles();

    function createData(rowTitle, rowValue) {
        return { rowTitle, rowValue };
    }

    const rows = [
        createData(resources.field_tableitemtitle1, removeParagraphsTags(resources.field_tableitemcontent1.processed) ),
        createData(resources.field_tableitemtitle2, removeParagraphsTags(resources.field_tableitemcontent2.processed)),
        createData(resources.field_tableitemtitle3, removeParagraphsTags(resources.field_tableitemcontent3.processed)),
        createData(resources.field_tableitemtitle4, removeParagraphsTags(resources.field_tableitemcontent4.processed)),
        createData(resources.field_tableitemtitle5, removeParagraphsTags(resources.field_tableitemcontent5.processed)),
        createData(resources.field_tableitemtitle6, removeParagraphsTags(resources.field_tableitemcontent6.processed)),
    ];
    
    const rows2 = [
        createData(resources.field_tableitemtitle7, removeParagraphsTags(resources.field_tableitemcontent7.processed) ),
        createData(resources.field_tableitemtitle8, removeParagraphsTags(resources.field_tableitemcontent8.processed))
    ];
    
    let currentRow = rows
    if (tabPointer === 2 || tabPointer === "2") {
        currentRow = rows2
    }

    //return (<div>{JSON.stringify(currentRow)}</div>)

    const generateUniqueKeyForTabelRow = (str) => {
       return "key" + Math.floor((Math.random() * 10000) + 1);
    }
  
    return (
    <TableHolder>

      <PanelTitle>
        <DogTabText>{resources.field_paneltitle}</DogTabText>
      </PanelTitle>
      <TableContainerStyled component={PaperStyled}>
        <TableStyled className={classes.table} aria-label={resources.field_tabletitle} >
          <TableHead>
            <TableRow>
              <StyledTableCellMainTitle colSpan={2} style={{border: '2px solid white',verticalAlign:'top',paddingBottom: '2rem',paddingTop: '0rem'}}>{resources.field_tabletitle}</StyledTableCellMainTitle>
              {/* <StyledTableCellMainTitle align="right" style={{border: '2px solid white'}}></StyledTableCellMainTitle> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRow.map((item) => (
              <StyledTableRow key={generateUniqueKeyForTabelRow(currentRow.rowTitle)}>
                <StyledTableCellTitle component="th" scope="row" style={{border: '2px solid white',padding:'0.5rem',verticalAlign:'top'}}>
                {item.rowTitle}
                </StyledTableCellTitle>
                <StyledTableCell align="left" style={{border: '2px solid white',padding:'0.5rem'}} dangerouslySetInnerHTML={{__html: item.rowValue }} />
              </StyledTableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainerStyled>
      </TableHolder>
    );
  }