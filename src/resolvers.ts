import { Resolvers, MeshContext } from "../.graphclient";

export const resolvers: Resolvers = {
  Lock: {
    // chainName can exist already in root as we pass it in the other resolver
    chainName: (root, args, context, info) =>
      root.chainName || context.chainName || "mainnet", // The value we provide in the config
  },
  Query: {
    crossLocks: async (root, args, context, info) =>
      Promise.all(
        args.chainNames.map((chainName) =>
          context.Unlock.Query.locks({
            root,
            args,
            context: {
              ...context,
              chainName,
            },
            info,
          }).then((locks) =>
            // We send chainName here so we can take it in the resolver above
            locks.map((lock) => ({
              ...lock,
              chainName,
            }))
          )
        )
      ).then((allLocks) => allLocks.flat()),
  },
};
