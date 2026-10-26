import { createContext, ReactNode, useContext, useState } from "react";
import { Service } from "../data/streamingData";

const StreamingContext = createContext<{
  service: Service;
  setService: (s: Service) => void;
}>({ service: "bandcamp", setService: () => {} });

export const StreamingProvider = ({ children }: { children: ReactNode }) => {
  const [service, setService] = useState<Service>("bandcamp");
  return (
    <StreamingContext.Provider value={{ service, setService }}>
      {children}
    </StreamingContext.Provider>
  );
};

export const useStreaming = () => useContext(StreamingContext);
