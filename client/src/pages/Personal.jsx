import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumnsP } from "../datatablesource";
import "./datatable.scss"

const Personal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/candidates')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log("Error showing Candidates!");
      })
  }, []);


  return (
    <div className="datatable">
      <DataGrid
        getRowId={row => row._id}
        className="datagrid"
        rows={data}
        columns={userColumnsP}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}

export default Personal;
