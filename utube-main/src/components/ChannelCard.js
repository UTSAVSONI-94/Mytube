import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelinfo, marginTop, color }) => {
  return (
    <>
      <Box
        height="10"
        sx={{
          borderShadow: "none",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "326px",
          width: { xs: "356px", md: "320px" },
          margin: "auto",
          marginTop,
        }}
      >
        <Link to={`/channel/${channelinfo?.id?.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#FFF",
            }}
          ></CardContent>
          <CardMedia
            image={
              channelinfo?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channelinfo?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography sx={{ color: "white", fontSize: 19, marginLeft : "25px" }} variant="h6">
            {channelinfo?.snippet?.title}{" "}
            <CheckCircle
              sx={{ fontSize: 13, color: "gray", ml: "5px" }}
            ></CheckCircle>
          </Typography>
          {channelinfo?.statistics?.subscriberCount && (
          <Typography  sx={{ fontSize: '15px', fontWeight: 500, color: 'gray', marginLeft : "25px"}}>
            {parseInt(
              channelinfo?.statistics?.subscriberCount
            ).toLocaleString()}
             {" "}Subscribers
          </Typography> )}
        </Link>
      </Box>
    </>
  );
};

export default ChannelCard;
