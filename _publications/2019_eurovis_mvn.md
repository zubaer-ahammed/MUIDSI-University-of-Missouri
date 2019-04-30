---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "The State of the Art in Visualizing Multivariate Networks"
key: 2019_eurovis_mvnv
# paper | preprint | poster
type: paper
#redirect_from: /publications/2017_preprint_lineage

# The shortname is used for auto-generated titels
shortname: MVNV STAR
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2019_eurovis_mvnv.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2019_eurovis_mvnv.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- nobre
- streit
- meyer
- lex

journal-short: EuroVis
year: 2019

bibentry: article
bib:
  journal: Computer Graphics Forum (EuroVis '19), to appear
  booktitle: 
  editor: 
  publisher: 
  address: 
  doi: 
  url: 
  volume: 
  number: 
  pages: 
  month: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
# project: upset

# Use this if you have an external project website
external-project: https://vdl.sci.utah.edu/mvnv/

# The reference to the video entry
#video: 
# Talk video
#talk-video: 

# The reference to the preview video entry
#preview-video: 2018_tvcg_lineage_video_preview

# the preprint
pdf: 2019_eurovis_mvnv.pdf
# A supplement PDF
#supplement: 2018_tvcg_lineage_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
#supplements:
#- name: Vis Talk Slides
#  link: 2018_tvcg_lineage_talkSlides.pdf

#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hosted
code: https://github.com/visdesignlab/mvnv

# Link to an official preprint server
preprint_server: 

abstract: "
Multivariate networks are made up of nodes and their relationships (links), but also data about those nodes and links as attributes. 
Most real-world networks are associated with several attributes, and many analysis tasks depend on analyzing both, relationships and attributes. 
Visualization of multivariate networks, however, is challenging, especially when both the topology of the network and the attributes need to be considered concurrently. In this state-of-the-art report, we analyze current practices and classify techniques along four axes: layouts, view operations, layout operations, and data operations. We also provide an analysis of tasks specific to multivariate networks and give recommendations for which technique to use in which scenario. Finally, we survey application areas and evaluation methodologies. "

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

The authors thank members of the Visualization Design Lab for their feedback.
This work is funded by the National Science Foundation (OAC 1835904, IIS 1751238, and IIS 1350896) and the Utah Genome Project.