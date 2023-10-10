import { usePortfolio } from '../../modules/portfolio';

interface ProfileProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

export const Profile = ({ categoriesRef }: ProfileProps) => {
  const { findProfile } = usePortfolio();

  const profile = findProfile();
  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <div
      className="w-full p-4 bg-background-300 dark:bg-background-600 flex flex-col rounded-lg"
      ref={(element) => categoriesRef.current.push(element!)}
    >
      <h1 className="text-5xl text-center">{fullName}</h1>
      <h2 className="text-2xl">{profile.title}</h2>
      <p>{profile.description}</p>
    </div>
  );
};
