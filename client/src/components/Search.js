import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { apiConnector } from "../utils/api";

function Search({ setUsers }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await apiConnector("post", "/getuser");

    if (response.data.success === false) {
      return;
    }
    console.log("user", response.data.user);
    setData(response.data.user);
  };
  const handleSearch = async () => {
    console.log("data", data);
    const searchUser = data.filter(
      (user) =>
        user?.first_name.toLowerCase().includes(search) ||
        user?.domain.toLowerCase().includes(search)
    );
    setSearch("");
    setUsers(searchUser);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        List Of all Users You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          placeholder="Search  User"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "blue",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          {" "}
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default Search;
