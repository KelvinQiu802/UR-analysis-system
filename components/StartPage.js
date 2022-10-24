import { Autocomplete, Button, TextField, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { task } from '../utils/NOS';

const columns = [
  { field: 'id', headerName: 'OperationID', width: 360, editable: false },
  {
    field: 'page',
    headerName: 'Page',
    width: 150,
    editable: false,
  },
  {
    field: 'module',
    headerName: 'Function',
    width: 150,
    editable: false,
  },
  {
    field: 'widget',
    headerName: 'Widget',
    width: 200,
    editable: false,
  },
  {
    field: 'startTimeTick',
    headerName: 'Start Time',
    sortable: true,
    width: 200,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    sortable: true,
    width: 160,
  },
];

function StartPage({ operations, setOperations, setTask }) {
  const [pageSize, setPageSize] = React.useState(10);
  const [allTimestamps, setAllTimestamps] = React.useState([]);
  const [filterModel, setFilterModel] = React.useState({
    items: [],
  });

  React.useEffect(() => {
    async function getOperations() {
      const res = await fetch('/api/getAllOperations', { method: 'GET' });
      const result = await res.json();
      const operations = result.operations;
      operations.forEach((op) => (op.id = op.operationId));
      const timestamps = Array.from(
        new Set(operations.map((item) => item.operationId.split('-')[1]))
      );
      setOperations(operations);
      setAllTimestamps(timestamps);
    }
    getOperations();
  }, []);

  return (
    <>
      <div className='button-bar'>
        <div className='each-button'>
          <p>Timestamp: </p>
          <Autocomplete
            disablePortal
            sx={{ width: 200 }}
            id='time-stamps'
            options={allTimestamps}
            renderInput={(params) => (
              <TextField {...params} label='Timestamp' />
            )}
            onChange={(event, newValue) => {
              if (newValue) {
                setFilterModel({
                  items: [
                    {
                      id: 1,
                      columnField: 'id',
                      operatorValue: 'contains',
                      value: newValue,
                    },
                  ],
                });
              } else {
                setFilterModel({
                  items: [],
                });
              }
            }}
          />
        </div>
        <div className='each-button'>
          <p>Task: </p>
          <Autocomplete
            disablePortal
            sx={{ width: 200 }}
            id='time-stamps'
            options={task}
            renderInput={(params) => <TextField {...params} label='Task' />}
            onChange={(event, newValue) => {
              if (newValue) {
                setTask(newValue);
              } else {
                setTask();
              }
            }}
          />
        </div>
        <Button variant='contained'>Start Analyzing</Button>
      </div>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          mt: 1,
        }}
      >
        <DataGrid
          rows={operations}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 25, 50, 100]}
          checkboxSelection
          disableSelectionOnClick
          filterModel={filterModel}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
        />
      </Box>
    </>
  );
}

export default StartPage;
