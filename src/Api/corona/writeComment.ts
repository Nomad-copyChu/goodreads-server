export default {
  Mutation: {
    writeComment: async (_, args) => {
      const { username, message } = args;

      return {
        id: "asd-asdf",
        username: "이창주",
        message: "힘내세요 코로나",
        editedIpAddress: "192.168.10.1",
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }
  }
};
