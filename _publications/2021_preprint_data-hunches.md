---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "Data Hunches: Incorporating Personal Knowledge into Visualizations"
# Keys must be unique to each paper, see section below for more details
key: 2021_preprint_data-hunches
# Select one of the options below
type: preprint
order: 2021-09
# use this if this paper was previously a preprint and you need to preserve the old URL
# redirect_from: /publications/2017_preprint_lineage


# Auto-generates titles and alt-descriptors
shortname: data-hunches
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/publications/
image: 2021_preprint_data-hunches.png
# Add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/publications/
image_large: 2021_preprint_data-hunches_teaser.png

# Authors in the "database" can be used with just their person "key"
authors:
- lin
- akbaba
- meyer
- lex

# Include a shortened name for the journal or conference/proceedings
journal-short: Preprint
year: 2021

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"

bibentry: article
bib:
  booktitle: "Preprint"
  url: https://arxiv.org/abs/2109.07035
  doi:
  pages:
  award:

# Provide a link to the publisher's webpage if no DOI is available
publisherURL:

# Link to an official preprint server
preprint_server: https://arxiv.org/abs/2109.07035

# Links to a project hosted on VDL, or else externally on your own site
project: http://vdl.sci.utah.edu/data-hunch/
#external-project: https://pathfinder.caleydoapp.org/

# Video entry and preview video


# Provide a preprint and supplement pdf
pdf: 2021_preprint_data-hunches.pdf
#supplement: 2016_eurovis_pathfinder_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
#supplements:
#- name: Vials Conference Talk Slides
  # Use link instead of abslink if you want to link to the master directory
 # abslink: http://vials.io/talk/
  # Defaults to a download icon, use this if you want a link-out icon
  #linksym: true

# Link to the repository where the code is hosted
code: https://github.com/visdesignlab/data-hunches-package

abstract: "
The trouble with data is that it frequently provides only an imperfect
representation of a phenomenon of interest. Experts who are familiar with their
datasets will often make implicit, mental corrections when analyzing a dataset,
or will be cautious not to be over-confident in any findings if caveats are
present. However, the implicit knowledge about the caveats of a dataset are
typically not collected in a structured way, which is problematic especially
when teams work together who might have knowledge about different aspects of a
dataset. In this work, we define such analyst's knowledge about datasets as
data hunches. We discuss the implications of data hunches and propose a set of
techniques for recording and communicating data hunches through data
visualization. Furthermore, we provide guidelines for designing visualizations
that support recording and visualizing data hunches. We envision that data
hunches will empower analysts to externalize their knowledge, facilitate
collaboration and communication, and support the ability to learn from others'
data hunches.
"

# After the ---, you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---