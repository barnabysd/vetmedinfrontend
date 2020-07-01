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
import { processInternalLink, processHtml, removeParagraphsTags } from '../utils/displayUtils'

import WebsiteLink, { buttonStyleType } from '../components/WebsiteLink'

const TableHolder = styled.div`
    background-color: ${theme.palette.skyBlue.main};
    border-radius: 0rem 0rem 0rem 0rem;
  
    border-color: ${theme.palette.skyBlue.main};
    
`
// const PanelTitle = styled.div`
//     font-family: ${theme.overrides.MuiTypography.h1.fontFamily};
//     font-size: ${theme.overrides.MuiTypography.h1.fontSize};
//     font-weight: ${theme.overrides.MuiTypography.h1.fontWeight};
//     background-color: ${theme.palette.skyBlue.main};
//     transform: rotate(270deg);
//     color: #30c1e2;
//     border-radius: 2rem 2rem 2rem 0rem;
//     width: 406px;
//     height: 574px;
//     position: absolute;
//     left: 59px;
//     top: -84px;
//     padding: 1rem;
//     box-shadow: -8px 6px 5px rgba(35,42,54,0.2);
// `

const StyledTableCellMainTitle = withStyles((themeMaterial) => ({
    head: {
       backgroundColor: '#c6f5fe', // theme.palette.skyBlue.main,
       color: theme.palette.raven.main,
       fontWeight: '600',
       fontFamily: theme.typography.fontFamily, //overrides.MuiTypography.h1.fontFamily
       fontSize: '1rem', //theme.overrides.MuiTypography.h1.fontSize,
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
    },
  });
  
  export default function TaskSummaryTable({resources, rowPointer = 0 }) {
    const classes = useStyles();

    function createData(rowTitle, rowValue) {
        return { rowTitle, rowValue };
    }
    let rows = []
    if (resources.field_tableitemtitlehtml1 && !resources.field_tableitemtitlehtml2) {
      rows = [
        createData(processHtml(resources.field_tableitemtitlehtml1.processed), removeParagraphsTags(processHtml(resources.field_tableitemcontent1.processed))),
      ];
    }

    if (resources.field_tableitemtitlehtml1 && resources.field_tableitemtitlehtml2 && !resources.field_tableitemtitlehtml3) {
      rows = [
        createData(processHtml(resources.field_tableitemtitlehtml1.processed), removeParagraphsTags(processHtml(resources.field_tableitemcontent1.processed))),
        createData(processHtml(resources.field_tableitemtitlehtml2.processed), removeParagraphsTags(processHtml(resources.field_tableitemcontent2.processed))),
    
      ];
    }

    if (resources.field_tableitemtitlehtml1 && resources.field_tableitemtitlehtml2 && resources.field_tableitemtitlehtml3) {
      rows = [
        createData(processHtml(resources.field_tableitemtitlehtml1.processed), removeParagraphsTags(processHtml(resources.field_tableitemcontent1.processed))),
        createData(processHtml(resources.field_tableitemtitlehtml2.processed), removeParagraphsTags(processHtml(resources.field_tableitemcontent2.processed))),
        createData(processHtml(resources.field_tableitemtitlehtml3.processed), removeParagraphsTags(processHtml(resources.field_tableitemcontent3.processed)))
      ];
    }

    let currentRow = rows
   
    return (
    <TableHolder>
      {/* <PanelTitle>{resources.field_paneltitle}</PanelTitle> */}

      {resources.field_tableheaderhtml1 ? 
          <TableContainer component={Paper} style={{ borderRadius:'0 0 0 0',border: '5px solid white', boxShadow: 'none', position: 'relative',overflow: 'hidden'}}>
            <Table className={classes.table} aria-label={resources.field_tableheaderhtml1 ? resources.field_tableheaderhtml1.processed :''} style={{border: '5px solid white'}}>
          
              <TableHead>
                <TableRow>
                  <StyledTableCellMainTitle colSpan={2} style={{border: '5px solid white'}}>&nbsp;&nbsp;{resources.field_tableheaderhtml1.processed}</StyledTableCellMainTitle> 
                </TableRow>
              </TableHead>
          
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
         <Table className={classes.table} aria-label={resources.field_tableheaderhtml1 ? resources.field_tableheaderhtml1.processed :''} style={{border: '5px solid white'}}>
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
         
         
      }
      </TableHolder>
    );
  }