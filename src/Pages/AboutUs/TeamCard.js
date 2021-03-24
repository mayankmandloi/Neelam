import { Grid } from "@material-ui/core";

export const TeamCard = () => {
  return (
    <>
      <div class="profile-card">
        <img class="profile-image" src="https://picsum.photos/174/90" />
        <h3 class="profile-name">Name Goes Here</h3>
        <p class="profile-description">
          Nilam Industries is one of the best organizations you will find in the
          Madhya Pradesh Region for handling drip irrigation system. We are the
          serving as the manufacturer of all the drip irrigation best quality
          equipment.
        </p>
      </div>
    </>
  );
};
export const Teams = () => {
  return (
    <>
      <Grid xs={1}></Grid>
      <Grid container item xs={10}>
        <Grid item xs={6} md={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={3}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={3}>
          <TeamCard />
        </Grid>
      </Grid>
    </>
  );
};

