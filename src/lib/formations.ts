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
    id: "bureautique-data",
    nom: "Bureautique & Data",
    description:
      "Excel et Google Sheets, des fonctions essentielles à l'import et au nettoyage de données avec Power Query.",
  },
  {
    id: "automatisation-nocode",
    nom: "Automatisation & No-Code",
    description:
      "Gagnez du temps avec VBA, ou créez vos propres applications métier sans écrire une ligne de code avec AppSheet.",
  },
  {
    id: "langages-data",
    nom: "Langages & Analyse de données",
    description:
      "SQL et Python pour interroger, nettoyer et analyser des données au-delà des limites d'un tableur.",
  },
  {
    id: "business-intelligence",
    nom: "Business Intelligence",
    description:
      "Power BI, de la modélisation de données à des tableaux de bord professionnels, avec le langage DAX.",
  },
  {
    id: "data-engineering",
    nom: "Data Engineering & Analytics Engineering",
    description:
      "Le pôle signature de LinTech Consulting : les fondamentaux pour construire des pipelines de données fiables.",
  },
];

export const formations: Formation[] = [
  {
    slug: "excel-professionnel",
    pole: "bureautique-data",
    titre: "Excel Professionnel",
    accroche:
      "Des fonctions essentielles à l'import de données avec Power Query, pour des analyses fiables au quotidien.",
    niveau: "Débutant à intermédiaire",
    duree: "3 jours (21h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Professionnels utilisant Excel au quotidien",
      "Toute personne souhaitant fiabiliser ses fichiers de suivi",
    ],
    objectifs: [
      "Maîtriser les fonctions essentielles (recherche, conditions, calculs)",
      "Importer et nettoyer des données avec Power Query",
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
        titre: "Import et nettoyage avec Power Query",
        points: [
          "Connexion à des fichiers et sources externes",
          "Nettoyage et mise en forme automatisée des données",
          "Actualisation d'un tableau à chaque import",
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
    tarifIndividuel: 120000,
    tarifGroupe: 1000000,
  },
  {
    slug: "google-sheets-avance",
    pole: "bureautique-data",
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
      "Publier un tableau de bord simple avec Looker Studio",
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
        titre: "Intégrations et restitution",
        points: [
          "Connexion avec Gmail, Drive, Forms",
          "Introduction à Looker Studio pour la restitution",
          "Cas pratiques d'automatisation de rapports",
        ],
      },
    ],
    prerequis: "Bonne connaissance de Google Sheets recommandée.",
    tarifIndividuel: 85000,
    tarifGroupe: 750000,
  },
  {
    slug: "excel-expert-vba",
    pole: "automatisation-nocode",
    titre: "Excel Expert : Automatisation VBA",
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
      "Créer des formulaires de saisie (UserForms)",
      "Automatiser des rapports récurrents, y compris leur envoi par email",
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
          "Création de formulaires (UserForms) et gestion des erreurs",
        ],
      },
      {
        titre: "Cas pratiques",
        points: [
          "Automatisation d'un rapport mensuel",
          "Envoi automatique de rapports par email (Outlook)",
          "Bonnes pratiques et gestion des erreurs",
        ],
      },
    ],
    prerequis: "Bonne maîtrise d'Excel recommandée.",
    tarifIndividuel: 110000,
    tarifGroupe: 1000000,
  },
  {
    slug: "appsheet-applications-metier",
    pole: "automatisation-nocode",
    titre: "AppSheet : Créez vos applications métier sans code",
    accroche:
      "Transformez une feuille Google Sheets en application mobile et web pour votre activité, sans écrire de code.",
    niveau: "Débutant à intermédiaire",
    duree: "2 jours (14h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Petites et moyennes entreprises souhaitant digitaliser un process (stock, clients, ventes, interventions)",
      "Entrepreneurs et indépendants qui veulent une application simple sans budget de développement",
      "Équipes déjà à l'aise avec Google Sheets",
    ],
    objectifs: [
      "Transformer une feuille de calcul en application AppSheet",
      "Concevoir un formulaire de saisie mobile adapté au terrain",
      "Mettre en place des règles métier simples (validations, notifications)",
      "Déployer une application utilisable par une équipe",
    ],
    programme: [
      {
        titre: "Prise en main d'AppSheet",
        points: [
          "Connexion à une feuille Google Sheets existante",
          "Structuration des données pour une application",
          "Types de vues (formulaire, tableau, carte, galerie)",
        ],
      },
      {
        titre: "Logique métier",
        points: [
          "Règles de validation et champs calculés",
          "Notifications et automatisations simples",
          "Gestion des utilisateurs et des droits d'accès",
        ],
      },
      {
        titre: "Cas pratiques et déploiement",
        points: [
          "Application de suivi de stock ou de clients",
          "Application de suivi d'interventions terrain",
          "Publication et partage de l'application avec une équipe",
        ],
      },
    ],
    prerequis: "Connaissance de base de Google Sheets.",
    tarifIndividuel: 90000,
    tarifGroupe: 800000,
  },
  {
    slug: "sql-analyse-donnees",
    pole: "langages-data",
    titre: "SQL pour l'Analyse de Données",
    accroche:
      "Interrogez des bases de données pour en extraire des réponses fiables, au-delà des limites d'un tableur.",
    niveau: "Débutant à intermédiaire",
    duree: "3 jours (21h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Professionnels voulant dépasser les limites d'Excel pour analyser de gros volumes de données",
      "Futurs analystes ou futurs data engineers qui posent les bases du langage SQL",
    ],
    objectifs: [
      "Écrire des requêtes SQL pour interroger une base de données",
      "Combiner plusieurs tables avec des jointures",
      "Agréger et résumer des données pour répondre à une question métier",
      "Utiliser des fonctions de fenêtrage pour des analyses plus fines",
    ],
    programme: [
      {
        titre: "Bases du langage SQL",
        points: [
          "Structure d'une base de données relationnelle",
          "Requêtes de sélection, filtres et tris",
        ],
      },
      {
        titre: "Jointures et agrégations",
        points: [
          "Jointures entre plusieurs tables",
          "Agrégations et sous-requêtes",
          "Statistiques descriptives simples (moyenne, médiane, écart-type)",
        ],
      },
      {
        titre: "Analyses avancées",
        points: [
          "Fonctions de fenêtrage",
          "Bonnes pratiques d'écriture et de lisibilité des requêtes",
        ],
      },
      {
        titre: "Projet pratique",
        points: [
          "Étude de cas sur un jeu de données réel (contexte ivoirien)",
          "Restitution des résultats à un public non technique",
        ],
      },
    ],
    prerequis: "Aucun prérequis technique préalable.",
    tarifIndividuel: 180000,
    tarifGroupe: 1300000,
  },
  {
    slug: "python-pour-la-data",
    pole: "langages-data",
    titre: "Python pour la Data",
    accroche:
      "Manipulez, nettoyez et analysez des données avec Python, pour des analyses reproductibles.",
    niveau: "Débutant à intermédiaire",
    duree: "3 jours (21h)",
    format: "Présentiel (Abidjan) ou distanciel",
    publicCible: [
      "Professionnels souhaitant se reconvertir vers l'analyse de données",
      "Analystes voulant automatiser des analyses répétitives",
    ],
    objectifs: [
      "Manipuler des données avec Python et la librairie pandas",
      "Nettoyer et préparer un jeu de données pour l'analyse",
      "Calculer des statistiques descriptives et visualiser des résultats",
      "Utiliser l'IA générative comme assistant d'analyse (génération de code, documentation)",
    ],
    programme: [
      {
        titre: "Bases de Python pour la data",
        points: [
          "Environnement de travail et notebooks",
          "Manipulation de données avec pandas",
        ],
      },
      {
        titre: "Nettoyage et statistiques",
        points: [
          "Nettoyage et préparation des données",
          "Statistiques descriptives (distribution, corrélation)",
        ],
      },
      {
        titre: "Visualisation et restitution",
        points: [
          "Introduction à la visualisation (matplotlib, seaborn)",
          "Structurer une analyse pour la décision",
        ],
      },
      {
        titre: "Projet pratique et IA générative",
        points: [
          "Utiliser un assistant IA pour générer et documenter du code",
          "Étude de cas sur un jeu de données réel (contexte ivoirien)",
        ],
      },
    ],
    prerequis: "Aucun prérequis technique préalable.",
    tarifIndividuel: 200000,
    tarifGroupe: 1400000,
  },
  {
    slug: "power-bi-fondamentaux",
    pole: "business-intelligence",
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
      "Importer, profiler et transformer des données avec Power Query",
      "Construire un modèle de données clair et performant",
      "Créer des visuels et tableaux de bord percutants, y compris avec l'assistance de Copilot",
      "Publier et partager ses rapports via Power BI Service",
    ],
    programme: [
      {
        titre: "Prise en main et Power Query",
        points: [
          "Interface Power BI Desktop",
          "Connexion aux sources de données courantes",
          "Profilage, nettoyage et transformation avec Power Query",
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
          "Mise en page, ergonomie et accessibilité d'un dashboard",
          "Filtres, segments, interactivité et assistance Copilot",
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
    pole: "business-intelligence",
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
      "Utiliser les groupes de calcul et les visual calculations",
      "Optimiser la performance d'un modèle et sécuriser l'accès aux données (RLS)",
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
        titre: "Fonctionnalités avancées",
        points: [
          "Groupes de calcul (calculation groups)",
          "Visual calculations et narration assistée par Copilot",
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
    slug: "data-engineering-analytics-engineering",
    pole: "data-engineering",
    titre: "Data Engineering & Analytics Engineering : les fondamentaux",
    accroche:
      "Posez les bases pour concevoir des pipelines de données fiables et des modèles analytiques prêts pour la décision.",
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
      "Modéliser des données selon l'approche dimensionnelle (Kimball)",
      "Construire des transformations de données maintenables avec dbt",
      "Versionner son travail et orchestrer un pipeline de bout en bout",
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
          "Conception de modèles prêts pour la BI",
        ],
      },
      {
        titre: "Analytics Engineering avec dbt",
        points: [
          "Transformations en SQL versionné et testé",
          "Tests de qualité de données et documentation automatisée",
          "Bases de Git pour le travail en équipe sur un projet data",
        ],
      },
      {
        titre: "Orchestration et projet final",
        points: [
          "Introduction à l'orchestration de pipelines (Airflow)",
          "Projet fil rouge : construire un pipeline de bout en bout",
        ],
      },
    ],
    prerequis:
      "Bases en SQL requises. Une première expérience en manipulation de données (Excel, Power BI ou autre) est un plus.",
    tarifIndividuel: 500000,
    tarifGroupe: 3800000,
  },
];

export function getFormationsByPole(poleId: string) {
  return formations.filter((f) => f.pole === poleId);
}

export function getFormationBySlug(slug: string) {
  return formations.find((f) => f.slug === slug);
}
