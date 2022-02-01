import { Skeleton, IconButton } from "@mui/material";

function PersonAvatarSkeleton({ size }) {
  return (
    <IconButton>
      <Skeleton
        animation="wave"
        variant="circular"
        width={size}
        height={size}
      />
    </IconButton>
  );
}

export default PersonAvatarSkeleton;
