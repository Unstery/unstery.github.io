import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { usePortfolio } from '../../modules/portfolio';
import { LanguagesEnum } from '../../enums/languages.enum';

interface ProfileProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

const CV_FR = '/portfolio/cv/Bastien_Faisant_CV.pdf';
const CV_EN = '/portfolio/cv/Bastien_Faisant_english_CV.pdf';

export const Profile = ({ categoriesRef }: ProfileProps) => {
  const { t, i18n } = useTranslation();

  const [cvPdf, setCVPdf] = useState(CV_EN);

  const { findProfile } = usePortfolio();

  const profile = findProfile();

  useEffect(() => {
    switch (i18n.language) {
      case LanguagesEnum.FR:
        setCVPdf(CV_FR);
        break;
      default:
        setCVPdf(CV_EN);
        break;
    }
  }, [i18n.language]);

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
      <div className="flex flex-row justify-center items-center gap-8">
        <a href="https://www.linkedin.com/in/bastienfaisant/" target="_blank" rel="noreferrer">
          <img src="/portfolio/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
        </a>
        <a href="mailto:fst09bastien@gmail.com" target="_blank" rel="noreferrer">
          <img src="/portfolio/gmail.svg" alt="Gmail" className="h-8 w-8" />
        </a>
        <a
          href={cvPdf}
          // download={`cv_${i18n.language}_bastien_faisant`} // Directly download the PDF file
          target="_blank" // Open the PDF file in another tab
          className="h-full flex justify-center items-center p-[10px] rounded-2xl bg-background-200 dark:bg-background-700 text-text-700 dark:text-text-200"
          rel="noreferrer"
        >
          {t('downloadResume')}
        </a>
      </div>
    </section>
  );
};
