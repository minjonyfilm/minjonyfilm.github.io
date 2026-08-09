# Complete Skills + Linked Project Headers Update

This package builds on the current homepage and the latest project-detail versions.

## Main SKILLS — complete Notion list

### Expertise
- Data Analytics
- Data Cleaning
- Data Visualization
- Machine Learning
- Project Management
- Product Management
- Entrepreneurship
- Business Analytics
- Research
- Artificial Intelligence

### Software
- Python
- Tableau
- SQL
- Microsoft Excel
- Microsoft PowerPoint
- Microsoft Word
- Adobe Photoshop
- Adobe After Effects
- Canva
- Jira
- Figma

### Language
- English
- Korean

Python is under Software, matching the Notion screenshot.
English and Korean are under Language.

## Project filtering
Click a Skill on the homepage to display its Related Projects.

SQL, Microsoft Word, English, and Korean are included because they appear in the
Notion Skills views. They currently show zero related projects because the supplied
Notion Projects export does not tag any featured project with those skills.

## Project detail header linking
Every skill listed at the top of all 9 project pages is now clickable.

Example:
UNIUS → Figma
→ index.html?category=software&skill=Figma#skills
→ Software tab opens
→ Figma is selected
→ UNIUS appears under Related Projects.

The same deep-link behavior is implemented across all 9 project detail pages.

## Replace these files

- index.html
- css/style.css
- js/main.js
- all HTML files inside projects/

No image folders or PDFs need to be replaced.

## Git

git add index.html css/style.css js/main.js projects/
git commit -m "Complete skills directory and link project skills"
git push
