---
layout: publication
title: 'Capturing User Intent when Brushing in Data Visualizations'
key: 2020_intent
type: preprint
order: 2020-02

shortname: Intent-Inference
image: 2020_intent.png
image_large: 2020_intent_teaser.png

authors:
  - kiran
  - goertler
  - Oliver Deussen
  - meyer
  - Jeff Phillips
  - lex

journal-short: CGF (EuroVis '20)
year: 2020

bibentry: article
bib:
  booktitle: "Computer Graphics Forum (EuroVis '20), to appear"
  publisher:
  doi:
  pages:
  award:

# Links to a project hosted on VDL, or else externally on your own site

project:
external-project: https://vdl.sci.utah.edu/predicting-intent/

# Video entries, a preview , talk, and intro video. Vimeo IDs or youtube IDs are supported
# you need to pick either a vimeo or youtube ID. We definitely want a downloadable video too.

videos:
 - name: 'Intent System Introduction'
   youtube-id: Z1u89ZrFv_E
   file: 2020_intent.mp4

# Provide a preprint and supplement pdf

pdf: 2020_intent_preprint.pdf
# supplement: 2020_chi_mvnv_study_supplement.zip

# Link to an official preprint server
preprint_server: http://dx.doi.org/10.17605/OSF.IO/8VPE6

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

code: https://github.com/visdesignlab/intent-system

abstract: '
<p>Capturing provenance information of interactive visualization system is an important step towards reproducibility of findings. However, provenance data that is based on logged interactions does not capture higher-level intent behind the actions taken: provenance data captures the "what'' but not the "why''. For recall, reproducibility, and even re-use, however, understanding the why and the reasoning behind and action is critical. Capturing the intent of a user action, however, can currently only be achieved by manually specifying intent. In this paper we introduce a set of methods to infer intent for selections and brushes in scatterplots. We first introduce a taxonomy of types of patterns that users might specify, which we base on a formative study conducted with professional data analysts and scientists from a variety of fields. Based on this, we identify algorithms that can classify a selection into a semantically meaningful pattern. We then introduce a system that implements these methods and scores competing classifications against each other. Analysts then can use these predictions to conveniently capture their intent, while at the same time making a concise representation of that intent available to the system. Beyond capturing intent, we demonstrate that our methods can be used to speed up or correct selections, for example, when analysts missed to select a small set of points matching their intent. We evaluate our approach using usage scenarios conducted with domain experts.</p>
'
---

# Acknowledgements

We thank the domain experts we interviewed for their time and their willingness to provide datasets. We also thank Carolina Nobre for help with our qualitative data analysis. We gratefully acknowledge funding by the National Science Foundation (IIS 1751238).
