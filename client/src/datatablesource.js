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

export const userColumns2 = [
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
    field: "paymentMode",
    headerName: "Payment Mode",
    width: 230,
  },
  {
    field: "transactionId",
    headerName: "Transaction ID",
    width: 230,
  },
  {
    field: "bankName",
    headerName: "Bank Name",
    width: 230,
  },
  {
    field: "feeAmount",
    headerName: "Fee Amount",
    width: 230,
  },
  {
    field: "DOD",
    headerName: "Date of Deposit",
    width: 230,
  },
  {
    field: "feeType",
    headerName: "Fee Type",
    width: 230,
  },
  {
    field: "scholarshipStatus",
    headerName: "Scholarship Status",
    width: 230,
  },
  {
    field: "scholarshipName",
    headerName: "Scholarship Name",
    width: 230,
  },
  {
    field: "feeYear",
    headerName: "Year",
    width: 230,
  },
  {
    field: "feeSemester",
    headerName: "Semester",
    width: 230,
  },
]
export const userColumns3 = [
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
    field: "preferredHostel",
    headerName: "Preferred Hostel",
    width: 230,
  },
  {
    field: "preferredHostelFloor",
    headerName: "Preferred Hostel Floor",
    width: 230,
  },
  {
    field: "roomStyle",
    headerName: "Preferred Room Style",
    width: 230,
  },
  {
    field: "messFood",
    headerName: "Prefered Mess Food",
    width: 230,
  },
  {
    field: "hostelPaymentMode",
    headerName: "Hostel Fee Payment Mode",
    width: 230,
  },
  {
    field: "HostelTid",
    headerName: "Transaction ID",
    width: 230,
  },
  {
    field: "HBankName",
    headerName: "Bank Name",
    width: 230,
  },
  {
    field: "HFeeAmount",
    headerName: "Fee Amount",
    width: 230,
  },
  {
    field: "HDOD",
    headerName: "Date of Deposit",
    width: 230,
  },
]