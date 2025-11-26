import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setvideoDetail(data.items[0]);
    });

    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setvideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {videoDetail.snippet.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                color="#fff"
                py={1}
                px={2}
              >
                <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {videoDetail.snippet.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    ></CheckCircle>
                  </Typography>
                </Link>
                <Stack direction="row" gap={2} alignItems="center">
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(
                      videoDetail.statistics.viewCount
                    ).toLocaleString()}{" "}
                    views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(
                      videoDetail.statistics.likeCount
                    ).toLocaleString()}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            justifyContent="center"
            px={2}
            py={{ md: "1", xs: "5" }}
            alignItems="center"
          >
            <Videos myvideos={videos} direction="column"></Videos>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default VideoDetail;
