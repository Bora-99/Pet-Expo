import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import DeleteDialog from "../../components/DeleteDialog";

export default function AdminPage() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:5173/animals`)
        .then((response) => {
          setRows(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const detailsRows = rows.map((row) => {
    return {
      id: row._id,
      name: row.name,
      family: row.family,
      species: row.species,
      habitat: row.habitat,
      diet: row.diet,
      description: row.description,
      weight: row.weight,
      height: row.height,
      placeOfFound: row.placeOfFound,
    };
  });

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5173/animals/${selectedId}`)
      .then(() => {
        setTimeout(function () {
          window.location.reload();
        }, 100);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (id) => {
    setOpen(true);
    setSelectedId(id);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "family", headerName: "Family", width: 130 },
    {
      field: "species",
      headerName: "Species",
      width: 90,
    },
    {
      field: "habitat",
      headerName: "Habitat",
      width: 160,
    },
    {
      field: "diet",
      headerName: "Diet",
      width: 120,
    },
    {
      field: "placeOfFound",
      headerName: "Place of Found",
      width: 110,
    },
    {
      field: "weight",
      headerName: "Weight",
      width: 70,
    },
    {
      field: "height",
      headerName: "Height",
      width: 70,
    },
    {
      field: "description",
      headerName: "Description",
      width: 100,
    },
    {
      headerName: "Edit",
      width: 50,
      field: "edit",
      renderCell: (params) => (
        <EditIcon
          sx={{ cursor: "pointer" }}
          color="primary"
          onClick={() => navigate(`/admin/edit/${params.id}`)}
        />
      ),
    },
    {
      headerName: "Delete",
      field: "delete",
      width: 100,
      renderCell: (params) => (
        <DeleteOutlineIcon
          sx={{ cursor: "pointer" }}
          color="error"
          onClick={() => handleClickOpen(params.id)}
        />
      ),
    },
  ];

  const navigate = useNavigate();

  const handleCreateNavigation = () => {
    navigate(`/admin/create`);
  };

  return (
    <Grid style={{ width: "100%", paddingTop: 30 }}>
      <Grid sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}>
        <Button
          variant="outlined"
          color="success"
          onClick={handleCreateNavigation}
        >
          Create New Animal
        </Button>
      </Grid>
      <DataGrid
        rows={detailsRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <DeleteDialog
        open={open}
        handleClose={handleClose}
        handleDeleteItem={handleDelete}
      />
    </Grid>
  );
}
