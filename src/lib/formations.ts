export type Formation = {
  slug: string;
  pole: string;
  titre: string;
  accroche: string;
  niveau: string;
  duree: string;
  format: string;
  publicCible: string[];
  objectifs: string[];
  programme: { titre: string; points: string[] }[];
  prerequis: string;
  tarifIndividuel: number;
  tarifGroupe: number;
};

export function formatFCFA(montant: number) {
  const avecEspaces = Math.round(montant)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${avecEspaces} FCFA`;
}

export const poles = [
  {
    id: "data-engineering",
    nom: "Data Engineering & Analytics Engineering",
    description:
      "Le pôle signature de LinTech Consulting : construisez des pipelines de données fiables et des modèles analytiques prêts pour la décision.",
  },
  {
    id: "power-bi",
    nom: "Power BI",
    description:
      "De la modélisation de données à des tableaux de bord professionnels, en passant par le langage DAX.",
  },
  {
    id: "excel",
    nom: "Excel",
    description:
      "De la bureautique aux automatisations avancées (macros, VBA, Power Query).",
  },
  {
    id: "google-sheets",
    nom: "Google Sheets",
    description:
      "Exploitez Sheets et l'écosystème Google Workspace pour automatiser vos analyses.",
  },
  {
    id: "data-analytics",
    nom: "Data Analytics",
    description:
      "SQL, Python et storytelling de la donnée pour des analyses solides et actionnables.",
  },
];

export const formations: Formation[] = [
  {
    slug: "data-engineering-analytics-engineering",
    pole: "data-engineering",
    titre: "Data Engineering & Analytics Engineering",
    accroche:
      "Concevez des pipelines de données robustes et des modèles analytiques fiables, du brut à la décision.",
    niveau: "Intermédiaire à avancé",
    duree: "5 jours (35h), en format intensif ou étalé sur plusieurs semaines",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Analystes data qui veulent monter en compétence vers l'ingénierie de données",
      "Équipes BI souhaitant fiabiliser leurs pipelines et leurs modèles",
      "Développeurs souhaitant se spécialiser en data",
    ],
    objectifs: [
      "Comprendre les fondamentaux ETL/ELT et l'architecture d'un entrepôt de données moderne",
      "Modéliser des données selon les approches dimensionnelles (Kimball) et modernes",
      "Construire des transformations de données maintenables avec dbt",
      "Orchestrer des pipelines de données de bout en bout",
      "Appliquer les bonnes pratiques de qualité et de gouvernance des données",
    ],
    programme: [
      {
        titre: "Fondamentaux de l'ingénierie de données",
        points: [
          "Architectures ETL vs ELT",
          "Entrepôts de données cloud (BigQuery, Snowflake) : panorama",
          "SQL avancé pour la transformation de données",
        ],
      },
      {
        titre: "Modélisation analytique",
        points: [
          "Modélisation dimensionnelle (faits, dimensions, schémas en étoile)",
          "Introduction aux approches Data Vault et modernes",
          "Conception de modèles prêts pour la BI",
        ],
      },
      {
        titre: "Analytics Engineering avec dbt",
        points: [
          "Transformations en SQL versionné et testé",
          "Tests de qualité de données et documentation automatisée",
          "Organisation d'un projet dbt en production",
        ],
      },
      {
        titre: "Orchestration & bonnes pratiques",
        points: [
          "Introduction à l'orchestration de pipelines (Airflow)",
          "Gouvernance, qualité et fiabilité des données",
          "Collaboration entre équipes data engineering et BI",
        ],
      },
    ],
    prerequis:
      "Bases en SQL requises. Une première expérience en manipulation de données (Excel, Power BI ou autre) est un plus.",
    tarifIndividuel: 500000,
    tarifGroupe: 3800000,
  },
  {
    slug: "power-bi-fondamentaux",
    pole: "power-bi",
    titre: "Power BI : des fondamentaux à la maîtrise des tableaux de bord",
    accroche:
      "Créez des tableaux de bord professionnels, de l'import des données à la publication.",
    niveau: "Débutant à intermédiaire",
    duree: "3 jours (21h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Professionnels qui découvrent Power BI",
      "Analystes métier souhaitant produire des rapports fiables",
      "Équipes souhaitant remplacer des reportings Excel manuels",
    ],
    objectifs: [
      "Importer et transformer des données avec Power Query",
      "Construire un modèle de données clair et performant",
      "Créer des visuels et tableaux de bord percutants",
      "Publier et partager ses rapports via Power BI Service",
    ],
    programme: [
      {
        titre: "Prise en main et Power Query",
        points: [
          "Interface Power BI Desktop",
          "Connexion aux sources de données courantes",
          "Nettoyage et transformation avec Power Query",
        ],
      },
      {
        titre: "Modélisation de données",
        points: [
          "Relations entre tables",
          "Modèle en étoile vs modèle plat",
          "Bonnes pratiques de modélisation",
        ],
      },
      {
        titre: "Visualisation et tableaux de bord",
        points: [
          "Choix des visuels selon le message",
          "Mise en page et ergonomie d'un dashboard",
          "Filtres, segments et interactivité",
        ],
      },
      {
        titre: "Publication et partage",
        points: [
          "Power BI Service : espaces de travail et partage",
          "Rafraîchissement des données",
          "Bonnes pratiques de gouvernance",
        ],
      },
    ],
    prerequis: "Aucun prérequis technique. Une aisance avec Excel est un plus.",
    tarifIndividuel: 200000,
    tarifGroupe: 1400000,
  },
  {
    slug: "power-bi-avance-dax",
    pole: "power-bi",
    titre: "Power BI Avancé : Modélisation & DAX",
    accroche:
      "Maîtrisez le langage DAX et les modèles de données avancés pour des analyses fines.",
    niveau: "Avancé",
    duree: "3 jours (21h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Utilisateurs Power BI ayant les fondamentaux",
      "Analystes voulant construire des indicateurs métier complexes",
    ],
    objectifs: [
      "Écrire des mesures DAX avancées (contexte de filtre, de ligne)",
      "Construire des indicateurs temporels (cumuls, comparaisons d'année)",
      "Optimiser la performance d'un modèle de données",
      "Mettre en place la sécurité au niveau ligne (RLS)",
    ],
    programme: [
      {
        titre: "DAX en profondeur",
        points: [
          "Contexte de ligne vs contexte de filtre",
          "Fonctions CALCULATE, FILTER, ALL",
          "Variables et lisibilité du code DAX",
        ],
      },
      {
        titre: "Indicateurs métier avancés",
        points: [
          "Cumuls, moyennes mobiles",
          "Comparaisons période vs période (YoY, MoM)",
          "Tables de dates et time intelligence",
        ],
      },
      {
        titre: "Performance et gouvernance",
        points: [
          "Optimisation du modèle de données",
          "Sécurité au niveau ligne (RLS)",
          "Bonnes pratiques de déploiement en entreprise",
        ],
      },
    ],
    prerequis: "Avoir suivi la formation Power BI Fondamentaux ou équivalent.",
    tarifIndividuel: 230000,
    tarifGroupe: 1600000,
  },
  {
    slug: "excel-professionnel",
    pole: "excel",
    titre: "Excel Professionnel",
    accroche:
      "Des fonctions essentielles aux tableaux croisés dynamiques pour des analyses fiables au quotidien.",
    niveau: "Débutant à intermédiaire",
    duree: "2 jours (14h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Professionnels utilisant Excel au quotidien",
      "Toute personne souhaitant fiabiliser ses fichiers de suivi",
    ],
    objectifs: [
      "Maîtriser les fonctions essentielles (recherche, conditions, calculs)",
      "Construire des tableaux croisés dynamiques",
      "Mettre en forme des tableaux de bord clairs et fiables",
    ],
    programme: [
      {
        titre: "Fonctions essentielles",
        points: [
          "Fonctions de recherche (RECHERCHEX, RECHERCHEV)",
          "Fonctions conditionnelles et de calcul",
          "Gestion des erreurs courantes",
        ],
      },
      {
        titre: "Tableaux croisés dynamiques",
        points: [
          "Construction et personnalisation de TCD",
          "Segments et chronologies",
          "Graphiques croisés dynamiques",
        ],
      },
      {
        titre: "Mise en forme et fiabilité",
        points: [
          "Mise en forme conditionnelle",
          "Validation de données",
          "Bonnes pratiques de structuration d'un classeur",
        ],
      },
    ],
    prerequis: "Utilisation basique d'Excel (saisie, formules simples).",
    tarifIndividuel: 90000,
    tarifGroupe: 900000,
  },
  {
    slug: "excel-macros-vba",
    pole: "excel",
    titre: "Excel Avancé : Macros & VBA",
    accroche: "Automatisez vos tâches répétitives et gagnez un temps précieux.",
    niveau: "Avancé",
    duree: "2 jours (14h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Utilisateurs Excel confirmés",
      "Toute personne qui répète des tâches manuelles chronophages",
    ],
    objectifs: [
      "Enregistrer et adapter des macros",
      "Écrire des scripts VBA simples et robustes",
      "Automatiser des rapports récurrents",
    ],
    programme: [
      {
        titre: "Macros",
        points: [
          "Enregistreur de macros",
          "Lecture et adaptation du code généré",
        ],
      },
      {
        titre: "VBA",
        points: [
          "Variables, boucles, conditions",
          "Manipulation de classeurs et de feuilles",
          "Création de formulaires simples",
        ],
      },
      {
        titre: "Cas pratiques",
        points: [
          "Automatisation d'un rapport mensuel",
          "Bonnes pratiques et gestion des erreurs",
        ],
      },
    ],
    prerequis: "Bonne maîtrise d'Excel recommandée.",
    tarifIndividuel: 100000,
    tarifGroupe: 950000,
  },
  {
    slug: "google-sheets-avance",
    pole: "google-sheets",
    titre: "Google Sheets Avancé & Automatisation",
    accroche:
      "Exploitez Sheets et Apps Script pour automatiser vos analyses et vos rapports.",
    niveau: "Intermédiaire à avancé",
    duree: "2 jours (14h)",
    format: "Distanciel",
    publicCible: [
      "Équipes travaillant sur Google Workspace",
      "Utilisateurs Sheets souhaitant automatiser leurs process",
    ],
    objectifs: [
      "Maîtriser les fonctions avancées de Google Sheets",
      "Connecter Sheets à d'autres outils Google Workspace",
      "Automatiser des tâches avec Google Apps Script",
    ],
    programme: [
      {
        titre: "Sheets avancé",
        points: [
          "Fonctions avancées et tableaux croisés dynamiques",
          "Connexion à des sources de données externes",
        ],
      },
      {
        titre: "Google Apps Script",
        points: [
          "Introduction au langage et à l'éditeur de script",
          "Automatisation de tâches répétitives",
          "Déclencheurs et notifications automatiques",
        ],
      },
      {
        titre: "Intégrations",
        points: [
          "Connexion avec Gmail, Drive, Forms",
          "Cas pratiques d'automatisation de rapports",
        ],
      },
    ],
    prerequis: "Bonne connaissance de Google Sheets recommandée.",
    tarifIndividuel: 75000,
    tarifGroupe: 700000,
  },
  {
    slug: "data-analytics-sql-python",
    pole: "data-analytics",
    titre: "Data Analytics : SQL & Python",
    accroche:
      "Analysez des données à l'échelle avec SQL et Python, et racontez des histoires avec la donnée.",
    niveau: "Débutant à intermédiaire",
    duree: "5 jours (35h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Professionnels souhaitant se reconvertir vers l'analyse de données",
      "Analystes voulant dépasser les limites d'Excel",
    ],
    objectifs: [
      "Écrire des requêtes SQL pour interroger des bases de données",
      "Manipuler et analyser des données avec Python (pandas)",
      "Visualiser des données et construire un récit clair pour la décision",
    ],
    programme: [
      {
        titre: "SQL pour l'analyse de données",
        points: [
          "Requêtes de base et jointures",
          "Agrégations et sous-requêtes",
          "Fonctions de fenêtrage",
        ],
      },
      {
        titre: "Python pour la data",
        points: [
          "Manipulation de données avec pandas",
          "Nettoyage et préparation des données",
          "Introduction à la visualisation (matplotlib/seaborn)",
        ],
      },
      {
        titre: "Data storytelling",
        points: [
          "Structurer une analyse pour la décision",
          "Choisir les bons visuels selon le message",
          "Présenter des résultats à un public non technique",
        ],
      },
    ],
    prerequis: "Aucun prérequis technique préalable.",
    tarifIndividuel: 400000,
    tarifGroupe: 2800000,
  },
];

export function getFormationsByPole(poleId: string) {
  return formations.filter((f) => f.pole === poleId);
}

export function getFormationBySlug(slug: string) {
  return formations.find((f) => f.slug === slug);
}
