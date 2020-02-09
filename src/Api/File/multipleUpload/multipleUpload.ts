export default {
  Mutation: {
    multipleUpload: async (obj, { files }) => {
      files.map((file) => console.log("do what want"));
    }
  }
};
