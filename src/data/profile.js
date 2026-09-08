export const profile = {
  name: 'Benjamín Rodríguez Romo',
  role: 'Biomedical Data Scientist & Computational Bioengineer',
  location: 'Dübendorf, Switzerland',
  photo: `${import.meta.env.BASE_URL}assets/profile.jpg`,
  intro:
    'I build research software that turns biomedical images, 3D anatomy, experiments, and simulations into reproducible quantitative analysis.',
  summary:
    'My work sits at the intersection of biomedical data science, medical imaging, computational biomechanics, statistical shape analysis, and scientific software development. I currently develop finite-element workflows, automated analysis pipelines, and interactive visualization tools at Empa.',
  availability: 'Open to research, R&D, scientific software, and computational biomedical engineering opportunities.',
  links: {
    github: 'https://github.com/VenjaminRodriguezR',
    linkedin: 'https://www.linkedin.com/in/benjam%C3%ADn-rodr%C3%ADguez-romo-865b48230/',
    streamlit: 'https://share.streamlit.io/user/venjaminrodriguezr',
    email: 'mailto:benjaminrodriguezromo@gmail.com',
    cv: `${import.meta.env.BASE_URL}assets/Benjamin_Rodriguez_CV.pdf`,
  },
}


export const education = [
  {
    degree: 'MSc in Bioengineering',
    institution: 'Universidad Adolfo Ibáñez',
    period: '2023 — 2026',
    detail:
      'GPA 6.6/7.0 · Thesis 7.0/7.0 · Master thesis focused on CAMalyzer, a 3D Slicer extension for automated MRI segmentation and reconstruction of 3D femur models in under 20 seconds.',
  },
  {
    degree: 'Professional Degree in Bioengineering',
    institution: 'Universidad Adolfo Ibáñez',
    period: '2019 — 2026',
    detail: 'Civil engineering curriculum with specialization in bioengineering.',
  },
  {
    degree: 'Professional Degree in Computer Engineering',
    institution: 'Universidad Adolfo Ibáñez',
    period: '2019 — 2026',
    detail: 'Civil engineering curriculum with specialization in computer engineering.',
  },
]

export const expertise = [
  {
    title: 'Biomedical AI & Imaging',
    description: '3D MRI/CT workflows, segmentation, reconstruction, quantitative imaging, and machine-learning pipelines.',
    technologies: ['PyTorch', 'MONAI', '3D Slicer', 'scikit-image', 'VTK'],
  },
  {
    title: 'Computational Biomechanics',
    description: 'Finite-element modeling, explicit simulations, automated post-processing, mechanics metrics, and model comparison.',
    technologies: ['Abaqus/Explicit', 'Python', 'FEA', 'Biomechanics'],
  },
  {
    title: '3D Geometry & Shape Analysis',
    description: 'Alignment, correspondence, statistical shape models, anatomical measurements, and surface-based analysis.',
    technologies: ['Open3D', 'VTK', 'SciPy', 'SSM', 'Poisson reconstruction'],
  },
  {
    title: 'Scientific Software & Pipelines',
    description: 'Reproducible data pipelines, automation, monitoring, interactive dashboards, and research-facing tools.',
    technologies: ['Python', 'Git', 'Streamlit', 'Trame', 'SQL'],
  },
]

export const experience = [
  {
    organization: 'Empa — Swiss Federal Laboratories for Materials Science and Technology',
    role: 'Research Intern · Biomedical Engineering & Structural Mechanics Group',
    period: 'Feb 2026 — Jan 2027',
    location: 'Dübendorf, Switzerland',
    points: [
      'Developing finite-element models and quantitative workflows for biomechanical applications.',
      'Building Python pipelines for automated simulation execution, monitoring, failure detection, ODB extraction, and post-processing.',
      'Designing interactive tools for setup, monitoring, and visualization of mechanical, energetic, kinematic, and geometric results.',
    ],
  },
  {
    organization: 'Rush University Medical Center',
    role: 'Exchange Research Student · Biomechanics Department',
    period: 'Jun 2025 — Jul 2025',
    location: 'Chicago, USA',
    points: [
      'Developed workflows for 3D anatomical alignment, correspondence, statistical shape analysis, and morphology quantification.',
      'Built 3D Slicer extensions integrating image processing, anatomical analysis, visualization, and study-specific workflows.',
    ],
  },
  {
    organization: 'Bioengineering Center, Universidad Adolfo Ibáñez',
    role: 'Research Assistant · B3MAT Research Group',
    period: 'Mar 2022 — Dec 2025',
    location: 'Viña del Mar, Chile',
    points: [
      'Worked across biomaterials, medical imaging, biomechanics, additive manufacturing, and quantitative experimental analysis.',
      'Supported multidisciplinary R&D and supervised undergraduate research activities.',
    ],
  },
]

export const publications = [
  {
    venue: 'IEEE ICPRS 2025',
    title: 'CAMalyzer: A 3D Slicer extension for AI segmentation and generation of proximal femur 3D models',
    status: 'Proceedings · Oral presentation · 1st author',
    url: 'https://doi.org/10.1109/ICPRS66293.2025.11302867',
  },
  {
    venue: 'Orthopaedic Research Society 2025',
    title: 'Pipeline for MRI automatic segmentation and generation of a 3D model of the femoral head using Machine Learning',
    status: 'Conference poster · 1st author',
  },
  {
    venue: 'Orthopaedic Research Society 2026',
    title: 'A Framework for Quantifying Tibial Cartilage Deformation After Activity In Vivo via MRI',
    status: 'Conference poster · 2nd author',
  },
  {
    venue: 'IEEE Journal of Biomedical and Health Informatics',
    title: 'CAMalyzer: An Automated MRI-Based 3D Slicer Framework for Femoral Morphology Analysis in Femoroacetabular Impingement Syndrome',
    status: 'Under review · 1st author',
  },
  {
    venue: 'ACS Biomaterials Science & Engineering',
    title: 'Microstructural heterogeneity of β-TCP granules regulates early stem cell adhesion and spatial organization, revealed by quantitative morphometric analysis',
    status: 'Under review · 3rd author',
  },
]

export const metrics = [
  { value: '3', label: 'Engineering degrees / MSc' },
  { value: '5', label: 'Publications & conference works' },
  { value: '3', label: 'Research institutions' },
]
