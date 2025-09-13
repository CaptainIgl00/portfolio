interface Certification {
  title: string;
  provider: string;
  year: number;
  description: string;
  achievements: string[];
  score?: string;
  rank?: string;
}

export const certifications: Certification[] = [
  {
    title: "Python",
    provider: "LinkedIn Skills Assessment",
    year: 2023,
    description: "Certification technique validant une expertise approfondie en Python via un test exigeant couvrant l'ensemble des aspects du langage.",
    achievements: [
      "Concepts avancés du langage",
      "Programmation orientée objet",
      "Gestion de la mémoire et performances",
      "Bibliothèques standards et écosystème"
    ],
    rank: "Top 5% Mondial"
  }
];

export const getCertificationsCount = (): number => certifications.length; 