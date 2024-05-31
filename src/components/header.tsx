import { IoDocument } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { IconButton } from "@/components/iconButton";
import { CopyButton } from "./copyButton";

export function Header() {
  return (
    <main className="flex w-full justify-between p-6 text-gray-700">

      <div className="flex items-center gap-2">
        <MdEmail />
        <label>andrecaracioly@gmail.com</label>
        <CopyButton textToCopy="andrecaracioly@gmail.com" />
      </div>

      <div className="flex gap-4">
        <IconButton text="Works">
          <IoDocument />
        </IconButton>

        <IconButton text="Resume">
          <FaUserTie />
        </IconButton>

        <IconButton text="Shelf">
          <FaBook />
        </IconButton>
      </div>
    </main>
  );
}
