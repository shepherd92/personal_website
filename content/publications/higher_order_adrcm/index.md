---
title: "On the topology of age-dependent random connection network models"
authors:
- Christian Hirsch
- me
date: "2025-05-20T00:00:00Z"
# doi: "https://doi.org/10.1007/s11009-025-10173-7"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-09-20T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Methodology and Computing in Applied Probability*"
publication_short: "Methodol. Comput. Appl. Probab."

abstract: In this paper, we investigate the potential of the age-dependent random connection model (ADRCM) with the aim of representing higher-order networks. A key contribution of our work are probabilistic limit results in large domains. More precisely, we first prove that the higher-order degree distributions have a power-law tail. Second, we establish central limit theorems for the edge counts and Betti numbers of the ADRCM in the regime where the degree distribution is light tailed. Moreover, in the heavy-tailed regime, we prove that asymptotically, the recentered and suitably rescaled edge counts converge to a stable distribution. We also propose a modification of the ADRCM in the form of a thinning procedure that enables independent adjustment of the power-law exponents for vertex and edge degrees. To apply the derived theorems to finite networks, we conduct a simulation study illustrating that the power-law degree distribution exponents approach their theoretical limits for large networks. It also indicates that in the heavy-tailed regime, the limit distribution of the recentered and suitably rescaled Betti numbers is stable. We demonstrate the practical application of the theoretical results to real-world datasets by analyzing scientific collaboration networks based on data from arXiv.

# summary: An optional shortened abstract.

tags:
- higher-order network
- degree distribution
- stochastic geometry
- random connection model

featured: true

links:
- type: pdf
  url: https://link.springer.com/article/10.1007/s11009-025-10173-7
- type: code
  url: https://github.com/shepherd92/network_simulator/tree/main
- type: slides
  url: uploads/slides/higher_order_adrcm.pdf
- type: poster
  url: uploads/poster/higher_order_adrcm.pdf
- type: dataset
  url: https://github.com/shepherd92/arxiv_dataset

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ''
share: false
---
