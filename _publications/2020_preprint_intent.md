---
layout: publication
title: Capturing User Intent when Brushing in Scatterplots
key: 2020_preprint_intent
type: preprint
order: 2020-02

shortname: Intent-Inference
image: 2020_intent.png
image_large: 2020_intent_teaser.png
redirect_from: 
 - 2020_intent

authors:
  - kiran
  - goertler
  - zcutler
  - nobre
  - Oliver Deussen
  - meyer
  - Jeff Phillips
  - lex

journal-short: Preprint
year: 2020

bibentry: article
bib:
  booktitle: "Preprint"
  publisher:
  doi: 10.31219/osf.io/mq2rk
  pages:
  award:

# Links to a project hosted on VDL, or else externally on your own site

project:
external-project: https://vdl.sci.utah.edu/predicting-intent/

# Video entries, a preview , talk, and intro video. Vimeo IDs or youtube IDs are supported
# you need to pick either a vimeo or youtube ID. We definitely want a downloadable video too.

videos:
 - name: 'Intent System Introduction'
   youtube-id: flGhsCeo-00
   file: 2020_preprint_intent.mp4

# Provide a preprint and supplement pdf

pdf: 2020_preprint_intent.pdf
supplement: 2020_preprint_intent_supplement.pdf

# Link to an official preprint server
preprint_server: http://dx.doi.org/10.31219/osf.io/mq2rk

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

abstract: "
<p>Being able to capture or predict a user's intent behind a brush in a visualization tool has important implications in two scenarios. First, predicting intents can be used to auto-complete a partial selection in a mixed-initiative approach, with potential benefits to selection speed, correctness, and confidence.  
Second, capturing the intent of a selection can be used to improve recall, reproducibility, and even re-use. Augmenting provenance logs with semi-automatically captured intents makes it possible to save the reasoning behind selections. 
In this paper, we introduce a method to infer intent for selections and brushes in scatterplots. We first introduce a taxonomy of types of patterns that users might specify, which we elicited in a formative study conducted with professional data analysts and scientists. Based on this, we identify algorithms that can classify these patterns, and introduce various approaches to score the match of each pattern to an analyst's selection of items. We introduce a system that implements these methods for scatterplots and ranks alternative patterns against each other. Analysts then can use these predictions to auto-complete partial selections, and to conveniently capture their intent and provide annotations, thus making a concise representation of that intent available to be stored as provenance data. 
We evaluate our approach using interviews with domain experts and in a quantitative crowd-sourced study, in which we show that using auto-complete leads to improved selection accuracy for most types of patterns.</p>
"
---

# Acknowledgements

We thank the domain experts we interviewed for their time and their willingness to provide datasets, and Lane Harrison and members of the Visualization Design Lab for feedback. We gratefully acknowledge funding by the National Science Foundation (IIS 1751238) and by the Deutsche Forschungsgemeinschaft (251654672-TRR 161).
