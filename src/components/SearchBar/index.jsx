import { useContext } from "react";
import Path from "../../icons/Path.svg";
import { IpContext } from "../IpContext";
import "./index.css";

export const SearchBar = () => {
  const { setSearchIp, setData } = useContext(IpContext);
  return (
    <div className="search">
      <input
        type="searh"
        className="inputSearch"
        onChange={(event) => setSearchIp(event.target.value)}
      />
      <div className="search__button" onClick={setData}>
        <img src={Path} className="search__iconButton" />
      </div>
    </div>
  );
};
