"use server";

import { signIn } from "../../auth";

type Inputs = {
  email: string;
  password: string;
};

export async function authenticate(data: Inputs) {
  try {
    console.log(data);
    await signIn("credentials", {
      email: data.email,
      password: data.password,
    });
    return true;
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return false;
    }
    throw error;
  }
}
