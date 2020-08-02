
import React from "react"
import styled from 'styled-components'
import theme, { sm, md, lg, xl } from '../theme'
import Grid from '@material-ui/core/Grid'

export const ContainerGrid = styled(Grid)`
  padding-left: 1rem;
  padding-right: 1rem;
`

export const BlueDividerLine = styled.div`
  width: 1057px;
  height: 0;
  border: solid 2px ${theme.palette.skyBlue.main};

`
export const PrescribingInfoAndFurniture = styled.div`
  max-width: 1057px;
  height: auto;
  font-family: ${theme.typography.fontFamily};
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.raven.main};
  & p {
    font-size: 0.813rem;
    color: ${theme.palette.raven.main};
  }  
  & strong {
    font-size: 0.813rem;
    color: ${theme.palette.raven.main};
  }
  & h4 {
    font-size: 0.813rem;
    color: ${theme.palette.raven.main};
  }
  & strong {
    font-size: 0.813rem;
    color: ${theme.palette.raven.main};
  }
  & a {
    font-size: 0.813rem;
    color: ${theme.palette.raven.main};
  }
`