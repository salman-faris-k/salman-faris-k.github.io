import { FC, useState } from "react";
import "./Education.scss";

const navigateToUrl = (url: string) => {
  window.open(url, "blank");
};

const Education: FC<any> = (props: any) => {
  const [educationDetails] = useState(props.details);
  return (
    educationDetails && (
      <div className="infoCard mt-3 px-4 py-3">
        <div className="cardTitle">Education</div>
        {educationDetails.map((item: any, index: number) => (
          <div key={index} className="educationCard">
            <img src={item.image} alt={"icon"} />
            <div className="details">
              <div className="title">{item.title}</div>
              <div
                className="subtitle"
                onClick={() => navigateToUrl(item.link)}
              >
                {" "}
                {item.subtitle}
              </div>
              <div className="year">{item.year}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};
export default Education;
