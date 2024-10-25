import React, { useState } from "react";
import { Box, Toolbar, Typography, Button, TextField, MenuItem, Chip, Select } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Papa from "papaparse";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { blue, blueGrey } from "@mui/material/colors";

const Team = () => {
  const [rows, setRows] = useState(mockDataTeam);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // State for file upload

  // Define CustomToolbar
  const CustomToolbar = ({ onUpload }) => (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Team Members
      </Typography>
      <input
        accept=".csv"
        style={{ display: 'none' }}
        id="upload-csv"
        type="file"
        onChange={onUpload}
      />
      <label htmlFor="upload-csv">
        <Button variant="contained" component="span">
          Upload CSV
        </Button>
      </label>
      <GridToolbar />
    </Toolbar>
  );

  const columns = [
    { field: "id", headerName: "ID", headerClassName: 'id-column-header' },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", headerClassName: 'name-column-header' },
    { field: "Team", headerName: "Team", type: "number", headerAlign: "left", align: "left", headerClassName: 'team-column-header' },
    { field: "phone", headerName: "Phone Number", flex: 1, headerClassName: 'phone-column-header' },
    { field: "email", headerName: "Email", flex: 1, headerClassName: 'email-column-header' },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      headerClassName: 'access-column-header',
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={access === "admin" ? blueGrey[100] : blue[100]}
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color="grey">{access}</Typography>
        </Box>
      ),
    },
  ];

  // Handle CSV upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedData = results.data.map((item) => ({
            ...item,
            id: Number(item.id),
          }));
          setRows(parsedData);
        },
        error: (error) => {
          console.error("Error parsing CSV: ", error);
        },
      });
    }
  };

  // Handle form file upload
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFile);
    // Implement file handling logic here
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
  };

  // Handle team creation
  const handleCreateTeam = () => {
    console.log("Team Name:", teamName);
    console.log("Selected Students:", selectedStudents);
    setSelectedStudents([]);
    setTeamName("");
  };

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      
      <Box m="20px 0">
        <TextField
          select
          label="Select Students"
          value={selectedStudents}
          onChange={(e) => setSelectedStudents(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          SelectProps={{ multiple: true }}
        >
          {rows.map((row) => (
            <MenuItem key={row.id} value={row.id}>
              {row.name}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
          {Array.isArray(selectedStudents) && selectedStudents.map((id) => {
            const student = rows.find((row) => row.id === id);
            return (
              <Chip
                key={id}
                label={student ? student.name : id}
                onDelete={() =>
                  setSelectedStudents((prev) =>
                    prev.filter((selectedId) => selectedId !== id)
                  )
                }
                sx={{ margin: 0.5 }}
              />
            );
          })}
        </Box>
        <TextField
          label="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleCreateTeam}
          disabled={!teamName || selectedStudents.length === 0}
        >
          Create Team
        </Button>
      </Box>

      {/* File Upload Form */}
      <Box m="20px 0">
        <form onSubmit={handleFormSubmit}>
          <input type="file" id="myFile" name="filename" onChange={handleFileChange} />
          <Button variant="contained" type="submit">Submit File</Button>
        </form>
      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            background: "#616161",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#212121",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: () => <CustomToolbar onUpload={handleUpload} />,
          }}
          checkboxSelection
          onSelectionModelChange={(newSelection) => setSelectedStudents(newSelection)}
          selectionModel={selectedStudents}
        />
      </Box>
    </Box>
  );
};

export default Team;




