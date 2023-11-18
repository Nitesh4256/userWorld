import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Pagination } from "@mui/material";
import Search from "../components/Search";

import User from "../components/User";
import { apiConnector } from "../utils/api";
function Home() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(true);
  const paginate = (e, value) => {
    setCurrentPage(value);
    console.log("pagi", currentPage);
    window.scrollTo({ top: "1800", behavior: "smooth" });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiConnector(
        "get",
        `/getusers?page=${currentPage}`
      );

      setUsers(response.data.user);
    };

    fetchData();
  }, [currentPage, status]);
  return (
    <Box>
      <Search setUsers={setUsers} />
      <Box
        sx={{
          display: { lg: "flex", xs: "block" },
          flexDirection: {
            lg: "row",
            xs: "row",
            flexWrap: "wrap",
            width: { lg: "300px", xs: "400" },
            gap: "10px",
          },
        }}
      >
        {users.map((user, index) => (
          <User user={user} setStatus={setStatus} status={status} />
        ))}
      </Box>
      <Pagination
        count={50}
        variant="outlined"
        color="primary"
        sx={{
          margin: " 60px auto",
          width: { lg: "450px", xs: "300px" },
        }}
        shape="rounded"
        defaultPage={1}
        page={currentPage}
        onChange={paginate}
        size="large"
      />
    </Box>
  );
}

export default Home;
