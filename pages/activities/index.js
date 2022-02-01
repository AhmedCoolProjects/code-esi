import Head from "next/head";
import ActivityCard from "@comp/cards/ActivityCard";
import { ActivitiesData } from "@as/data/constants";
import { Grid } from "@mui/material";

function Index() {
  return (
    <div>
      <Head>
        <title>CODE ESI | Activities</title>
      </Head>
      <div className="w-full py-8">
        <Grid container spacing={3}>
          {ActivitiesData.map((activity) => (
            <Grid key={activity.id} item sm={6} xs={12} md={4}>
              <ActivityCard activity={activity} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Index;
