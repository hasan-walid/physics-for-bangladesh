---
layout: page
title: About Us
description: "About ICTP PWF Physics For Bangladesh, its mission, collaborators, and organizing team."
permalink: /about/
intro:
  eyebrow: "About The Initiative"
  title: "Physics training, seminars, and mentorship for Bangladesh"
  text: "ICTP PWF Physics For Bangladesh is an outreach program of Physics Without Frontiers at ICTP."
---
## Program

ICTP PWF Physics For Bangladesh is an outreach program under Physics Without Frontiers at the International Centre for Theoretical Physics. It was launched by Prof. Nabil Iqbal and Ahmed Rakin Kamal to offer rigorous courses in physics and to help develop the physics scene in Bangladesh.

The program runs a yearly cycle of schools, seminars, and mentorship activities. The aim is to widen access to advanced material, connect students with researchers, and support a stronger long-term culture of physics learning and research.

## Organizers

<ul class="people-list">
{% assign core_team = site.organizers | where: "featured", true | sort: "order" %}
{% for organizer in core_team %}
  <li><strong>{{ organizer.name }}</strong><span>{{ organizer.affiliation }}</span></li>
{% endfor %}
</ul>

## Student Volunteers

<ul class="people-list">
{% assign support_team = site.organizers | where: "featured", false | sort: "order" %}
{% for organizer in support_team %}
  <li><strong>{{ organizer.name }}</strong><span>{{ organizer.affiliation }}</span></li>
{% endfor %}
</ul>

## Contact

For public inquiries, applications, and collaborations, email [physicsforbangladesh@gmail.com](mailto:physicsforbangladesh@gmail.com).
