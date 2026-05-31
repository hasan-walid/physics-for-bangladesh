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

## Contact

For collaborations and suggestions, please contact:

Ahmed Rakin Kamal: [ahmedrakinkamaltunok@gmail.com](mailto:ahmedrakinkamaltunok@gmail.com)

Prof. Nabil Iqbal: [nabil.iqbal@durham.ac.uk](mailto:nabil.iqbal@durham.ac.uk)
