import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";




const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, name: "Juice"},
  { id: 2, name: "Mineral water"},
  { id: 3, name: "Bakso"},
  { id: 4, name: "Mie Ayam"},
  { id: 5, name: "Seblak"},
  { id: 6, name: "Ice Tea"},
  { id: 7, name: "Hot Tea"},
  { id: 8, name: "Safood"},
  { id: 9, name: "Mie ayam Bakso"},
  { id: 10, name: "Kerupuk"},
];

const actionColumn = [
 
];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
        
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;