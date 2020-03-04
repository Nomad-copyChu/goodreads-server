export default {
  Query: {
    getComments: async (_, args) => {
      const { cursor, limit } = args;
      console.log("done");
      return [
        {
          id: "asd-asdf",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "asd-asdf1",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "asd-asdf2",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "asd-asdf3",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "asd-asdf4",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "asd-asdf5",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "asd-asdf6",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "asd-asdf7",
          username: "이창주",
          message: "힘내세요 코로나",
          editedIpAddress: "192.168.10.1",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
    }
  }
};
