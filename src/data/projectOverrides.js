export const projectOverrides = {
  CAMalyzer: {
    title: 'CAMalyzer',
    category: 'Biomedical AI · Medical Imaging',
    summary:
      'A 3D Slicer extension for automated proximal femur reconstruction from hip MRI. CAMalyzer integrates deep-learning-based segmentation, image post-processing, and surface reconstruction into a single workflow, generating analysis-ready 3D femur models in under 20 seconds.',
    impact:
      'Master thesis and first-author research project resulting in an IEEE conference publication and presentation, an ORS conference poster, and a first-author journal manuscript.',
    tags: [
      '3D Slicer',
      'PyTorch',
      '3D U-Net',
      'MRI',
      'Medical Image Segmentation',
      '3D Reconstruction',
      'Poisson Reconstruction',
    ],
    featured: true,
    order: 1,
  },

  'Biomedical-CSV-explorer': {
    title: 'Biomedical CSV Explorer',
    category: 'Scientific Software · Data Science',
    summary:
      'Interactive Streamlit application for biomedical tabular data exploration with missingness analysis, group comparisons, correlations, Random Forest feature importance, and PCA.',
    impact:
      'Public interactive demonstration of an end-to-end workflow for exploratory biomedical data analysis and visualization.',
    tags: ['Streamlit', 'pandas', 'scikit-learn', 'Plotly', 'PCA'],
    liveUrl: 'https://biomedical-csv-explorer.streamlit.app/',
    featured: true,
    order: 2,
  },
}

// Private or institution-owned work should not be fetched into a public frontend with credentials.
// These are deliberately curated case studies instead.
export const caseStudies = []