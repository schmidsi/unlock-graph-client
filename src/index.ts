import { getBuiltGraphSDK, execute } from "../.graphclient";
import { gql } from "graphql";

// Cross Chain Call from additional type definitions and resolvers
async function main() {
  //   const sdk = getBuiltGraphSDK();
  //   // Second parameter is the context value
  //   const results = await sdk.CrossLocksExample({
  //     chainNames: ["mainnet", "arbitrum", "polygon", "optimism"],
  //   });

  const result = await execute(
    gql`
      query CrossLocksExample($chainNames: [String!]!) {
        crossLocks(first: 2, chainNames: $chainNames) {
          id
          name
        }
      }
    `,
    { chainNames: ["mainnet"] }
  );

  console.table(result.data.crossLocks);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
