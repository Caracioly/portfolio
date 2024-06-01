import { IoDocument } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { IconButton } from "@/components/iconButton";
import { CopyButton } from "./copyButton";

export function Header() {
  return (
    <main className="flex w-full justify-between p-6 text-gray-700">
      <div className="flex items-center gap-4">
        <IconButton text="Home" to={"/"}>
          <FaHome />
        </IconButton>

        <div className="flex items-center gap-0.5">
          <MdEmail />
          <label>andrecaracioly@gmail.com</label>
          <CopyButton textToCopy="andrecaracioly@gmail.com" />
        </div>
      </div>

      <div className="flex gap-4">
        <IconButton text="Works" to={"/works"}>
          <IoDocument />
        </IconButton>

        <IconButton text="Resume" to={"/resume"}>
          <FaUserTie />
        </IconButton>

        <IconButton text="Shelf" to={"/shelf"}>
          <FaBook />
        </IconButton>
      </div>
    </main>
  );
}
