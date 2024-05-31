export function SideBar() {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <main className="w-full">
      <div className="gap-4 flex flex-col justify-center items-center border-black h-screen ">
        <button onClick={() => openInNewTab("https://github.com/Caracioly")}>
          <img
            className="size-8 hover:size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="github-icon"
          />
        </button>

        <button
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/acaracioly/")
          }
        >
          <img
            className="size-8 hover:size-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
            alt="linkedin-icon"
          />
        </button>
      </div>
    </main>
  );
}
