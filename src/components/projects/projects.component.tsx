import { usePortfolio } from '../../modules/portfolio';
import { ProjectItem } from './project-item.component';

interface ProjectsProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

export const Projects = ({ categoriesRef }: ProjectsProps) => {
  const { findProjects } = usePortfolio();

  const projects = findProjects();

  return (
    <div
      className="w-full"
      ref={(element) => categoriesRef.current.push(element!)}
    >
      <h2 className="text-primary-200 text-2xl font-bold">{projects.title}</h2>
      <div className="flex flex-col gap-4">
        {projects.entities.map((entity) => (
          <ProjectItem key={entity.title} entity={entity} />
        ))}
      </div>
    </div>
  );
};
