---
layout: publication
title: "Loon: Using Exemplars to Visualize Large-Scale Microscopy Data"
key: 2021_vis_loon
type: paper
order: 2021-12

shortname: Loon
image: 2021_vis_loon.png
image_large: 2021_vis_loon_teaser.png

authors:
  - lange
  - Eddie Polanco
  - Robert Judson-Torres
  - Thomas Zangle
  - lex

journal-short: TVCG (Vis)
year: 2021

bibentry: article
bib:
  journal: IEEE Transactions on Visualization and Computer Graphics (VIS)
  publisher: IEEE
  doi: 10.1109/TVCG.2021.3114766
  url: 
  volume: 
  number:
  pages:
  month:

award: IEEE VIS 2021 Honorable Mention Award

# Links to a project hosted on VDL, or else externally on your own site

project:
external-project: https://loon.sci.utah.edu/

# Video entries, a preview , talk, and intro video. Vimeo IDs or youtube IDs are supported
# you need to pick either a vimeo or youtube ID. We definitely want a downloadable video too.

videos:
 - name: 'Loon Introduction'
   youtube-id: Y7u3Kg3At9A
   file: 2021_vis_loon.mp4

# Provide a preprint and supplement pdf

pdf: 2021_vis_loon.pdf
supplement: 2021_vis_loon_supplement.pdf

# Link to an official preprint server
preprint_server: https://doi.org/10.31219/osf.io/dfajc


# # Extra supplements, such as talk slides, data sets, etc.

# supplements:
# - name:
# - link:

# Supplemental, cc-by images. Make caption brief (at most 60 chars)
#images:
# - path: 2020_chi_mvnv_study_am_large_continent_sort.png
#   caption: Adjacency matrix, sorted by continent.
# - path: 2020_chi_mvnv_study_am_large_edge_encodings.png
#   caption: Adjacency matrix showing two numerical edge attributes.
# - path: 2020_chi_mvnv_study_am_small_node_neighbor_highlight.png
#   caption: Small adjacency matrix showing neighbor highlighting.
# - path: 2020_chi_mvnv_study_nl_large_color.png
#   caption: Node-link diagram using size and color to encode attributes.
# - path: 2020_chi_mvnv_study_nl_large_nested_bars.png
#   caption: Node-link diagram using nested bars and glyphs to encode attributes.
# - path: 2020_chi_mvnv_study_nl_large_nested_bars_neighbor_highlight.png
#   caption: Neighborhood highligthing in node-link diagram.
# - path: 2020_chi_mvnv_study_nl_small_nested_bars.png
#    caption: Small node-link diagram with nested bars.

code: https://github.com/visdesignlab/Loon

abstract: "
<p>Which drug is most promising for a cancer patient? A new microscopy-based approach for measuring the mass of individual cancer cells treated with different drugs promises to answer this question in only a few hours. However, the analysis pipeline for extracting data from these images is still far from complete automation: human intervention is necessary for quality control for preprocessing steps such as segmentation,  adjusting filters, removing noise, and analyzing the result. To address this workflow, we developed Loon, a visualization tool for analyzing drug screening data based on quantitative phase microscopy imaging. Loon visualizes both derived data such as growth rates and imaging data. Since the images are collected automatically at a large scale, manual inspection of images and segmentations is infeasible. However, reviewing representative samples of cells is essential, both for quality control and for data analysis. We introduce a new approach for choosing and visualizing representative exemplar cells that retain a close connection to the low-level data. By tightly integrating the derived data visualization capabilities with the novel exemplar visualization and providing selection and filtering capabilities, Loon is well suited for making decisions about which drugs are suitable for a specific patient.</p>
"
---

# Acknowledgements

We wish to thank Tarek Moustafa and Jack Wilburn for their contributions, and Soorya Pradeep and Jingzhou Zhang for participating in the CVO workshop. The research reported in this publication was supported by Huntsman Cancer Foundation through the Computational Oncology Research Initiative and the University of Utah's 1U4U seed grants and the Office of the Assistant Secretary of Defense for Health Affairs through the Breast Cancer Research Program under Award No. W81XWH-19-10065.
