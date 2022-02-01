import { IconButton, Paper, Link } from "@mui/material";
import { PATHS_DATA, SOCIAL_DATA } from "@as/data/constants";

import Image from "next/image";

function Copyright() {
  return (
    <h1>
      {"Copyright © "}
      <a
        className="font-bold underline text-center text-xs sm:text-sm"
        target="blank_"
        href="https://ahmedbargady.me"
      >
        Jina Cool Projects
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </h1>
  );
}

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-center mb-2 font-semibold text-xl">FOLLOW US</h1>
      <div className="grid grid-cols-12 w-10/12 p-2 gap-2">
        {SOCIAL_DATA.map((social) => (
          <IconButton
            href={social.link}
            target="_blank"
            className="col-span-3"
            key={social.id}
          >
            <Image
              width={55}
              height={55}
              src={social.icon}
              alt={social.title}
            />
          </IconButton>
        ))}
      </div>
      <h1 className="text-xs mt-4 text-center">
        Created with ❤️ By:{" "}
        <Link href="https://ahmedbargady.me" target="_blank">
          Ahmed BARGADY
        </Link>
      </h1>
    </div>
  );
}

export default Footer;
