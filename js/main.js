// Interactive Skills → Projects filter
// Skill relationships are based on the Notion Projects export used for this portfolio.

(() => {
    const projectData = {
    "unius": {
        "title": "Founding & Planning of the “UNIUS” – A Student Housing App Service",
        "href": "projects/unius.html"
    },
    "nib": {
        "title": "Lean Six Sigma Green Belt Certification with National Industries for the Blind (NIB)",
        "href": "projects/nib-lean-six-sigma.html"
    },
    "hcl": {
        "title": "AI-Driven Software Vulnerability Remediation with HCLSoftware",
        "href": "projects/hclsoftware.html"
    },
    "employee": {
        "title": "Employee Attrition Analysis and Prediction",
        "href": "projects/employee-attrition.html"
    },
    "hotel": {
        "title": "Hotel Booking Cancellation Analysis and Prediction",
        "href": "projects/hotel-booking.html"
    },
    "olympics": {
        "title": "120 Years of Olympic Analysis: Data Insights to Medal Prediction",
        "href": "projects/olympics.html"
    },
    "horses": {
        "title": "Health Outcomes of Horses Prediction",
        "href": "projects/horses.html"
    },
    "boeing": {
        "title": "Comparative Analysis of Boeing and Airbus",
        "href": "projects/boeing-airbus.html"
    },
    "netflix": {
        "title": "Netflix Movie Recommendation",
        "href": "projects/netflix.html"
    }
};
    const skillData = {
    "expertise": [
        {
            "name": "Data Analytics",
            "icon": "⌕",
            "projects": [
                "netflix",
                "boeing",
                "horses",
                "olympics",
                "hotel",
                "employee",
                "nib"
            ]
        },
        {
            "name": "Data Cleaning",
            "icon": "♞",
            "projects": [
                "netflix",
                "boeing",
                "horses",
                "olympics",
                "hotel",
                "employee",
                "nib"
            ]
        },
        {
            "name": "Data Visualization",
            "icon": "▥",
            "projects": [
                "netflix",
                "boeing",
                "horses",
                "olympics",
                "hotel",
                "employee",
                "nib"
            ]
        },
        {
            "name": "Machine Learning",
            "icon": "♙",
            "projects": [
                "netflix",
                "horses",
                "olympics",
                "hotel",
                "employee"
            ]
        },
        {
            "name": "Project Management",
            "icon": "⚒",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Product Management",
            "icon": "▣",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Entrepreneurship",
            "icon": "▣",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Business Analytics",
            "icon": "▣",
            "projects": [
                "nib"
            ]
        },
        {
            "name": "Research",
            "icon": "⌕",
            "projects": [
                "hcl"
            ]
        },
        {
            "name": "Artificial Intelligence",
            "icon": "♙",
            "projects": [
                "hcl"
            ]
        }
    ],
    "software": [
        {
            "name": "Tableau",
            "icon": "▥",
            "projects": [
                "boeing",
                "olympics",
                "nib"
            ]
        },
        {
            "name": "Microsoft Excel",
            "icon": "▦",
            "projects": [
                "nib"
            ]
        },
        {
            "name": "Microsoft PowerPoint",
            "icon": "▤",
            "projects": [
                "hcl",
                "nib"
            ]
        },
        {
            "name": "Canva",
            "icon": "◈",
            "projects": [
                "employee",
                "unius"
            ]
        },
        {
            "name": "Figma",
            "icon": "◇",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Jira",
            "icon": "☷",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Adobe After Effects",
            "icon": "◫",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Adobe Photoshop",
            "icon": "▣",
            "projects": [
                "unius"
            ]
        }
    ],
    "language": [
        {
            "name": "Python",
            "icon": "🐍",
            "projects": [
                "netflix",
                "boeing",
                "horses",
                "olympics",
                "hotel",
                "employee",
                "hcl",
                "nib"
            ]
        }
    ]
};

    const skillGrid = document.getElementById("skill-grid");
    const categoryTabs = [...document.querySelectorAll(".skill-category-tab")];
    const relatedPanel = document.getElementById("related-projects-panel");
    const relatedTitle = document.getElementById("related-projects-title");
    const relatedCount = document.getElementById("related-projects-count");
    const relatedList = document.getElementById("related-projects-list");

    if (!skillGrid || !relatedPanel || categoryTabs.length === 0) return;

    let activeCategory = "expertise";
    let activeSkill = null;

    function clearRelatedProjects() {
        activeSkill = null;
        relatedPanel.hidden = true;
        relatedTitle.textContent = "";
        relatedCount.textContent = "";
        relatedList.innerHTML = "";
    }

    function renderSkills(category) {
        const skills = skillData[category] || [];
        skillGrid.innerHTML = "";

        skills.forEach((skill) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "skill-pill";
            button.dataset.skill = skill.name;
            button.setAttribute("aria-pressed", "false");

            const icon = document.createElement("span");
            icon.className = "skill-pill-icon";
            icon.setAttribute("aria-hidden", "true");
            icon.textContent = skill.icon;

            const label = document.createElement("span");
            label.textContent = skill.name;

            button.append(icon, label);
            button.addEventListener("click", () => selectSkill(skill, button));
            skillGrid.appendChild(button);
        });
    }

    function selectSkill(skill, clickedButton) {
        activeSkill = skill.name;

        skillGrid.querySelectorAll(".skill-pill").forEach((button) => {
            const isActive = button === clickedButton;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        relatedTitle.textContent = skill.name;
        relatedCount.textContent = `${skill.projects.length} project${skill.projects.length === 1 ? "" : "s"}`;
        relatedList.innerHTML = "";

        skill.projects.forEach((projectId) => {
            const project = projectData[projectId];
            if (!project) return;

            const link = document.createElement("a");
            link.className = "related-project-link";
            link.href = project.href;

            const title = document.createElement("span");
            title.className = "related-project-link-title";
            title.textContent = project.title;

            const arrow = document.createElement("span");
            arrow.className = "related-project-link-arrow";
            arrow.setAttribute("aria-hidden", "true");
            arrow.textContent = "→";

            link.append(title, arrow);
            relatedList.appendChild(link);
        });

        relatedPanel.hidden = false;
    }

    categoryTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const category = tab.dataset.category;
            if (!category || category === activeCategory) return;

            activeCategory = category;

            categoryTabs.forEach((item) => {
                const isActive = item === tab;
                item.classList.toggle("active", isActive);
                item.setAttribute("aria-selected", String(isActive));
            });

            clearRelatedProjects();
            renderSkills(activeCategory);
        });
    });

    renderSkills(activeCategory);
})();
