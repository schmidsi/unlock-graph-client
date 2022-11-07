import { createYoga } from "graphql-yoga";
import { getBuiltGraphClient } from "./.graphclient";

// export default async function () {
//   const yoga = createYoga({
//     // You need to specify the path to your lambda function
//     graphqlEndpoint: "/graphql",
//     schema: (await getBuiltGraphClient()).schema,
//   });

//   return yoga;
// }

async function asdf(request: any, serverContext: any) {
  const built = await getBuiltGraphClient();

  console.log(built.schema);

  const yoga = createYoga({
    // You need to specify the path to your lambda function
    graphqlEndpoint: "/graphql",
    schema: built.schema,
  });

  return yoga.handleRequest(request, serverContext);
}

// export default { fetch: yoga.handleRequest }

export default { fetch: asdf };
