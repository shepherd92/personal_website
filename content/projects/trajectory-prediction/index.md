---
title: Probabilistic Trajectory Prediction
date: 2022-10-31
weight: 20
status: Industrial research · Bosch
summary: Developed Gaussian regression models to predict road users' trajectories and quantify uncertainty. Connected Python prototyping, C++ implementation, and empirical validation in safety-critical automated-driving systems.
links:
  - type: custom
    label: Patent
    url: /patents/trajectory_prediction/
  - type: video
    url: /uploads/supplementary/trajectory_prediction.mp4
---

Automated driving requires predictions of where other road users may move and how uncertain those predictions are.
At Bosch, I developed a Gaussian regression-based method for trajectory prediction with explicit uncertainty estimates.
I evaluated forecasting accuracy and uncertainty calibration against production baselines and translated Python research prototypes into C++ systems with defined reliability requirements.
The broader programme included analysis of more than 20,000 hours of driving data and technical leadership of an eleven-person environment-prediction team.
The [patent application](https://patents.google.com/patent/US20210366274A1) and demonstration document the trajectory-prediction method, connecting probabilistic modeling with the practical constraints of real-time software.
