const swaggerConfig = {
  exposeRoute: true,
  routePrefix: "/",
  swagger: {
    info: {
      title: "Premise Take-home API",
      description:
        "This API was built for the take-home challenge requested by Premise",
      version: "v1",
    },
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

export default swaggerConfig;
