import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifyHealthcheck from "fastify-healthcheck";
import fastifySwagger from "fastify-swagger";
import swaggerConfig from "./config/swagger.config";
import getByName from "./routes/characters";
import config from "./config/settings";

const build = (options) => {
  const settings = { ...(options || config.fastifyOptionsString) };

  const app = fastify(settings);

  //  app.register(fastifyCors, { origin: "*" });
  app.register(fastifyCors, () => (req, cb) => {
    let corsOpts;
    if (/localhost/.test(req.hostname)) {
      corsOpts = { origin: "*" };
    } else {
      corsOpts = {
        origin: [`${config.protocol}://${config.address}`],
        methods: ["GET"],
      };
    }
    cb(null, corsOpts);
  });

  app.register(fastifySwagger, swaggerConfig);

  app.register(fastifyHealthcheck);

  app.register(getByName);

  return app;
};

export default build;
