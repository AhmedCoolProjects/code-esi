import { Popover } from "@mui/material";
import PersonCard from "./PersonCard";

function PopupPersonAvatar({ id, open, anchorEl, handleClose, user }) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {user && <PersonCard user={user} />}
    </Popover>
  );
}

export default PopupPersonAvatar;
