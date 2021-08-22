import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.breakingbadapi.com/api",
  timeout: 1000,
});

const getHandler = async (request, reply) => {
  const { name } = request.query;

  // eslint-disable-next-line no-console
  console.log(`search name: ${name}`);

  let path;
  if (name) {
    path = `/characters?name=${name}`;
  } else {
    path = "/characters";
  }

  const { data, status } = await instance.get(path);

  // eslint-disable-next-line no-console
  console.log(`response data`, data);

  reply.status(status).send(data);
};

export default getHandler;
