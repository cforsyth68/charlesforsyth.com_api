const routeOptions = {
  schema: {
    description: "Wrapper for Breaking Bad API, search by character name.",
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            char_id: { type: "integer" },
            name: { type: "string" },
            birthday: { type: "string" },
            occupation: {
              type: "array",
              items: {
                type: "string",
              },
            },
            img: { type: "string" },
            status: { type: "string" },
            nickname: { type: "string" },
            appearance: {
              type: "array",
              items: {
                type: "integer",
              },
            },
            portrayed: { type: "string" },
            category: { type: "string" },
            better_call_saul_appearance: {
              type: "array",
              items: {
                type: "integer",
              },
            },
          },
        },
      },
    },
    querystring: {
      name: { type: "string" },
    },
  },
};

export default routeOptions;
