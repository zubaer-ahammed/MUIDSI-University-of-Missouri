---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "Sanguine: Visual Analysis for Patient Blood Management"
# Keys must be unique to each paper, see section below for more details
key: 2021_iv_sanguine
# Select one of the options below
type: paper 
order: 2021-05
# use this if this paper was previously a preprint and you need to preserve the old URL
# redirect_from: /publications/2017_preprint_lineage
# Uncomment the line below for publications which should only appear on a personal webpage
# personal: y

# Auto-generates titles and alt-descriptors
shortname: Sanguine
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/publications/
image: 2020_vahc_sanguine.png
# Add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/publications/
image_large: 2020_vahc_sanguine_teaser.png

# Authors in the "database" can be used with just their person "key"
authors:
- lin
- Ryan A. Metcalf
- wilburn
- lex

# Include a shortened name for the journal or conference/proceedings
journal-short: IV
year: 2021

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"
bibentry: article
bib:
  journal: Information Visualization
  editor: 
  publisher: SAGE
  address: 
  doi: 
  url: 
  volume: 
  number: 
  pages: 
  month: 
  pmcid: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
#award: EuroVis 2016 Honorable Mention Award

# Provide a link to the publisher's webpage if no DOI is available
publisherURL: 

# Link to an official preprint server
preprint_server: https://arxiv.org/abs/2011.01931

# Links to a project hosted on VDL, or else externally on your own site
project: 
#external-project: https://pathfinder.caleydoapp.org/

# Video entry and preview video
videos:
- name: "Sanguine: Visual Analysis for Patient Blood Management"
  youtube-id: DhTNyvCJgtM
  file: 2020_vahc_sanguine.mp4

# Provide a preprint and supplement pdf
pdf: paper_2021_sanguine_preprint.pdf
#supplement: 2016_eurovis_pathfinder_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
#supplements:
#- name: Vials Conference Talk Slides
  # Use link instead of abslink if you want to link to the master directory
 # abslink: http://vials.io/talk/
  # Defaults to a download icon, use this if you want a link-out icon
  #linksym: true

# Link to the repository where the code is hosted
code: https://github.com/visdesignlab/Sanguine/

abstract: "
Blood transfusion is a frequently performed medical procedure in surgical and nonsurgical contexts. Although it is often necessary or even life-saving, it has been identified as one of the most overused procedures in hospitals. Unnecessary transfusions not only waste resources but can also be detrimental to patient outcomes. Patient blood management (PBM) is the clinical practice of optimizing transfusions and associated outcomes. In this paper, we introduce Sanguine, a visual analysis tool for transfusion data and related patient medical records. Sanguine was designed with two user groups in mind: PBM experts who oversee blood management practices across an institution and clinicians performing transfusions. PBM experts use Sanguine to explore and analyze transfusion practices and its associated medical outcomes. They can compare individual surgeons, or compare outcomes or time periods, such as before and after an intervention regarding transfusion practices. PBM experts then curate and annotate views for communication with clinicians, with the goal of improving their transfusion practices. We validate the utility and effectiveness of Sanguine through case studies. 
"

# After the ---, you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Note
This is the journal version of a [previously published workshop paper](../2020_vahc_sanguine).

# Acknowledgements

We thank Dr. Vikas Sharma, Dr. Joseph Tonna, Dr. Josh Zimmerman, and Dr. Candice Morrisey for their input and feedback. We also thank the support from the Enterprise Data Warehouse and the Center for High Performance Computing at the University of Utah. This project is funded by ARUP laboratories; the National Science Foundation (IIS 1751238); and the National Institutes of Health (1S10OD021644-01A1).
