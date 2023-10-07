import { usePortfolio } from '../../modules/portfolio';

export const Profile = () => {
  const { findProfile } = usePortfolio();

  const profile = findProfile();
  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <div className="w-full p-4 bg-background-300 dark:bg-background-600 flex flex-col rounded-lg">
      <h1 className="text-text-700 dark:text-text-200 text-5xl text-center">{fullName}</h1>
      <h2 className="text-text-700 dark:text-text-200 text-2xl">{profile.title}</h2>
      <p className="text-text-700 dark:text-text-200">{profile.description}</p>
    </div>
  );
};
