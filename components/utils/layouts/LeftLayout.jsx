import { Tabs, Tab, Paper, IconButton, Link } from "@mui/material";
import { useState, useEffect } from "react";
import images from "constants/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { PATHS_DATA, SOCIAL_DATA } from "@as/data/constants";
import Footer from "../Footer";

function LeftLayout() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const router = useRouter();
  useEffect(() => {
    const path = router.pathname;
    const index = PATHS_DATA.findIndex((item) => item.path === path);
    setValue(index);
  }, [router]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <Image
        width={250}
        height={180}
        onClick={() => router.push("/")}
        src={images.logo}
        objectFit="cover"
        alt="CodeEsi Logo"
        className="cursor-pointer"
      />
      <Paper elevation={3} className="w-10/12">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
          orientation="vertical"
          className="w-full"
        >
          {PATHS_DATA.map((path) => (
            <Tab
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                maxHeight: 45,
                minHeight: 45,
                justifyContent: "flex-start",
              }}
              icon={path.icon}
              label={path.title}
              key={path.id}
              onClick={() => router.push(path.path)}
            />
          ))}
        </Tabs>
      </Paper>
      <Footer />
    </div>
  );
}

export default LeftLayout;
