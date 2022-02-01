import { SOCIAL_DATA } from "@as/data/constants";
import Image from "next/image";
import { IconButton, Paper, Link } from "@mui/material";

function BottomFooter() {
  return (
    <Paper elevation={3} className="flex my-7 flex-col md:hidden">
      <div className="py-2 flex w-full flex-row items-center justify-center space-x-1">
        {SOCIAL_DATA.map((social) => (
          <IconButton href={social.link} target="_blank" key={social.id}>
            <Image
              width={26}
              height={26}
              src={social.icon}
              alt={social.title}
            />
          </IconButton>
        ))}
      </div>
      <h1 className="text-xs mt-4 mb-3 text-center">
        Created with ❤️ By:{" "}
        <Link href="https://ahmedbargady.me" target="_blank">
          Ahmed BARGADY
        </Link>
      </h1>
    </Paper>
  );
}

export default BottomFooter;
