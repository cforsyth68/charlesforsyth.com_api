import routeOptions from "./options";
import getHandler from "./handlers";

const getByName = (server, options, next) => {
  // Get a message
  server.get("/api/v1/character/", routeOptions, getHandler);

  next();
};

export default getByName;
