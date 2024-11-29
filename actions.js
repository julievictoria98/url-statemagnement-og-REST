"use server";
import { revalidatePath } from "next/cache";

export async function sendData(prev, formData) {
  "use server";
  console.log("sending data");

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  if (!data.name) {
    return { error: "name is requried" };
  }

  // await new Promise((resolve) => setTimeout(resolve, 500));
  // await postSub(data);

  await wait(1000);

  // use action state
  revalidatePath("/");
}
