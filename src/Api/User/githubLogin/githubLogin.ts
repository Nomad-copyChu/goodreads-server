import axios from "axios";
import { prisma } from "../../../generated/prisma-client";
import { generateToken } from "../../../utils/generateToken";

export default {
  Mutation: {
    githubLogin: async (_, args) => {
      const { code } = args;
      const { data } = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          code,
          client_id: process.env.GITHUB_CLIENT_ID, // 내 APP의 정보
          client_secret: process.env.GITHUB_CLIENT_SECRET
        }
      );
      if (data.startsWith("error")) {
        throw Error("옳바르지 않은 코드 입니다.");
      }
      const access_token = data
        .replace("&scope=&token_type=bearer", "")
        .replace("access_token=", "");
      const userRes = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `token ${access_token}`
        }
      });
      const { login: username, email, avatar_url } = userRes?.data;
      const user = await prisma.user({ username });
      if (user) {
        //존재하는 유저라면
        return { token: generateToken(user.id), isFirst: false };
      }
      try {
        const newUser = await prisma.createUser({
          username,
          email,
          password: `${Math.random() * 10000}`,
          profilePhoto: avatar_url,
          shelves: {
            create: [{ name: "want" }, { name: "reading" }, { name: "read" }]
          }
        });
        return {
          token: generateToken(newUser.id),
          isFirst: true
        };
      } catch (e) {
        throw Error("이미 가입된 username입니다.");
      }
    }
  }
};
