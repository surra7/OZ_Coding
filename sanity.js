import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "edpp08uq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// helper function to get image url
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;

// cors (cross origin resource sharing)
// ==> 요청을 보내는 곳은 localhost 3000, 요청을 받는 sanity는 3333으로 origin이 다르기 때문에
// 원래는 resource를 share 할 수 없음. 따라서 cors를 사용해서 share할 수 있게 해줌
// 사용방법: sanity 디랙토리에서 npx sanity cors add http://localhost:3000
