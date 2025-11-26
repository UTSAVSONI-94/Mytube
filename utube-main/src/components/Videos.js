import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ myvideos, direction }) => {
  return(
    <>
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap = {2}>
      {myvideos.map((item, index) => (
        <Box key = {index}>
          {item.id.videoId && <VideoCard video = {item}/>}
          {item.id.channelId && <ChannelCard channelinfo = {item}/>}
        </Box>
      ))}
    </Stack>
    </>
  );
};

export default Videos;

