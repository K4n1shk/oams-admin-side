export const userColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "firstName",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.firstName}
          {" "}
          {params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 130,
  },

  {
    field: "date",
    headerName: "Date",
    width: 230,
    renderCell: (params) => {
      return (
        <div>
          {params.row.date}
        </div>
      )
    }
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <div className={`cellWithStatus passive`}>
            {(params.row.isDeclined) ? ("Declined") : (<div className={`cellWithStatus ${params.row.isVerified}`}>
              {(params.row.isVerified) ? ("Verified") : ("Pending")}
            </div>)}
          </div>
        </>
      );
    },
  },
];


export const userColumnsP = [
  {
    field: "firstName",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.firstName}
          {" "}
          {params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 130,
  },
  {
    field: "DOB",
    headerName: "Date of Birth",
    width: 130,
  },
  {
    field: "category",
    headerName: "Category",
    width: 130,
  },
  {
    field: "nationality",
    headerName: "Nationality",
    width: 130,
  },
  {
    field: "contact",
    headerName: "Personal Contact",
    width: 130,
  },


]


export const userColumnsI = [
  {
    field: "firstName",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.firstName}
          {" "}
          {params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "branch",
    headerName: "Branch Allocated",
    width: 130,
  },
  {
    field: "pwd",
    headerName: "Person with Disability",
    width: 130,
  },
  {
    field: "allotedinstitute",
    headerName: "Alloted Institute",
    width: 130,
  },
  {
    field: "roundNumber",
    headerName: "Round Number",
    width: 130,
  },
  {
    field: "CSABstatus",
    headerName: "CSAB status",
    width: 130,
  },


]