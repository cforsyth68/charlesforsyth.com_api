import build from "./app";
import config from "./config/settings";

const server = build();

const start = async () => {
  try {
    await server.listen(config.port, config.address);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

/**
 * Function to gracefully exit docker containers shut down by container host
 * @param {*} signal Signal attached by listener event
 */
async function closeGracefully(signal) {
  // eslint-disable-next-line no-console
  console.log(`*^!@4=> Received signal to terminate: ${signal}`);

  await server.close();

  process.exit(0);
}

// event signals that come in from container host like K8s
process.on("SIGINT", closeGracefully);
process.on("SIGTERM", closeGracefully);

// eslint-disable-next-line no-console
console.log(
  `Server running${config.isDocker === true ? " in docker container." : ""}. ${
    config.serverUrl
  }`
);
