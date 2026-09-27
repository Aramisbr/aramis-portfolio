import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Award,
  BadgeCheck,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { profileImage } from "@/assets/profile-image";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Aramis Alves — Salesforce Developer";
const DESCRIPTION =
  "Portfólio de Aramis Alves, Salesforce Developer Jr. na OSF Digital. Apex, Flows, LWC, Sales Cloud, Service Cloud e Agentforce.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "Triple Star Ranger",
    text: "Reconhecimento Trailhead por evolução contínua no ecossistema Salesforce.",
  },
  {
    icon: BadgeCheck,
    title: "12+ Superbadges",
    text: "Desafios práticos concluídos em administração e desenvolvimento.",
  },
  {
    icon: Globe,
    title: "Inglês Fluente",
    text: "Rotina diária com times globais em ambiente 100% remoto.",
  },
];

const EXPERIENCE = [
  {
    role: "Salesforce Developer Jr — OSF Digital",
    period: "Fev 2026 – Presente",
    text: "Entrega de configurações, desenvolvimento customizado e automações declarativas para contas internacionais como Tramontina e ABC. Trabalho remoto em ambiente ágil com Scrum, Git Flow e Jira.",
  },
  {
    role: "OSF Academy — Salesforce Core Developer",
    period: "Set 2025 – Out 2025",
    text: "Programa intensivo em inglês focado em Administração e Desenvolvimento Salesforce. Apex, Flows, LWC, modelo de segurança e boas práticas da plataforma.",
  },
  {
    role: "Mentoria — Corporação Salesforce",
    period: "2025",
    text: "Programa de mentoria profissional focado em preparação prática para o ecossistema Salesforce, com projetos reais supervisionados por especialistas.",
  },
];

const PROJECTS = [
  {
    title: "Chatbot IA Conversacional",
    text: "Aplicação web capaz de extrair informações de vídeos do YouTube, PDFs e sites, mantendo conversas contextuais com o usuário.",
    tags: ["Python", "Flask", "LangChain", "OpenAI API"],
  },
  {
    title: "Bot de Pedidos WhatsApp",
    text: "Chatbot inteligente para gerenciamento de fluxos de pedidos dinâmicos com integrações via API e IA conversacional.",
    tags: ["n8n", "APIs", "OpenAI API"],
  },
  {
    title: "Automação de Resumos em Vídeo",
    text: "Solução full-stack que processa vídeos, extrai áudio e gera resumos automatizados usando IA.",
    tags: ["Python", "Django", "OpenAI API"],
  },
];

const SKILLS = [
  {
    category: "Salesforce",
    items: [
      "Apex",
      "Flows",
      "LWC",
      "SOQL/SOSL",
      "Sales Cloud",
      "Service Cloud",
      "Agentforce",
      "Triggers",
    ],
  },
  { category: "Linguagens", items: ["Python", "JavaScript", "SQL", "HTML", "CSS"] },
  { category: "Ferramentas", items: ["Git/GitHub", "Postman", "VS Code", "n8n", "CI/CD"] },
  { category: "Metodologias", items: ["Scrum", "Kanban", "Agile"] },
];

const WHATSAPP_URL = "https://wa.me/5582988597622";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const CONTACTS = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "(82) 98859-7622",
    href: WHATSAPP_URL,
  },
  {
    icon: Mail,
    label: "Email",
    value: "aramisalvez@hotmail.com",
    href: "mailto:aramisalvez@hotmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aramis-alves",
    href: "https://www.linkedin.com/in/aramis-alves/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Aramisbr",
    href: "https://github.com/Aramisbr",
  },
];

const GITHUB_URL = "https://github.com/Aramisbr";
const LINKEDIN_URL = "https://www.linkedin.com/in/aramis-alves/";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:py-14">
      <div ref={reveal.ref} className={reveal.className}>
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="text-gradient">{title}</span>
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary/70" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          Aramis<span className="text-primary"> Alves</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 pb-5 backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pt-20 pb-8 sm:px-8 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-accent" />
            Disponível para novas oportunidades
          </p>
          <h1 className="font-display text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
            Olá, eu sou <span className="text-gradient">Aramis Alves</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-accent sm:text-xl">
            Salesforce Developer Jr. na OSF Digital
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvedor Salesforce com experiência em Sales Cloud, Service Cloud, Order
            Management (SOM) e Agentforce. Trailhead Triple Star Ranger apaixonado por
            construir soluções CRM que geram valor real para o negócio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
            >
              Ver Projetos
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-[var(--gradient-electric)] opacity-25 blur-2xl" />
            <img
              src={profileImage}
              width={1024}
              height={1024}
              alt="Foto de perfil de Aramis Alves"
              className="relative size-56 rounded-full border-2 border-primary/50 object-cover sm:size-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <Section id="sobre" title="Sobre Mim">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sou desenvolvedor Salesforce com experiência prática em configuração, Apex,
            Flows e automações para clientes internacionais de grande porte. Atualmente na
            OSF Digital, colaboro com times globais na entrega de soluções para grandes
            contas internacionais. Inglês fluente, ambiente 100% remoto e metodologia ágil fazem parte
            da minha rotina diária. Estou cursando Análise e Desenvolvimento de Sistemas no
            Cesmac e em constante evolução no ecossistema Salesforce.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="surface-card surface-card-hover p-6">
                <Icon className="size-7 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experiencia" title="Experiência">
          <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
            {EXPERIENCE.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute top-6 -left-[31px] size-3 rounded-full bg-primary ring-4 ring-background sm:-left-[39px]" />
                <div className="surface-card surface-card-hover p-6">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{item.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projetos" title="Projetos">
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="surface-card surface-card-hover flex flex-col p-6"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="habilidades" title="Habilidades Técnicas">
          <div className="grid gap-6 sm:grid-cols-2">
            {SKILLS.map((group) => (
              <div key={group.category} className="surface-card surface-card-hover p-6">
                <h3 className="text-base font-semibold text-accent">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contato" title="Contato">
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Vamos conversar? Estou aberto a oportunidades e colaborações.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACTS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface-card surface-card-hover block p-6"
              >
                <Icon className="size-6 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{label}</h3>
                <p className="mt-1 text-sm break-all text-muted-foreground">{value}</p>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <p className="text-center text-sm text-muted-foreground">
          © 2026 Aramis Alves. Desenvolvido com dedicação.
        </p>
      </footer>
    </div>
  );
}
