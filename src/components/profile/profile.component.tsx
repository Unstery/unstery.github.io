import { usePortfolio } from '../../modules/portfolio';

interface ProfileProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

export const Profile = ({ categoriesRef }: ProfileProps) => {
  const { findProfile } = usePortfolio();

  const profile = findProfile();

  return (
    <section
      className="h-[calc(100vh-120px)] w-full p-16 bg-background-300 dark:bg-background-600 flex flex-col justify-center items-center gap-16 rounded-lg"
      ref={(element) => categoriesRef.current.push(element!)}
      id={profile.title}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-7xl md:text-7xl lg:text-8xl text-center">{profile.title}</h1>
        <h2 className="text-lg sm:text-3xl md:text-3xl lg:text-4xl text-center text-primary-200">{profile.status}</h2>
      </div>
      <p>{profile.description}</p>
    </section>
  );
};
