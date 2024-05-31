export function SideBar() {
  return (
    <main className="w-full">
      <div className="gap-2 flex flex-col justify-center items-center p-4 border-black h-screen">
        <img
          className="size-8 hover:size-10"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="github-icon"
        />

        <img
          className="size-8 hover:size-10"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          alt="linkedin-icon"
        />
      </div>
    </main>
  );
}
