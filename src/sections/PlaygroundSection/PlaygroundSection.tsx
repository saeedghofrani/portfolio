import { FaBookOpen, FaBrain, FaPenNib, FaUtensils } from "react-icons/fa";

const collections = [
  {
    title: "Weird Stories",
    description: "Personal stories, strange memories, half-serious notes, and things that do not belong on a resume.",
    icon: FaPenNib,
    status: "Start here",
  },
  {
    title: "Notes & Blogs",
    description: "Loose writing about code, life, decisions, mistakes, ideas, and whatever keeps coming back to mind.",
    icon: FaBookOpen,
    status: "Coming soon",
  },
  {
    title: "Kitchen Logs",
    description: "Recipes, experiments, comfort food, failures, and the small cooking rules worth remembering.",
    icon: FaUtensils,
    status: "Coming soon",
  },
  {
    title: "Personal LLM System",
    description: "A private assistant layer for phone and PC: notes, search, memory, tasks, and local context.",
    icon: FaBrain,
    status: "Private build",
  },
];

const systemSteps = [
  "Keep this public page as the friendly doorway.",
  "Add a private backend later for auth, storage, and LLM calls.",
  "Connect phone and PC through the same API, not through the public portfolio bundle.",
  "Store secrets only in environment variables or a private secrets manager.",
];

const PlaygroundSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full px-6 py-10 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="max-w-3xl">
          <p className="text-small uppercase tracking-[0.18em] text-emerald-300">
            not for recruiters
          </p>
          <h1 className="page-title mt-3">Playground</h1>
          <p className="text-large mt-5">
            A separate corner for the parts of me that do not fit into projects,
            skills, or experience. Stories, recipes, messy notes, and the start
            of a private system I can use from my phone and PC.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-white/15 bg-black/25 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-emerald-400 text-black">
                    <Icon aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-emerald-300/40 px-3 py-1 text-small text-emerald-200">
                    {item.status}
                  </span>
                </div>
                <h2 className="card-title mt-5">{item.title}</h2>
                <p className="card-text mt-3">{item.description}</p>
              </article>
            );
          })}
        </div>

        <section className="rounded-lg border border-white/15 bg-emerald-950/40 p-6">
          <h2 className="card-title">How the private system should grow</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {systemSteps.map((step, index) => (
              <div key={step} className="border-l-2 border-emerald-300 pl-4">
                <p className="text-small text-emerald-200">0{index + 1}</p>
                <p className="card-text mt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default PlaygroundSection;
