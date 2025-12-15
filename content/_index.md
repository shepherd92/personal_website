---
# Leave the homepage title empty to use the site title
title: ''
date: 2023-11-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Péter Juhász, PhD
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: peter_juhasz
  - block: skills
    content:
      title: Skills
      text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: peter_juhasz
    design:
      columns: '1'
  - block: experience
    id: experience  
    content:
      title: Professional Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: PhD Researcher in Probability
          company: Aarhus University
          company_url: 'https://math.au.dk/en/research/stochastics'
          company_logo: aarhus_university
          location: Aarhus, Denmark
          date_start: '2022-11-01'
          date_end: '2025-12-15'
          description: |2-
              * Developed and analyzed **stochastic models for complex, high-dimensional systems**, with applications to interacting stochastic systems.
              * Designed and implemented **high-performance Monte Carlo algorithms** in Python and C++ for validation of large-scale stochastic network models.
              * **Taught advanced probability, data analysis, and differential equations** to mathematics and data-science students.
          # * Proved **theoretical results in stochastic point processes and random graphs**.
        - title: Machine Learning Researcher in Automated Driving
          company: Bosch Group Hungary
          company_url: 'https://www.bosch.hu/en/'
          company_logo: bosch
          location: Budapest, Hungary
          date_start: '2018-05-15'
          date_end: '2022-10-31'
          description: |2-
              * **Patented a Gaussian regression based stochastic trajectory prediction model** improving accuracy by 3× and uncertainty estimation by 10× over baseline.
              * **Built Python prototypes for forecasting** and uncertainty quantification, and translated them into production environments.
              * **Conducted large-scale data analysis** and validation experiments to evaluate model performance.
          # * **Led a team of 11** developing environment prediction modules for automated driving as a technical lead.
          # * **Created a framework for automated ground-truth generation** enabling large-scale data-driven model evaluation.
        - title: Software Engineer for Mobile Networks
          company: Ericsson Telecommunications Hungary
          company_url: 'https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/hungary'
          company_logo: ericsson
          location: Budapest, Hungary
          date_start: '2016-03-01'
          date_end: '2018-05-14'
          description: |2-
              * Analyzed response times of distributed systems to **optimize load-balancing strategies**.
              * Implemented **performance-critical algorithms** for Smart Services Routers.
          # * **Designed response time-based load-balancing algorithms** for distributed systems, improving efficiency though quantitative optimization.
          # * **Coordinated a team of 8** as a deputy of the product owner
    design:
      columns: '2'
  - block: collection
    id: publications
    content:
      title: Publications
      count: 0
      filters:
        folders:
          - publication
        featured_only: false
    design:
      columns: '2'
      view: compact  # card / showcase / compact / citation
  - block: collection
    id: patents
    content:
      title: Patents
      count: 0
      filters:
        folders:
          - patent
        featured_only: false
    design:
      columns: '2'
      view: compact  # card / showcase / compact / citation
  - block: accomplishments
    id: awards
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Awards, Grants'
      count: 0
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - date_end: '2025-10-30'
          date_start: '2022-11-01'
          description: '**1 890 000 DKK** Stochastic Models of Higher-Order Networks'
          icon: ddsa
          organization: Danish Data Science Academy
          organization_url: https://ddsa.dk/
          title: PhD Fellowship Grant -- DDSA-PhD-2022-008
          url:
        - date_end: '2021-06-30'
          date_start: '2020-09-01'
          description: '**350 000 HUF** Digitalization, Artificial Intelligence, and the Age of Data – What Makes a Meme Viral?'
          icon: mnb
          organization: Hungarian National Bank
          organization_url: https://www.mnb.hu/en/
          title: Excellence Award for Outstanding Thesis and Diploma Work
          url:
        - date_end: '2024-12-31'
          date_start: '2024-10-01'
          description: '**20 000 DKK** Evolving Stochastic Network Models'
          icon: aarhus_university
          organization: Aarhus University
          organization_url: https://www.au.dk/
          title: Academic Mobility Grant for International Exchange
          url:
          # certificate_url: 
        - date_end: '2025-03-14'
          date_start: '2025-03-11'
          description: '**500 EUR** Random Connection Hypergraphs'
          icon: ems
          organization: European Mathematical Society
          organization_url: https://euromathsoc.org/
          title: Individual Travel Grant for Presenting a Talk at GPSD 2025
          url:
        - date_end: '2016-01-31'
          date_start: '2015-09-01'
          description: '**3000 EUR**'
          icon: erasmus
          organization: Technische Universiteit Delft
          organization_url: https://www.tudelft.nl/
          title: Erasmus+ Scholarship
          url:
    design:
      columns: '2'
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'
  # - block: portfolio
  #   id: projects
  #   content:
  #     title: Projects
  #     filters:
  #       folders:
  #         - project
  #     # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  #     default_button_index: 0
  #     # Filter toolbar (optional).
  #     # Add or remove as many filters (`filter_button` instances) as you like.
  #     # To show all items, set `tag` to "*".
  #     # To filter by a specific tag, set `tag` to an existing tag name.
  #     # To remove the toolbar, delete the entire `filter_button` block.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       - name: Deep Learning
  #         tag: Deep Learning
  #       - name: Other
  #         tag: Demo
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     view: showcase
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: false
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: |-
  #       {{% callout note %}}
  #       Quickly discover relevant content by [filtering publications](./publication/).
  #       {{% /callout %}}
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: true
  #   design:
  #     columns: '2'
  #     view: citation
  - block: collection
    id: qualifications
    content:
      title: Additional Qualifications
      count: 0
      filters:
        folders:
          - qualifications
    design:
      columns: '2'
      view: citation
  - block: collection
    id: events
    content:
      title: Events
      count: 0
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: citation
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="research" >}}
  #   design:
  #     columns: '1'
  - block: collection
    id: teaching
    content:
      title: Teaching
      count: 0
      filters:
        folders:
          - teaching
        featured_only: false
    design:
      columns: '2'
      view: citation  # card / showcase / compact / citation
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text:
      email: peter@ljuhasz.com
      phone:
      appointment_url:
      address:
        street: 118 Ny Munkegade
        city: Aarhus C
        region: Central Jutland
        postcode: '8000'
        country: Denmark
        country_code: DK
      directions: Office 315, Floor 3, Building 1535
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      # Choose a map provider in `params.yaml` to show a map from these coordinates
      coordinates:
        latitude: '56.1663'
        longitude: '10.2000'  
      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/Twitter'
      #   - icon: skype
      #     icon_pack: fab
      #     name: Skype Me
      #     link: 'skype:echo123?call'
      #   - icon: video
      #     icon_pack: fas
      #     name: Zoom Me
      #     link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      # form:
      #   provider: netlify
      #   formspree:
      #     id:
      #   netlify:
      #     # Enable CAPTCHA challenge to reduce spam?
      #     captcha: false
    design:
      columns: '2'

share: false
---
