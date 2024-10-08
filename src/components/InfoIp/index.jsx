import "./index.css";
import { IpContext } from "../IpContext";
import { useContext } from "react";

const InfoIp = () => {
  const { data } = useContext(IpContext);
  return (
    <div className="ipInfo">
      <section className="ipInfo__section">
        <p className="textInfo">IP ADDRESS</p>
        <span className="ipInfo__span">{data?.ip}</span>
      </section>
      <section className="ipInfo__section">
        <p className="textInfo">LOCATION</p>
        <span className="ipInfo__span">
          {data?.location?.region || "Loading..."}
        </span>
      </section>
      <section className="ipInfo__section">
        <p className="textInfo">TIMEZONE</p>
        <span className="ipInfo__span">{data?.location?.timezone}</span>
      </section>
      <section className="ipInfo__section">
        <p className="textInfo">ISP</p>
        <span className="ipInfo__span">{data?.isp || "Loading..."}</span>
      </section>
    </div>
  );
};

export { InfoIp };
