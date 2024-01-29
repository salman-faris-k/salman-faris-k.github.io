import { FC, useState } from "react";
import "./Certifications.scss";

const navigateToUrl = (url: string) => {
  window.open(url, "blank");
};

const Certifications: FC<any> = (props: any) => {
  const [certificationsDetails] = useState(props.details);
  return (
    certificationsDetails && (
      <div className="infoCard mt-3 px-4 py-3">
        <div className="cardTitle">Certifications</div>
        {certificationsDetails.map((item: any, index: number) => (
          <div key={index} className="certificate">
            <img src="assets/images/certificate.svg" alt={"icon"} />
            <div className="details">
              <div className="title" onClick={() => navigateToUrl(item.link)}>
                {item.title}
              </div>
              <div className="subtitle">{item.authority}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};
export default Certifications;
