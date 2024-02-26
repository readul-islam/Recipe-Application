import { Document } from "mongoose";

interface TUser extends Document  {
  name: string;
  provider: "google" | "local";
  email: string;
  password: string;
  needPasswordChange: boolean;
  imageUrl: string;
  emailVerified: boolean;
}

export { TUser }
