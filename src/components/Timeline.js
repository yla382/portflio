import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../stylesheets/Timeline.scss';
import {AiFillStar} from "react-icons/ai";
import {IoMdSchool} from "react-icons/io";
import {TiLeaf} from "react-icons/ti";

export const Timeline = () => {
    return (
        <div className="timelineContainer">
            <div className="timeline-header">
                <p>Timeline</p>
            </div>
            <div className="timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Sept 2021 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<TiLeaf />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Developer Co-op</h3>
                        <h4 className="vertical-timeline-element-subtitle">Burnaby, BC</h4>
                        <p>Greenlight Innovation</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jan 2021 - Aug 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<TiLeaf />}
                    >
                        <h3 className="vertical-timeline-element-title">Data Analyst/Programmer Co-op</h3>
                        <h4 className="vertical-timeline-element-subtitle">Burnaby, BC</h4>
                        <p>Greenlight Innovation</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2019 - Present"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<IoMdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Software Systems</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>Simon Fraser University</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<AiFillStar />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;