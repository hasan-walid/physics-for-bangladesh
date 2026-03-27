---
layout: page
title: Contact
description: "Contact and follow ICTP PWF Physics For Bangladesh."
permalink: /contact/
intro:
  eyebrow: "Contact"
  title: "Questions, updates, and collaboration inquiries"
  text: "Use this page to publish the primary contact address for applications, announcements, seminar updates, and volunteer coordination."
---
## General Contact

For program questions, registration queries, and collaboration requests, update the primary contact details in the site data files so the information automatically stays synchronized across the website.

<div class="panel-card">
  <h2>Public Contact</h2>
  <p><a href="mailto:{{ site.data.contact.general_email }}">{{ site.data.contact.general_email }}</a></p>
  <p>{{ site.data.contact.notes }}</p>
</div>

## Follow Updates

The footer and this page pull social links from the shared data files. Replace the placeholders with the official YouTube channel, social pages, and any program mailing list or announcement channel before publishing.

<div class="card-grid card-grid-3">
{% for item in site.data.socials %}
  <a class="quick-link" href="{{ item.url }}">
    <span>{{ item.label }}</span>
    <small>{{ site.data.contact.social_note }}</small>
  </a>
{% endfor %}
</div>
