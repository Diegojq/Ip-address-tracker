import { createContext, useState, useEffect } from "react";

const IpContext = createContext();

function IpProvider({ children }) {
  const [searchIp, setSearchIp] = useState("");
  const [data, setData] = useState(null);
  const apiKey = "at_X8YZanK5nUFVN5NNhtorDUi7swa4e";
  const ipAddress = searchIp;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [apiKey, ipAddress]);

  return (
    <IpContext.Provider
      value={{
        searchIp,
        data,
        setSearchIp,
        setData,
      }}
    >
      {" "}
      {children}
    </IpContext.Provider>
  );
}

export { IpProvider, IpContext };
