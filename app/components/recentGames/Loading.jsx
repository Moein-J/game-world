import { Skeleton } from "@mui/material";
const Loading = () => {
  return (
    <Skeleton
      // animation="wave"
      sx={{ bgcolor: "grey.900" }}
      variant="rectangular"
      width={210}
      height={118}
    />
  );
};

export default Loading;
