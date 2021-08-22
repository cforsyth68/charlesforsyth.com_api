import path from "path";
import os from "os";
import { version as fastifyVersion } from "fastify/package.json";
import isDocker from "is-docker";
import { name, version } from "../../package.json";

const config = {
  packageName: name,
  packageVersion: version,
  fastifyVersion,
  projectFolderFromScript: path.normalize(
    path.join(__dirname, path.sep, "..", path.sep)
  ),
  fastifyOptionsString:
    process.env.FASTIFY_OPTIONS || '{ "logger": { "level": "info" } }',
  hostname: os.hostname(),
  protocol: "http",
  address: process.env.HTTP_ADDRESS || "127.0.0.1",
  port: process.env.HTTP_PORT || 8000,
  isDocker: isDocker(),
};

if (!process.env.HTTP_ADDRESS) {
  config.address = config.isDocker === true ? "0.0.0.0" : "127.0.0.1";
}

config.serverUrl = `${config.protocol}://${config.address}:${config.port}`;

export default config;
