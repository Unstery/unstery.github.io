import { usePortfolio } from '../../modules/portfolio';
import { ProjectItem } from './project-item.component';

export const Projects = () => {
  const { findProjects } = usePortfolio();

  const projects = findProjects();

  return (
    <div>
      <h2 className="text-primary-200 text-2xl font-bold">{projects.title}</h2>
      <div className="flex flex-col gap-4">
        {projects.entities.map((entity) => (
          <ProjectItem key={entity.title} entity={entity} />
        ))}
      </div>
    </div>

  );
};
