import { useState } from "react";

import { TbCopy } from "react-icons/tb";
import { TbCopyCheckFilled } from "react-icons/tb";

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <button onClick={handleCopy} className="hover:bg-gray-400 rounded-md p-2">
      {copied ? <TbCopyCheckFilled /> : <TbCopy />}
    </button>
  );
}
