import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";
 

function SearchFeed() {

  const {searchTerm} = useParams();

  const [myvideos, setmyvideos] = useState([]);

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setmyvideos(data.items);
    });
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search results for 
          <span style={{ color: "#F31503", marginLeft: "8px" }}>{searchTerm}</span>
        </Typography>
        <Videos myvideos={myvideos}></Videos>
      </Box>
  </>
  );
}

export default SearchFeed;
