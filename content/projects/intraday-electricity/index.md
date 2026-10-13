---
title: Intraday Electricity Prices and Optimal Liquidation
date: 2026-01-01
weight: 10
image:
  alt_text: Stylized electricity infrastructure with luminous stepwise price trajectories.
status: Ongoing research · Aarhus University & Aros Commodities
summary: Developed pure-jump models of intraday electricity prices, combining Hawkes processes, auction effects, and calibrated jump distributions. Used high-frequency quote analysis and stochastic control to study optimal liquidation.
---

How should an electricity position be liquidated when trading activity and liquidity change sharply before delivery?
At Aarhus University, in collaboration with Aros Commodities, I developed stochastic models combining self-exciting jump arrivals, time-to-delivery effects, and empirically estimated jump sizes.
I examined auction-related price drops and recovery and represented these effects through scheduled stochastic transitions.
A memory-efficient Python framework supported maximum-likelihood estimation and out-of-sample evaluation on sparse, one-second quote data.
I also formulated Hamilton–Jacobi–Bellman equations for liquidating long positions under price uncertainty and execution costs.
The ongoing research connects interpretable price models with execution decisions.
