// import { updateSession } from "./lib/actions";
// export async function middleware(request) {
//   return await updateSession(request);
// }
export { auth as middleware } from "@/lib/auth";
