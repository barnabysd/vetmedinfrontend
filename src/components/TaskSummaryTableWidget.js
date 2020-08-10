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
    border-radius: 0rem 0rem 0rem 0rem;
  
    border-color: ${theme.palette.skyBlue.main};
    
`

const StyledTableCellMainTitle = withStyles((themeMaterial) => ({
    head: {
       backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
       color: theme.palette.raven.main,
       fontWeight: '600',
       fontFamily: theme.typography.fontFamily, 
       fontSize: '1rem', 
       fontWeight: theme.overrides.MuiTypography.h1.fontWeight,
    },
    body: {
       backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
       color: theme.palette.raven.main,
       fontFamily: theme.overrides.MuiTypography.body1.fontFamily,
       fontSize: theme.overrides.MuiTypography.body1.fontSize,
       fontWeight: theme.overrides.MuiTypography.body1.fontWeight,
       padding: '1rem',
       margin: '1rem'
    },
  }))(TableCell);

const StyledTableCellTitle = withStyles((themeMaterial) => ({
    head: {
      backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
      color: theme.palette.raven.main,
      fontFamily: theme.overrides.MuiTypography.h4.fontFamily,
       fontSize: '1rem',
       fontWeight: theme.overrides.MuiTypography.h4.fontWeight,
    },
    body: {
       backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
       color: theme.palette.raven.main,
       fontFamily: theme.overrides.MuiTypography.h5.fontFamily,
       fontSize: theme.overrides.MuiTypography.h5.fontSize,
       fontWeight: theme.overrides.MuiTypography.h5.fontWeight,
       textAlign:'left',
       padding: '1rem',
       margin: '1rem'
    
    },
  }))(TableCell);

const StyledTableCell = withStyles((themeMaterial) => ({
  head: {
    backgroundColor: '#effcfe',
    color: theme.palette.raven.main,
  },
  body: {
    backgroundColor: '#effcfe',
    textAlign:'left',
    color: theme.palette.raven.main,
    fontFamily: theme.overrides.MuiTypography.body1.fontFamily,
    fontSize: theme.overrides.MuiTypography.body1.fontSize,
    fontWeight: theme.overrides.MuiTypography.body1.fontWeight,
    padding: '1rem',
    margin: '1rem'
  },
}))(TableCell);

const StyledTableRow = withStyles((themeMaterial) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'white',
    },
  },
}))(TableRow);

// .MuiPaper-elevation1 

  const useStyles = makeStyles({
    table: {
      minWidth: "200px",
      marginBottom:"0rem !important",
      
    },
  });
  
  export default function TaskSummaryTableWidget({resources}) {
    const classes = useStyles();

    function createData(rowTitle, rowValue) {
        return { rowTitle, rowValue };
    }
    let rows = []


    if (resources.tableTitle1 && !resources.tableTitle2) {
      rows = [
        createData(resources.tableTitle1, resources.tableContent1)
      ];
    }

    if (resources.tableTitle1 && resources.tableTitle2 && !resources.tableTitle3) {
      rows = [
        createData(resources.tableTitle1, resources.tableContent1),
        createData(resources.tableTitle2, resources.tableContent2)
    
      ];
    }

    if (resources.tableTitle1 && resources.tableTitle2 && resources.tableTitle3) {
      rows = [
        createData(resources.tableTitle1, resources.tableContent1),
        createData(resources.tableTitle2, resources.tableContent2),
        createData(resources.tableTitle3, resources.tableContent3)
      ];
    }

    return (
    <TableHolder>
    
      {resources.tableHeader ? 
          <TableContainer component={Paper} style={{ borderRadius:'0 0 0 0',border: '5px solid white', boxShadow: 'none', position: 'relative',overflow: 'hidden'}}>
            <Table className={classes.table} aria-label={resources.tableHeader ? resources.tableHeader :''} style={{border: '5px solid white',marginBottom:'0rem !important'}}>
          
          { resources.tableHeader !== '' && resources.tableHeader != 'No data' && resources.tableHeader != 'no data'?
              <TableHead>
                <TableRow>
                  <StyledTableCellMainTitle colSpan={2} style={{border: '5px solid white'}}>&nbsp;&nbsp;{resources.tableHeader}</StyledTableCellMainTitle> 
                </TableRow>
              </TableHead>
              : ''
          }
          
              <TableBody>
                {rows.map((currentRow) => (
                  <StyledTableRow key={currentRow.rowTitle}>
                    <StyledTableCellTitle component="th" scope="row" style={{width:'25%',border: '5px solid white'}}>
                    &nbsp;&nbsp;&nbsp;{currentRow.rowTitle}
                    </StyledTableCellTitle>
                    <StyledTableCell align="left" style={{border: '5px solid white'}}>{currentRow.rowValue}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

         : 
         
         <TableContainer component={Paper} style={{ borderRadius:'0 0 0 0',border: '5px solid white', boxShadow: 'none', position: 'relative',overflow: 'hidden'}}>
         <Table className={classes.table} aria-label={resources.tableHeader1 ? resources.tableHeader1.processed :''} style={{border: '5px solid white'}}>
           <TableBody>
             {rows.map((currentRow) => (
              //  TODO - remove string replace into method
               <StyledTableRow key={(currentRow.rowTitle).replace("&amp;",'')}>
                 <StyledTableCellTitle component="th" scope="row" style={{width:'25%',border: '5px solid white'}}>
                 &nbsp;&nbsp;&nbsp;{(currentRow.rowTitle).replace("&amp;",'&')}
                 </StyledTableCellTitle>
                 <StyledTableCell align="left" style={{border: '5px solid white'}}>{currentRow.rowValue}</StyledTableCell>
               </StyledTableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer> 
      }
      </TableHolder>
    );
  }