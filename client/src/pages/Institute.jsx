import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumnsI } from "../datatablesource";
import "./datatable.scss"
import { NavLink } from "react-router-dom";

const Institute = () => {
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

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/api/candidates/' + id)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });
    setData(data.filter((item) => item._id !== id));
  };
  // console.log({ info });
  return (
    <div className="datatable">
      <DataGrid
        getRowId={row => row._id}
        className="datagrid"
        rows={data}
        columns={userColumnsI}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}

export default Institute;
