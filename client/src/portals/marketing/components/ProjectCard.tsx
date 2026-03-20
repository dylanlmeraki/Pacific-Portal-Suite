import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Media } from "./Media";

export type ProjectSummary = {
  slug: string;
  title: string;
  county?: string;
  location?: string;
  category?: string;
  image: string;
};

export function ProjectCard(props: { project: ProjectSummary }) {
  const p = props.project;

  return (
    <Link
      to={`/project/${p.slug}`}
      className="group block bg-white rounded-lg border border-[color:var(--pe-border)] overflow-hidden
                 hover:-translate-y-1 hover:shadow-[var(--pe-shadow-md)] transition-all duration-200
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pe-cyan)] focus-visible:ring-offset-2"
    >
      <div className="relative h-52 overflow-hidden">
        <Media kind="image" src={p.image} alt={p.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--pe-navy)]/45 to-transparent" />
        {p.category && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[color:var(--pe-text)]
                           text-xs font-bold px-3 py-1 rounded-md">
            {p.category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-extrabold text-[color:var(--pe-text)] mb-1 line-clamp-2">{p.title}</h3>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="line-clamp-1">{p.county ?? p.location ?? "Bay Area"}</span>
        </div>
      </div>
    </Link>
  );
}
