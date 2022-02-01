import { CardActionArea, Paper } from "@mui/material";
import Link from "next/link";

function ActivityCard({ activity }) {
  return (
    <Link
      style={{ height: "100%" }}
      href={`/activities/${activity.link}`}
      passHref
    >
      <CardActionArea
        style={{
          borderRadius: "16px",
          height: "100%",
        }}
      >
        <Paper
          className="flex h-full w-full flex-col items-center space-y-4 rounded-2xl p-5 "
          elevation={3}
        >
          {activity.image}
          <h1 className="text-2xl opacity-90 text-center ">{activity.title}</h1>
          <h1 className="text-base opacity-80 text-center font-light">
            {activity.description}
          </h1>
        </Paper>
      </CardActionArea>
    </Link>
  );
}

export default ActivityCard;
