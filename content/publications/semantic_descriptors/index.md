---
title: Semantic descriptors from LLMs improve spatial generalization in property price prediction
authors: ["Béla Bálint", "József Pintér", "Flórián Kaczúr", "Péter Juhász", "Roland Molontay"]
date: 2026-10-12
publication_types:
  - paper-conference
publication:
  name: "Proceedings of the 9th ACM SIGSPATIAL International Workshop on AI for Geographic Knowledge Discovery"
  short_name: "GeoAI 2026"
  publisher: "Association for Computing Machinery"
status: Accepted full research paper

abstract: Accurately estimating real estate prices remains challenging in highly heterogeneous housing markets, particularly in post-socialist urban environments. This study proposes a gradient boosting framework that integrates intrinsic property characteristics, socio-economic indicators, continuous distance-based spatial features, and discrete low-dimensional semantic indicators extracted from unstructured property descriptions using large language models (LLMs). The approach is evaluated on a country-scale dataset of 61,874 Hungarian real estate listings. To assess geographic generalizability and reduce spatial leakage, we employ spatially clustered cross-validation. We further interpret the model using SHAP values and integrated gradients to examine feature importance and model behavior. Our results show that LLM-derived semantic indicators substantially improve predictive performance compared to a baseline utilizing only socio-economic and POI-based spatial features, particularly in highly heterogeneous areas where distance-based spatial metrics are less reliable. Incorporating these semantic features reduces spatially cross-validated RMSE by 10.5% relative to the baseline, while also decreasing residual spatial autocorrelation (Moran’s) by 7.8%. Furthermore, the proposed semantic proxy representation outperforms previously used BERT-based embedding approaches in predictive performance and interpretability.

tags:
- Geo-AI
- Large Language Models
- Spatial generalization
- Property price estimation
- Spatial cross-validation

peer_reviewed: true
featured: true
summary: Research on using LLM-derived semantic descriptors to improve the spatial generalization of property-price prediction models. Accepted as a full research paper at GeoAI 2026.
share: false
reading_time: false
---

Accepted as a full research paper at the 9th ACM SIGSPATIAL International Workshop on AI for Geographic Knowledge Discovery (GeoAI 2026).
Publication details will be added when available.
