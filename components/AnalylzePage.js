import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React from 'react';
import ReactFlow from 'react-flow-renderer';

const visibilityTemplate = [
  {
    id: '0',
    data: {
      label: 'High Visibility',
    },
    position: { x: 400, y: 10 },
  },
  {
    id: '1',
    data: {
      label: '(A: Operation Time, long)',
    },
    position: { x: 110, y: 200 },
  },
  {
    id: '2',
    data: {
      label: '(C: Operation Position, interacted)',
    },
    position: { x: 370, y: 200 },
  },
  {
    id: '3',
    data: {
      label: '(D: Operation Efficiency, low)',
    },
    position: { x: 630, y: 200 },
  },
  {
    id: '4',
    data: {
      label: '(A4: Time interval between operations, long)',
    },
    position: { x: 10, y: 400 },
  },
  {
    id: '5',
    data: {
      label: '(C1: Invalid position, interacted)',
    },
    position: { x: 210, y: 400 },
  },
  {
    id: '6',
    data: {
      label: "(C2: Web browser's toolbar, interacted)",
    },
    position: { x: 450, y: 400 },
  },
  {
    id: '7',
    data: {
      label: '(D2: Relevant operations efficiency, low)',
    },
    position: { x: 660, y: 400 },
  },
  {
    id: '8',
    data: {
      label: '(C11: Mouse wheel, interacted)',
    },
    position: { x: 200, y: 600 },
  },
  {
    id: '9',
    data: {
      label: '(C22: Forward button, interacted)',
    },
    position: { x: 500, y: 600 },
  },
  {
    id: 'edge0',
    source: '1',
    target: '0',
    label: 'Hurt',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge1',
    source: '2',
    target: '0',
    label: 'Hurt',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge2',
    source: '3',
    target: '0',
    label: 'Hurt',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge3',
    source: '4',
    target: '1',
    label: 'Make',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge4',
    source: '5',
    target: '2',
    label: 'Help',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge5',
    source: '6',
    target: '2',
    label: 'Help',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge6',
    source: '7',
    target: '3',
    label: 'Make',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge7',
    source: '8',
    target: '5',
    label: 'Make',
    arrowHeadType: 'arrow',
  },
  {
    id: 'edge8',
    source: '9',
    target: '6',
    label: 'Make',
    arrowHeadType: 'arrow',
  },
];

function AnalylzePage() {
  const [func, setFunc] = React.useState('Task1');
  const [usability, setUsability] = React.useState('Visibility');

  const functions = ['Task1'];
  const usabilities = ['Visibility'];

  const rows1 = [
    {
      ffectiveness: '',
      fficiency: '',
      faultTolerance: '',
      learnability: '',
      operability: '',
      visibility: '',
    },
  ];

  const rows2 = [
    {
      page: '',
      widget: '',
      smell: '',
    },
  ];

  return (
    <>
      <div className='button-bar' style={{ marginTop: '10px' }}>
        <div className='each-button'>
          <h2>Function/Task: </h2>
          <Autocomplete
            disablePortal
            sx={{ width: 200 }}
            id='time-stamps'
            options={functions}
            renderInput={(params) => (
              <TextField {...params} label='Function/Task' />
            )}
            onChange={(event, newValue) => {}}
          />
        </div>
        <div className='each-button'>
          <h2>Usability Requirement: </h2>
          <Autocomplete
            disablePortal
            sx={{ width: 200 }}
            id='time-stamps'
            options={usabilities}
            renderInput={(params) => (
              <TextField {...params} label='Usability' />
            )}
            onChange={(event, newValue) => {}}
          />
        </div>
        <Button
          variant='contained'
          color='warning'
          sx={{ width: 200, height: 60 }}
        >
          Show Result
        </Button>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          width: '70%',
          margin: '30px auto',
          border: '2px solid blue',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: '5px' }}>Satisfaction Levels of URs</h1>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Effectiveness
              </TableCell>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Efficiency
              </TableCell>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Fault Tolerance
              </TableCell>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Learnability
              </TableCell>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Operability
              </TableCell>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Visibility
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows1.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.ffectiveness}</TableCell>
                <TableCell align='center'>{row.fficiency}</TableCell>
                <TableCell align='center'>{row.faultTolerance}</TableCell>
                <TableCell align='center'>{row.learnability}</TableCell>
                <TableCell align='center'>{row.operability}</TableCell>
                <TableCell align='center'>{row.visibility}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ReactFlow
        elements={visibilityTemplate}
        style={{
          margin: '0 auto',
          width: '60vw',
          height: '50vh',
          border: '2px solid #666',
          padding: '10px',
        }}
      />

      <TableContainer
        component={Paper}
        sx={{
          width: '70%',
          margin: '30px auto',
          border: '2px solid blue',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: '5px' }}>Detected Usability Smells</h1>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Problematic Page
              </TableCell>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Problematic Function/Widget
              </TableCell>
              <TableCell sx={{ fontSize: '1.2em' }} align='center'>
                Usablity Smell
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows2.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.page}</TableCell>
                <TableCell align='center'>{row.widget}</TableCell>
                <TableCell align='center'>{row.smell}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AnalylzePage;
