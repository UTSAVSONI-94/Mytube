import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { CenterFocusStrong } from "@mui/icons-material";

function ChannelDetail() {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setvideos(data?.items)
    );
  }, [id]);

  console.log(videos);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div style = {{background: ' linear-gradient(90deg, rgba(0,36,35,1) 0%, rgba(9,121,116,1) 44%, rgba(0,220,255,1) 100%', height : "300px", zIndex : "10"}}></div>
          <ChannelCard channelinfo = {channelDetail} marginTop = "-110px" color = "white"></ChannelCard>
        </Box>
        <Box display="flex" p = {2}>
          <Box sx = {{mr : {sm:"40px"}}}/>
            <Videos myvideos = {videos}/>
        </Box>
      </Box> 
    </>
  );
}

export default ChannelDetail;
