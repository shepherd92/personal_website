---
title: ''
date: 2022-01-01
type: landing
design:
  spacing: '6rem'
sections:
  - block: custom-resume
    id: about
    content:
      username: me
      button:
        text: Download CV
        url: /uploads/peter_juhasz_cv.pdf
      headings:
        about: Profile
        education: Education
        interests: Interests
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: sm
      avatar:
        size: large
        shape: circle
  - block: resume-skills
    content:
      title: Skills
      username: me
  - block: custom-languages
    content:
      title: Languages
      username: me
  - block: custom-experience
    id: experience
    content:
      title: Professional Experience
      username: me
    design:
      date_format: 'January 2006'
  - block: collection
    id: projects
    content:
      title: Research & Projects
      filters:
        folders:
          - projects
      count: 3
      sort_by: Weight
      sort_ascending: true
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        folders:
          - publications
        featured_only: true
      count: 0
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: patents
    content:
      title: Patents
      filters:
        folders:
          - patents
    design:
      view: article-grid
      columns: 3
  - block: resume-awards
    id: awards
    content:
      title: Awards, Grants
      username: me
  - block: collection
    id: qualifications
    content:
      title: Additional Qualifications
      count: 0
      filters:
        folders:
          - qualifications
    design:
      view: citation
  - block: collection
    id: events
    content:
      title: Events
      count: 0
      filters:
        folders:
          - events
    design:
      columns: '2'
      view: citation
  - block: collection
    id: teaching
    content:
      title: Teaching
      count: 0
      filters:
        folders:
          - teaching
    design:
      columns: '3'
      view: article-grid
  - block: markdown
    id: misc
    content:
      title: Research Software & Resources
      text: |
        - [Network simulator](https://github.com/shepherd92/network_simulator): Python/C++ software for stochastic network models and computational experiments.
        - [Scientific collaboration dataset](https://github.com/shepherd92/arxiv_dataset): data and tools used in my higher-order network research.
        - <a href="/uploads/misc/time_series_helpers.ipynb" download>Time-series analysis notebook (.ipynb)</a>: a collection of helpers for exploration, stationarity checks, feature construction, model fitting, and error analysis.
  - block: contact-info
    id: contact
    content:
      title: Contact
      address:
        lines:
          - 118 Ny Munkegade
          - Aarhus C, Central Jutland
          - '8000 Denmark DK'
      directions: Office 315, Floor 3, Building 1535
      email: peter@ljuhasz.com
      map_url: https://maps.app.goo.gl/ywq1jnut6obKC2HH8
      show_form: false
---
