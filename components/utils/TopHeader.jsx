import images from "constants/images";
import Image from "next/image";
import { useRouter } from "next/router";
import NavigationMenu from "@comp/cards/NavigationMenu";
import { useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { PATHS_DATA } from "@as/data/constants";

function TopHeader() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full mb-3 flex flex-col space-y-3 md:hidden">
      <NavigationMenu
        anchorEl={anchorEl}
        open={open}
        data={PATHS_DATA}
        handleCloseMenu={handleCloseMenu}
      />
      <Grid container spacing={0}>
        <Grid
          className="flex flex-row items-center justify-start"
          item
          xs={3}
          sm={3}
        >
          <Button size="small" onClick={() => router.push("/about")}>
            about
          </Button>
        </Grid>
        <Grid
          className="items-center flex flex-col justify-center"
          item
          xs={6}
          sm={6}
        >
          <Image
            onClick={() => router.push("/")}
            src={images.logo}
            height={80}
            width={140}
            alt="CodeEsi Logo"
            className="cursor-pointer"
            objectFit="cover"
          />
        </Grid>
        <Grid
          className="flex flex-row items-center justify-end"
          item
          xs={3}
          sm={3}
        >
          <IconButton onClick={handleClickOpenMenu}>
            <MoreVert />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopHeader;
