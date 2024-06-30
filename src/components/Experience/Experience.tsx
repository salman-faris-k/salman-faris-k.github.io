import { FC, useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import "../Experience/Experience.scss";

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#262626",
  borderDotColor: "#d0cdc4",
  titleColor: "#405b73",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

const monthDiff = (d1: any, d2: any) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  months = Math.abs(months);
  months = months <= 0 ? 0 : months;
  return `${months} Months`;
};

const Experience: FC<any> = (props: any) => {
  const [timelineDetails] = useState(props.details.timeline);
  let currentDate: any = new Date();
  return (
    timelineDetails && (
      <div className="infoCard mt-3 px-4 py-3">
        <div className="cardTitle">Experience</div>

        <div id="timeline">
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            {timelineDetails.reverse().map((item: any, index: number) => {
              return (
                <TimelineItem key={index}>
                  <TimelineOppositeContent color="textSecondary">
                    <div className="dateElement">
                      <div className="subText">To </div>
                      <div className="date">
                        {item.to &&
                          new Intl.DateTimeFormat("en-US", {
                            dateStyle: "medium",
                          }).format(new Date(item.to))}
                        {!item.to && "Present"}
                      </div>
                      <div className="subText">From</div>
                      <div className="date">
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "medium",
                        }).format(new Date(item.from))}
                      </div>
                    </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {index !== timelineDetails.length - 1 && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="Experience">
                      <div className="Role">{item.title}</div>
                      <div className="Company">
                        {item.company},&nbsp;{item.location}
                      </div>
                      <div className="Duration">{item.timePeriod}</div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </div>
    )
  );
};
export default Experience;
