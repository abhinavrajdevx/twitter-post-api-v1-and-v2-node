import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const X_API_KEY = process.env.X_API_KEY as string;
const X_API_KEY_SECRET = process.env.X_API_KEY_SECRET as string;
const X_ACCESS_TOKEN = process.env.X_ACCESS_TOKEN as string;
const X_ACCESS_TOKEN_SECRET = process.env.X_ACCESS_TOKEN_SECRET as string;
const BEARER_TOKEN = process.env.BEARER_TOKEN as string;

async function main() {
  // Instantiate with desired auth type (here's Bearer v2 auth)
  const userClient = new TwitterApi({
    appKey: X_API_KEY,
    appSecret: X_API_KEY_SECRET,
    accessToken: X_ACCESS_TOKEN,
    accessSecret: X_ACCESS_TOKEN_SECRET,
  });

  const appOnlyClient = new TwitterApi(BEARER_TOKEN);

  const appOnlyClientFromConsumer = await userClient.appLogin();

  const v1Client = userClient.v1;
  const v2Client = userClient.v2;

  const mediaIds = await Promise.all([
    // file path
    v1Client.uploadMedia("./abc.jpeg"),
    // from a buffer, for example obtained with an image modifier package
  ]);

  // mediaIds is a string[], can be given to .tweet
  await v2Client.tweet({
    text: "My tweet text with two images!",
    media: { media_ids: mediaIds },
  });
}

main();
