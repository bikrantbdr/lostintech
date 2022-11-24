import { ReactComponent as DefaultIcon } from "./work.svg";
import { ReactComponent as CodingUniverseIcon } from "./code.svg";
import { ReactComponent as HardwareIcon } from "./hardware.svg";
import { ReactComponent as CssIcon } from "./css.svg";
import { ReactComponent as AiIcon } from "./ai.svg";
import styled from "styled-components";
import timelineElements from "./timelineData";
import './Timeline.css'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


const TimelineWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100% auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 24px;
  justify-content: center;
`

function Timeline() {
  let codingUniverseIconStyles = { background: "#06D6A0" };
  let hardwareIconStyles = { background: "#f9c74f" };
  let cssIconStyles = { background: "#badf27c9" };
  let aiIconStyles = { background: "#a25fb3" };
  let defaultStyles = { background: "#5e5e5ec9" };


  return (
    <TimelineWrapper id='timeline'>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isCodingUniverseIcon = element.icon === "codinguniverse";
          let isCssIcon = element.icon === "css";
          let isHardwareIcon = element.icon === "hardware";
          let isAiIcon = element.icon === "ai";
          let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isCodingUniverseIcon ? codingUniverseIconStyles
                        :isCssIcon? cssIconStyles
                        :isHardwareIcon? hardwareIconStyles
                        :isAiIcon? aiIconStyles
                        :defaultStyles
                      }
              icon={
                      isCodingUniverseIcon ? <CodingUniverseIcon /> 
                    : isCssIcon? <CssIcon/>
                    : isHardwareIcon? <HardwareIcon />
                    : isAiIcon?<AiIcon/>
                    : <DefaultIcon/>
                  }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isCodingUniverseIcon ? "codingUniverseButton" 
                    :isCssIcon? "cssButton"
                    :isHardwareIcon? "hardwareButton"
                    :isAiIcon? "aiButton"
                    :"defaultButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </TimelineWrapper>
  );
}

export default Timeline;
