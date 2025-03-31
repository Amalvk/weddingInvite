import "./Invitation.css";
import { Grid, Divider, div, Typography } from "@mui/material";
import Ghibili from '../Assets/ghibiliAA.jpg'
export default function Invitation() {
  return (
    <div className="invitation-component">
      <Grid container className="invitation-card">
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="invite-head">
          <div className="invite-head-image">
            <img className="invite-couple-image" src={Ghibili} />
          </div>
          <div className="justifyCenter">
            <div>GN</div>
            <div>BN</div>
          </div>
          <div>
            <Divider variant="middle">
              <div>Week</div>
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
                <div>Month </div>
                <div>Day </div> <div> Year </div>{" "}
              </div>
              <Divider variant="middle"></Divider>
              <div>
                <div className="justifyCenter">Description </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="invite-body">
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
