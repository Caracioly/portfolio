import { Header } from "@/components/header";
import { SideBar } from "@/components/sidebar";

export default function Resume() {
  return (
    <div className="flex h-screen font-jetMono bg-[#f0f0f0]">
      <div className="w-20">
        <SideBar />
      </div>
      <div className="flex flex-col items-center w-full overflow-auto p-8">
        <div className="w-full">
          <Header />
        </div>
        <div className="flex flex-col text-left w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          <Section title="Resumo">
            <p>
              Desenvolvedor especializado em <strong>React</strong>,{" "}
              <strong>Tailwind CSS</strong>, <strong>Vite</strong> e{" "}
              <strong>TypeScript</strong>, com sólida experiência em JavaScript.
              Tenho mais de três anos de experiência com{" "}
              <strong>JavaScript</strong>. Minhas principais ferramentas incluem{" "}
              <strong>Vite</strong> e <strong>Expo</strong>, e sou adepto das
              metodologias <strong>ágeis (Scrum)</strong>. No desenvolvimento de
              aplicações, utilizo frameworks como{" "}
              <strong>React, React Native</strong>, e bibliotecas para o teste
              das aplicações como <strong>Jest e React Testing Library</strong>.
            </p>
          </Section>

          <Section title="Habilidades">
            <p>
              <strong>Linguagens</strong>: TypeScript - JavaScript - Python -
              Lua
            </p>
            <p>
              <strong>Tecnologias</strong>: Node.js - Api RestFul
            </p>
            <p>
              <strong>Ferramentas</strong>: Vite - Expo - Versionamento Git /
              GitHub
            </p>
            <p>
              <strong>Frameworks</strong>: React - React Native - Tailwind CSS -
              Jest - React Testing Library
            </p>
            <p>
              <strong>Metodologias</strong>: Agile (Scrum)
            </p>
          </Section>

          <Section title="Experiência">
            <p>
              Na Mochila - na-mochila.org/
              <p>Professor de Robótica </p>
              Março de 2022 - Março de 2024 Nova Era, Minas Gerais, Brasil
            </p>
          </Section>

          <Section title="Formação Acadêmica">
            <p>
              Formação Acadêmica UNOPAR - Universidade Norte do Paraná
              - unopar.com.br/
            </p>
            <p>
              Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de
              Sistemas
            </p>
            <p>Janeiro de 2022 - Dezembro de 2023</p>
            <p>Nova Era, Minas Gerais, Brasil</p>
          </Section>

          <Section title="Linguagens">
            <p>Português - Nativo</p>
            <p>Inglês - Avançado</p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-800">{children}</div>
      <hr className="mt-4" />
    </div>
  );
}
