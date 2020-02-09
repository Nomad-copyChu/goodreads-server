import * as aws from "aws-sdk";

export default {
  Mutation: {
    singleUpload: async (obj, { file }): Promise<string> => {
      const { filename, mimetype, createReadStream, encoding } = await file;
      console.log(mimetype, encoding);
      const s3 = new aws.S3({
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRET_ACCESSKEYID
      });
      const key =
        new Date()
          .toISOString()
          .replace(/T/, " ") // replace T with a space
          .replace(/\..+/, "") +
        "-" +
        filename;
      const stream = createReadStream();
      const response = await s3
        .upload({
          Bucket: process.env.BUCKET_NAME,
          Key: key,
          ACL: "public-read",
          Body: stream
        })
        .promise()
        .catch();
      const url = response.Location;

      return url;
    }
  }
};
