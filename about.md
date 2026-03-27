---
layout: page
title: About Us
description: "About ICTP PWF Physics For Bangladesh, its mission, collaborators, and organizing team."
permalink: /about/
intro:
  eyebrow: "About The Initiative"
  title: "Physics training, mentorship, and research exposure for Bangladesh"
  text: "ICTP PWF Physics For Bangladesh is an online initiative that brings together Bangladeshi physicists and the broader research community to support rigorous training, seminars, and mentorship in physics."
---
## What Is ICTP PWF Physics For Bangladesh?

ICTP PWF Physics For Bangladesh is a content-driven academic initiative built to widen access to advanced physics education for students in Bangladesh. It brings together schools, seminar activities, and guided mentorship so that motivated students can engage with topics that are often difficult to access through standard coursework alone.

## Mission And Motivation

Bangladesh has many universities and many talented students, but sustained access to advanced training and research-oriented guidance remains uneven. This initiative aims to broaden access to both foundational and advanced material, while also creating pathways into longer-term research culture.

The project is presented as a collaboration with ICTP and is associated with the efforts of Prof. Nabil Iqbal and Ahmed Rakin Kamal, alongside a wider team of organizers and volunteers.

## Why This Matters In Bangladesh

Strong research cultures are built over time through repeated contact with ideas, mentors, and peer communities. By running schools, seminars, and internship-style mentorship programs, the initiative aims to connect students in Bangladesh with current conversations in theoretical physics, mathematical physics, and related areas.

## Collaborators And Supporting Institutions

- ICTP collaboration context and related academic networks can be described here in more detail.
- Additional partner institutions and local collaborators can be added as the program expands.
- This section is intentionally easy to edit and should be updated with precise institutional wording before publication.

## Organizers

<div class="card-grid card-grid-3">
{% assign core_team = site.organizers | where: "featured", true | sort: "order" %}
{% for organizer in core_team %}
  {% include card-organizer.html item=organizer %}
{% endfor %}
</div>

## Volunteers And Support Team

<div class="card-grid card-grid-3">
{% assign support_team = site.organizers | where: "featured", false | sort: "order" %}
{% for organizer in support_team %}
  {% include card-organizer.html item=organizer %}
{% endfor %}
</div>

## Get Involved

- Volunteer to help coordinate logistics, communications, and student support.
- Contribute lectures, reading sessions, or seminar discussions.
- Help build resource archives, problem sessions, or mentorship pipelines.

For direct inquiries, see the [Contact](/contact/) page.
