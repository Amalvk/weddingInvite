import "./Invitation.css";
import { Grid, Divider, Typography } from "@mui/material";

export default function Invitation() {
  return (
    <div className="invitation-component">
      <Grid container className="invitation-card">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="invite-head">
          <div className="invite-head-image">
            <div className="invite-head-image-file">Image</div>
          </div>
          <div className="justifyCenter">
            <Typography>GN</Typography>
            <Typography>BN</Typography>
          </div>
          <div>
            <Divider variant="middle">
              <Typography>Week</Typography>
            </Divider>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  maxWidth: "12rem",
                  margin: "auto",
                }}
              >
                {" "}
                <Typography>Month </Typography>
                <Typography>Day </Typography> <Typography> Year </Typography>{" "}
              </div>
              <Divider variant="middle"></Divider>
              <div>
                <Typography className="justifyCenter">Description </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="invite-body">
          <div className="justifyCenter">Head</div>
          <div className="family-details-head">
            <div className="family-details-groom">
              <div>G: </div>
              <div>G Name </div>
              <div>S/o F name</div>
              <div>G Address</div>
            </div>
            <div className="family-details-bride">
              <div>B: </div>
              <div>B Name </div>
              <div>D/o F name</div>
              <div>G Address</div>
            </div>
          </div>
          <div className="displayBlock">
            <div>Described date</div>
            <div>Location</div>
            <div>W content</div>
            <div>Tail</div>
            <Divider variant="middle" />
            <div>Footer</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
