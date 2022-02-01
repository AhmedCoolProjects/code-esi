import { Paper, Skeleton, IconButton } from "@mui/material";

function PersonCardSkeleton() {
  return (
    <Paper
      elevation={3}
      className="p-5 flex flex-col space-y-2 items-center w-full rounded-lg"
    >
      <Skeleton animation="wave" variant="circular" width={200} height={200} />
      <Skeleton
        animation="wave"
        height={24}
        width="60%"
        style={{ marginLeft: 4, marginRight: 4 }}
      />
      <Skeleton
        animation="wave"
        height={20}
        width="80%"
        style={{ marginLeft: 4, marginRight: 4 }}
      />
      <div className="w-full items-center py-2 justify-center space-x-2 flex flex-row">
        <IconButton>
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        </IconButton>
        <IconButton>
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        </IconButton>
      </div>
    </Paper>
  );
}

export default PersonCardSkeleton;
