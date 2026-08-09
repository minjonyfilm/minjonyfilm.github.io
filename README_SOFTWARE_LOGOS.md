# Software Logos + Spotfire Update

This package builds on the previous icon-consistency update.

## Replaced with image logos
- Python
- Tableau
- SQL / MySQL
- Microsoft Excel
- Microsoft PowerPoint
- Microsoft Word
- Canva
- Jira
- Figma

The same logo asset is used on the homepage and in project-detail Skills lists
whenever that software is tagged to a project.

## Added
- Spotfire under Software

Spotfire currently shows zero related featured projects because the supplied
Notion Projects export does not tag any of the 9 featured projects with Spotfire.

## Adobe
Adobe Photoshop and Adobe After Effects are intentionally left as the existing
compact badges.

## Files to replace/add
- css/style.css
- js/main.js
- all files in projects/
- images/software-logos/

index.html does not need to be replaced for this update.

## Git
git add css/style.css js/main.js projects/ images/software-logos/
git commit -m "Use software logos and add Spotfire"
git push
