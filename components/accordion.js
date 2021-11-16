import { Fragment } from 'react'
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'
import { ExpandMore as ExpandIcon } from '@mui/icons-material'

const useStyles = makeStyles({
  summary: {
    fontSize: '18px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const Accordion = ({ items }) => {
  const classes = useStyles()
  return (
    <Fragment>
      {
        items.map(item => (
          <MuiAccordion key={ item.summary }>
            <AccordionSummary expandIcon={ <ExpandIcon /> } className={classes.summary}>
              { item.summary }
            </AccordionSummary>
            <AccordionDetails className={ classes.details }>
              { item.details }
            </AccordionDetails>
          </MuiAccordion>
        ))
      }
    </Fragment>
  )
}