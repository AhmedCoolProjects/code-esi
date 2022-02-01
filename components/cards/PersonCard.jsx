import Image from "next/image";
import { IconButton, Paper } from "@mui/material";
import images from "constants/images";

function PersonCard({ user }) {
  return (
    <Paper
      elevation={3}
      className="p-5 h-full flex flex-col space-y-2 items-center w-full rounded-lg"
    >
      <div className="w-[200px] relative h-[200px]">
        <Image
          src={user.image}
          alt={user.first_name + " " + user.last_name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h1 className="px-1 font-light text-xl ">
        {user.first_name + " " + user.last_name}
      </h1>
      <h1 className="px-1 font-light text-base ">{user.profession}</h1>
      <div className="w-full items-center py-2 justify-center space-x-2 flex flex-row">
        <IconButton href={user.linkedin} target="_blank">
          <Image src={images.linkedin} width={40} height={40} alt={user.name} />
        </IconButton>
        <IconButton href={`mailto:${user.email}`} target="_blank">
          <Image src={images.outlook} width={40} height={40} alt={user.name} />
        </IconButton>
      </div>
    </Paper>
  );
}

export default PersonCard;
