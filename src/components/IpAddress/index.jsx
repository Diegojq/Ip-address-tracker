import { InfoIp } from "../InfoIp";
import { SearchBar } from "../SearchBar";
import "./index.css";

export const IpAddress = () => {
  return (
    <div className="ip__background">
      <section className="ip__info">
        <h1 className="title">Ip Address Tracker</h1>
        <SearchBar />
        <InfoIp />
      </section>
    </div>
  );
};
