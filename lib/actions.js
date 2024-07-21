import axios from "axios";
import { jwtDecrypt, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export const getSession = async () => {
  const session = cookies.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
};

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const res = await axios.post("http://localhost:2222/users/login", {
    email: email,
    password: password,
  });
  const ack = await res.data;
  if (await ack) {
    const user = { email: email, password: password };
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    cookies().set("session", session, { expires, httpOnly: true });
    return true;
  }
};

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export const updateSession = async (request) => {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
};

export const encrypt = async (payload) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10s from now")
    .sign(key);
};

export const decrypt = async (session) => {
  const { payload } = await jwtVerify(session, key, { algorithms: ["HS256"] });
  return payload;
};
