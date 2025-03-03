import "./Event.css";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepConnector,
} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const steps = [
  {
    label: "Day 1",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Day 2",

    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Day 3",

    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Event() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (event) => {
    event.stopPropagation();
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const chooseDay = (day) => {
    console.log(day, activeStep);
    setActiveStep(day);
  };
  return (
    <Box sx={{ maxWidth: 400, mx: "2rem" }} className="event-text">
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          return (
            <Step
              key={step.label}
              onClick={() => {
                chooseDay(index);
              }}
            >
              <StepLabel
                StepIconProps={{
                  sx: {
                    "&.Mui-active": {
                      color: "var(--color-primary)", // Icon number color (foreground)
                      // backgroundColor: "blue", // Background color of active icon
                      borderRadius: "50%", // Ensure the circle stays round
                      // padding: "10px", // Optional padding for icon
                      boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)", // Optional shadow
                    },
                  },
                }}
              >
                <div className="event-day">{step.label}</div>
              </StepLabel>
              <StepContent
                sx={{
                  minWidth: { sm: "15rem", md: "30rem", lg: "60rem" },
                  textAlign: "left",
                }}
              >
                <div
                  className="eventDescription"
                  style={{ fontFamily: "var(--font-family-Sofia)" }}
                >
                  {step.description}
                </div>
                <Box sx={{ mb: 0 }}>
                  <div>
                    {index < 2 && (
                      <Button
                        size="small"
                        onClick={handleNext}
                        sx={{
                          mt: 1,
                          mr: 1,
                          color: "var(--color-primary)",
                        }}
                      >
                        {"Next"}
                        {/* {index === steps.length - 1 ? "Finish" : "Next"} */}
                        <NavigateNextIcon />
                      </Button>
                    )}
                    {/* <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {" "}
                      {index === 0
                        ? " "
                        : index === 2
                        ? " Back to Day1"
                        : "Back to Day2"}
                    </Button> */}
                  </div>
                </Box>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>

      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}
