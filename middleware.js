import { updateSession } from "./lib/actions";
export async function middleware(request) {
  return await updateSession(request);
}
