import { FC, useState } from "react";
import { BodyContent, Container, Description, Section, Timeline, YearContent } from 'vertical-timeline-component-react';

const customTheme = {
    yearColor: '#405b73',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#405b73',
    subtitleColor: '#bf9765',
    textColor: '#262626',
};

const monthDiff = (d1: any, d2: any) => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    months = Math.abs(months)
    months = months <= 0 ? 0 : months;
    return `${months} Months`
}

const Experience: FC<any> = (props: any) => {
    const [timelineDetails] = useState(props.details.timeline)
    let currentDate: any = new Date();
    return timelineDetails && (
        <div className='infoCard mt-3 px-4 py-3'>
            <div className='cardTitle'>
                Experience
            </div>
            <Timeline theme={customTheme} dateFormat='short'>
                {timelineDetails.slice(0).reverse().map((timeline: any) => (
                    <Container>
                        <YearContent startDate={timeline.from} endDate={timeline.to ? timeline.to : currentDate}/>
                        <BodyContent>
                            <Section title={timeline.title}>
                                <Description variant='subtitle' text={timeline.company + ', ' + timeline.location}/>
                                <Description
                                    text={timeline.timePeriod === 'Present' ? monthDiff(new Date(), new Date(timeline.from)) : timeline.timePeriod}/>
                            </Section>
                        </BodyContent>
                    </Container>
                ))}
            </Timeline>
        </div>
    )
}
export default Experience