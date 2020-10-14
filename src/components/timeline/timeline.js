import React from "react";
import "./timeline.scss";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const TimelineDiv = () => {
  const classes = useStyles();

  return (
    <>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" component="h1">
                Find your desired project
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                itaque pariatur quos, nam porro perferendis facilis aperiam
                doloribus totam minima, dolore molestias blanditiis illum
                ratione repudiandae assumenda unde aspernatur accusantium.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" component="h1">
                Learn how to contribute
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                itaque pariatur quos, nam porro perferendis facilis aperiam
                doloribus totam minima, dolore molestias blanditiis illum
                ratione repudiandae assumenda unde aspernatur accusantium.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            {/* <TimelineConnector className={classes.secondaryTail} /> */}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" component="h1">
                First pull reqeust and get reward
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                itaque pariatur quos, nam porro perferendis facilis aperiam
                doloribus totam minima, dolore molestias blanditiis illum
                ratione repudiandae assumenda unde aspernatur accusantium.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default TimelineDiv;
