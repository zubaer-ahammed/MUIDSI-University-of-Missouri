---
layout: post
title: Data Hunch - Recording and Communicating Personal Knowledge in Visualizations
date: 2022-10-11 1:00:00
categories: blog
type: blog
authors:
- lin
abstract: "Have you ever looked at data visualization and thought: it doesn't look right. Did you then carry that hunch throughout your data analysis process, impacting your judgment and interpretation of the data? That thought, whether you were aware of it or not,  impacted your interpretation in an implicit way and should be externalized to others but current visualization methods do not support this. In this blog post, we dive into how we came up with the term data hunch to describe personal knowledge brought to data analysis. We explore methods and designs to record and communicate data hunches through visualizations explicitly."
lead-image: /assets/images/publications/2022_vis_data_hunches_teaser.png
---

_For the publication, recorded talk video, and prototype for data hunches, please see [Data Hunches: Incorporating Personal Knowledge into Visualizations]({{site.base_url}}/publications/2022_vis_data_hunches/)._

# How did it all start?

The work on data hunches all started when I was working on [Sanguine]({{site.base_url}}/publications/2021_ivi_sanguine). We built a customized web interface to visualize blood transfusion data for the University of Utah Hospital. After the iterative design and implementation process, we presented the final product to surgeons and anesthesiologists. We received great feedback on the innovative interface, but the surgeons were doubtful about the interface: more specifically, they suspected that the data behind the interface was inaccurately reflecting their practices. One indicator of good transfusion practices is the usage of [blood salvage](https://en.wikipedia.org/wiki/Intraoperative_blood_salvage) – recovering blood lost during the surgery and re-infusing it back into the patient. Our interface showed a significant number of cases of not using any volume of blood salvage. The surgeons, however, disagreed with the data and reflected that they turned on the machine for almost all surgeries. We tried to spot any possible data wrangling error and did not find any. We concluded that this was more likely an artifact of missing charting due to low volume. At the time, we could record this artifact through text annotation and email exchange, but it was very limited. The surgeons could not articulate how, in their opinion, the visualization should look to reflect their perspective.

A connection was made between the scenario above with a previous publication from our lab, [A Framework for Externalizing Implicit Error Using Visualization]({{site.base_url}}/publications/2018_infovis_ie-framework). Similarly, the Zika experts had knowledge about some countries in the dataset. for example, Expert A knew that _Country X only reports cases of pregnant women in their first-trimester_, while Expert B knew that _Country Y reports all suspected and confirmed cases_. Such knowledge was not representedexplicit in the visualization, but the knowledge impacted their data analysis. As an attempt to explicitly record experts’ knowledge, the paper authors incorporatedused structured forms to let the health expertsusers recordreport their knowledge in the visualization so that it could beso that the knowledge becomes explicit and can be shared with others.


# This must be explained somewhere, right?

We dug into uncertainty literature, hoping to find an appropriate definition for what we saw in Sanguine and Implicit Error cases. WOff the bat, we found that the definition of **uncertainty** is sparse and varies between literature. For example, Hullman refers to uncertainty as “the possibility that the observed data or model predictions could take on a set of possible values”,
whereas Bonneau et al state that “uncertainty is the lack of information.” Nevertheless, most of the visualization research community focuses on how uncertainty is unknown but we, as visualization designers, should make uncertainty known to users.

But that wasdoes not seem to be the case for us. In our experiences with the experts, the experts *know* how data is imperfect. We, the visualization designers, are in the unknown. So it only seems fitting toif we actually put the power of recording into the experts’ hands, not us.

![A cartoon figure]({{site.base_url}}/assets/images/posts/2022_data_hunch-cartoon.png)
_Analysts should have the tools to record and communicate their knowledge._

# And here is where data hunches come into play.

If we keep using the term uncertainty to describe everything and anything unknown from an unsituated perspective, agnostic to *who* does not know the datato the data from all perspectives, we will continue to ignore the deep and expansive knowledge that experts bring to their visual analysis sessions. it will only create more chaos and confusion. Instead, we introduce decide to use the term **Data Hunch** to define, and highlight the importance of, the personal knowledge of experts. The definition we used in our publication goes, _an analyst’s knowledge about how and why the data is an imperfect and partial representation of the phenomena of interest_. It can be used to cover knowledge about something big in scope, as the country in our Zika reporting example, where a country includes all possible cases. Or, it can be specific. For example, in the figure below, the COVID cases reported in Utah showed two dips during the holiday season. But based on our knowledge about COVID reporting, probably not all agencies were reporting cases during the holiday season, and with more people traveling, the graph below is less likely to reflect the actual development of the pandemic.

![A comic-style illustration with four panels. In the first panel, a viewer questions about the data visualization they are seeing. In the second panel, they draw what they think the data visualization should look like. In the third panel, they communicate their data hunch to another viewer. In the fourth panel, the second person adds their data hunch to the data visualization to demonstrate how they perceive the data.]({{site.base_url}}/assets/images/posts/2022_data_hunch-COVID-example.png)
_NYTimes COVID dashboard of UT cases._

With a definition, we can start to explore the possible ways of explicitly recording and communicating data hunches.  We want the process to be intuitive and direct, with tools like annotations, drawings, and manipulations. We explored many visual channels and marks to annotate data hunches. In the end, we used similar marks and channels to the original visualization to keep things simple. This way, we can have the best chance of keeping data hunches close and similar to the original visualization.

To demonstrate how a user can record their data hunches in visualization, we built a prototype ([available here]({{site.base_url}}/data-hunch/)) with three data sets to choose from: student research area data, greenhouse gas related to food production data, and COVID case data of selected countries. We implemented an array of techniques, such as direct manipulation, graphical annotation, and direct input. Feel free to play with the prototype and add your own hunches!

![The prototype image]({{site.base_url}}/assets/images/posts/2022_data_hunch-prototype.png)
_The prototype interface with a few data hunches added._

With this prototype, we want to show the human factor behind each data hunch. Hence, we specifically opt for sketchy drawings [using this library](https://roughjs.com/) to render each hunch and a handwritten font to show the text related to a hunch. With data hunches on visualizations, users not only get a visual representation of their internal mental model, but also have an easier time collaborating with their colleagues.

![A animated figure, adding data hunch on prototype.]({{site.base_url}}/assets/images/posts/2022_data_hunch-add-dh.gif)
_Adding a data hunch in our prototype through direct manipulation. The prototype also allows upvoting/downvoting_

We are excited about the design possibility that data hunches can bring to the visualization research community. For more details about data hunches, design guidelines, and discussions, please refer to our [publication]({{site.base_url}}/publications/2022_vis_data_hunches/).


