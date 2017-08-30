const channels = [];
  let nextId = 0;
  
  
  export const resolvers = {
    Query: {
      channels: () => {
        return channels;
      },
    },
    Mutation: {
      addChannel: (root, args) => {
        const newChannel = { id: nextId++, name: args.name };
        channels.push(newChannel);
        return newChannel;
      },
    },
  };