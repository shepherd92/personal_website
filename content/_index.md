---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-01-01
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  # custom block is based on "resume-biography-3"
  # changes only in below line:
  # <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
  - block: custom-resume
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: 'Summary'
        education: 'Education'
        interests: 'Interests'
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true

      # Name heading sizing to accommodate long or short names
      name:
        size: sm # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: large # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: resume-skills
    content:
      title: Skills
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: me
  - block: resume-languages
    content:
      title: Languages
      username: me
  - block: custom-experience
    id: experience
    content:
      title: Professional Experience
      username: me
    design:
      # Hugo date format
      date_format: 'January 2006'
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
      text: ''
      filters:
        folders:
          - patents
        exclude_featured: false
    design:
      view: article-grid
      columns: 3
  - block: resume-awards
    id: awards
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Awards, Grants'
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
      view: citation  # card / article-grid / date-title-summary / citation
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
      view: citation  # card / article-grid / date-title-summary / citation
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
      columns: '3'
      view: article-grid  # card / article-grid / date-title-summary / citation
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: markdown
    id: misc
    content:
      title: Miscellaneous
      text: |
        - [Time series helper](/uploads/misc/time_series_helpers.ipynb)
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
