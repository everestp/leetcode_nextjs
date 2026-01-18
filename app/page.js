import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { onBoardUser } from "@/module/auth/actions";
export default  async function Home() {
await onBoardUser()
  return (
  <div>
    <UserButton/>
  </div>
  );
}
