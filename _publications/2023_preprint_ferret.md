---
layout: publication
title: "Ferret: Reviewing Tabular Datasets for Manipulation"
key: 2023_preprint_ferret
type: preprint
order: 2022-12
# redirect_from: /publications/2023_preprint_ferret/

shortname: Ferret
image: 2023_preprint_ferret.png
image_large: 2023_preprint_ferret_teaser.png

authors:
  - lange
  - sahai
  - Jeff M. Phillips
  - lex

journal-short: Preprint
year: 2023

bibentry: article
bib:
  booktitle: "Preprint"
  doi: 10.31219/osf.io/anj8v
  # journal: IEEE Transactions on Visualization and Computer Graphics (VIS)
  # publisher: IEEE
  # doi: 10.1109/TVCG.2021.3114766
  # url:
  # volume: 28
  # number: 1
  # pages: 248-258
  # month:

# award: IEEE VIS 2021 Honorable Mention Award

# Links to a project hosted on VDL, or else externally on your own site

project:
external-project: https://ferret.sci.utah.edu/

# Video entries, a preview , talk, and intro video. Vimeo IDs or youtube IDs are supported
# you need to pick either a vimeo or youtube ID. We definitely want a downloadable video too.

# videos:
#  - name: 'Loon Introduction'
#    youtube-id: Y7u3Kg3At9A
#    file: 2021_vis_loon.mp4
#  - name: 'Loon VIS Preview'
#    youtube-id: iRsL3WiZbhI
#    file: 2021_vis_loon_preview.mp4
#  - name: 'Loon VIS Talk'
#    youtube-id: Xz5VrBXk5J0
#    file: 2021_vis_loon_talk.mp4




# Provide a preprint and supplement pdf

pdf: 2023_preprint_ferret.pdf
# supplement: 2021_vis_loon_supplement.pdf

# Link to an official preprint server
preprint_server: https://doi.org/10.31219/osf.io/anj8v


# # Extra supplements, such as talk slides, data sets, etc.

# supplements:
# - name: VIS Talk Slides
#   link: 2021_vis_loon_talk_slides.pdf

# Supplemental, cc-by images. Make caption brief (at most 60 chars)
# images:
# - path: 2021_vis_loon_overview.png
#   caption: The overall Loon interface includes multiple visualizations.
# - path: 2021_vis_loon_exemplars.png
#   caption: The exemplar view displays representative cells compactly.
# - path: 2021_vis_loon_condition.png
#   caption: Specific experimental conditions can be selected.
# - path: 2021_vis_loon_comparison.png
#   caption: Experimental conditions can be carefully compared.
# - path: 2021_vis_loon_image_selection.png
#   caption: Specific images can be selected by condition and time.
# - path: 2021_vis_loon_image_viewer.png
#   caption: Single images can be viewed with cell boundaries.
# - path: 2021_vis_loon_metadata.png
#   caption: Cell attributes can be viewed and selected.


code: https://github.com/visdesignlab/Ferret

abstract: "
<p>How do we ensure the veracity of science? The act of manipulating or fabricating scientific data has led to many high-profile fraud cases and retractions. Detecting manipulated data, however, is a challenging and time-consuming endeavor. Automated detection methods are limited due to the diversity of data types and manipulation techniques. Furthermore, patterns automatically flagged as suspicious can have reasonable explanations. Instead, we propose a nuanced approach where experts analyze tabular datasets, e.g., as part of the peer-review process, using a guided, interactive visualization approach. 
In this paper, we present an analysis of how manipulated datasets are created and the artifacts these techniques generate. Based on these findings, we propose a suite of visualization methods to surface potential irregularities.
We have implemented these methods in Ferret, a visualization tool for data forensics work. Ferret makes potential data issues salient and provides guidance on spotting signs of tampering and differentiating them from truthful data.</p>
"
---

# Acknowledgements

We wish to thank Holger Stitz, Michael Pühringer, and the LineUp authors for their support using the library, the Retraction Watch Project for access to their database, Zach Cutler and Jack Wilburn for technical help, the interview participants for their time and expertise, and the Visualization Design Lab for feedback. This work was supported by NSF IIS 1751238 and CCF-2115677.
