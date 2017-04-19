# VDL Profiles

## Creating a member profile for VDL

Please create a profile here. Use the following template. Don't remove rows if you don't have the information right now, just leave the data empty. E.g., if you don't know what your interests are yet, leave the field blank but don't delete "interests".

```
---
# use person layout if you want a page generated for you
layout: person
first_name: Alexander
last_name: Lex
key: lex
permalink: /team/lex/
# Pick one of the following
role: faculty | postdoc | phdstudent | phd_rotation  | msstudent | undergrad | collaborator
email: alex@sci.utah.edu
image: /assets/images/team/lex.jpg
organization: University of Utah
position: Assistant Professor
# use either a local link like here, or a URL
website: /team/lex 
interests: Biology Visualization, Multivariate Graphs, Visualization Tools, Exploratory Visualization for Scientists
#  leave empty if you're active. Add something like "M.S.'16" or "B.S.'17" if you got a degree while at VDL. Add "N" if you left VDS before you got a degree.
graduated: 

# stuff below can be ignored if you don't use the group website for your private website

gs: https://scholar.google.com/citations?user=JFNLCUcAAAAJ
gh: https://github.com/alexsb
twitter: "@alexander_lex"
cv: http://sci.utah.edu/~vdl/files/cv_alexander_lex.pdf
address: |
    Scientific Computing and Imaging Institute, <br>
    School of Computing, University of Utah <br>
    72 South Central Campus Drive, Room 3887 <br>
    Salt Lake City, Utah 84112
    
# flag used to determine whether to show teaching   
showteaching: true
 
phd_students: 
 - nobre
phd_rotation_students:
 - aljuhani
ms_students:
 - Pranav Dommata
former_students:
 - anirudh
---
```

### Picture

Pictures are only necessary for active members of VDL, not for collaborators.

And add a black and white headshot to this folder: 
https://github.com/visdesignlab/visdesignlab.github.io/tree/master/assets/images/team
And a colored one here: 
https://github.com/visdesignlab/visdesignlab.github.io/tree/master/assets/images/team_colored
Format: square JPG, up to 400x400 px, make sure **this is under 20kb**!


## Creating a collaborator profile 

Use "role: collaborator" for collaborators on papers. Note that this isn't strictly necessary, you can just type the person's full name in the author list, but it might be useful if you're collaborating with a person a lot.

