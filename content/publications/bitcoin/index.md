---
title: "A Bayesian approach to identify Bitcoin users"
authors:
- Péter Juhász
- József Stéger
- Dániel Kondor
- Gábor Vattay
# author_notes:
# - "Equal contribution"
date: "2018-12-01T00:00:00Z"
# doi: "https://doi.org/10.1371/journal.pone.0207000"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-09-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

publication:
  name: "*Public Library of Science One*"
  short_name: "*PLoS One*"
  volume: 13
  issue: 12
  pages: e0207000
  publisher: Public Library of Science One

peer_reviewed: true
open_access: true
license: CC-BY-4.0

hugoblox:
  ids:
    doi: 10.1371/journal.pone.0207000

abstract: Bitcoin is a digital currency and electronic payment system operating over a peer-to-peer network on the Internet. One of its most important properties is the high level of anonymity it provides for its users. The users are identified by their Bitcoin addresses, which are random strings in the public records of transactions, the blockchain. When a user initiates a Bitcoin transaction, his Bitcoin client program relays messages to other clients through the Bitcoin network. Monitoring the propagation of these messages and analyzing them carefully reveal hidden relations. In this paper, we develop a mathematical model using a probabilistic approach to link Bitcoin addresses and transactions to the originator IP address. To utilize our model, we carried out experiments by installing more than a hundred modified Bitcoin clients distributed in the network to observe as many messages as possible. During a two month observation period we were able to identify several thousand Bitcoin clients and bind their transactions to geographical locations.

# summary: An optional shortened abstract.

tags:
- Bitcoin
- computer networks
- geographic distribution
- probability distribution
- finance
- cryptocurrency

featured: true

links:
- type: pdf
  url: https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0207000&type=printable
- type: code
  url: https://github.com/dkondor/bitcoin
- type: slides
  url: uploads/slides/bitcoin.pdf
- type: video
  url: uploads/supplementary/bitcoin_transactions.avi
- type: poster
  url: uploads/poster/bitcoin.pdf
- type: dataset
  url: https://figshare.com/projects/A_Bayesian_Approach_to_Identify_Bitcoin_Users/56387


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ''
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
share: true
---

<!--- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). --->
