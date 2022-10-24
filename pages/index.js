import styles from '../styles/Home.module.css';
import Head from 'next/head';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Autocomplete, Box, TextField } from '@mui/material';

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
    headerName: 'Module',
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

export default function Home() {
  const [operations, setOperations] = React.useState([]);
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
    <div className='App'>
      <Autocomplete
        disablePortal
        id='time-stamps'
        options={allTimestamps}
        renderInput={(params) => <TextField {...params} label='Timestamp' />}
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
      <Box
        sx={{
          width: '100%',
          height: '100%',
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
    </div>
  );
}
