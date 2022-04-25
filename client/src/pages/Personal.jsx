import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumnsP } from "../datatablesource";
import "./datatable.scss"
import { NavLink } from "react-router-dom";

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

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/api/candidates/' + id)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });
    setData(data.filter((item) => item._id !== id));
  };
  // console.log({ info });
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <NavLink to={"/candidates/" + params.row._id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </NavLink>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
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
