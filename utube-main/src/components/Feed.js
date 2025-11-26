import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { FetchFromAPI } from "../utils/FetchFromAPI";

function Feed() {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [myvideos, setmyvideos] = useState([]);

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setmyvideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
        <Box
          sx={{
            height: { sm: "auto", md: "92vh" },
            borderRight: "2px solid #3d3d3d",
            px: { sm: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          ></SideBar>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex : 2}}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategory}
            <span style={{ color: "#F31503", marginLeft: "8px" }}>Videos</span>
          </Typography>
          <Videos myvideos={myvideos}></Videos>
        </Box>
      </Stack>
    </>
  );
}

export default Feed;
