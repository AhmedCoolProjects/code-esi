import { IconButton } from "@mui/material";
import Image from "next/image";

function PersonAvatar({ member, id, handleClick }) {
  return (
    <IconButton onClick={(e) => handleClick(e, member)} aria-describedby={id}>
      <Image
        width={55}
        height={55}
        src={member.image}
        className="rounded-full"
        objectFit="cover"
        alt={member.first_name + " " + member.last_name}
      />
    </IconButton>
  );
}

export default PersonAvatar;
