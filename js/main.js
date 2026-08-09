// Interactive Skills → Projects filter
// Relationships are grounded in the Notion Projects export.
// SQL, Microsoft Word, English, and Korean are included because they appear
// in the Notion Skills views, but no featured project is currently tagged to them.

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
            "icon": "🔍",
            "icon_type": "emoji",
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
            "icon": "🧹",
            "icon_type": "emoji",
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
            "icon": "📊",
            "icon_type": "emoji",
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
            "icon": "🤖",
            "icon_type": "emoji",
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
            "icon": "🔨",
            "icon_type": "emoji",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Product Management",
            "icon": "📱",
            "icon_type": "emoji",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Entrepreneurship",
            "icon": "💼",
            "icon_type": "emoji",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Business Analytics",
            "icon": "💼",
            "icon_type": "emoji",
            "projects": [
                "nib"
            ]
        },
        {
            "name": "Research",
            "icon": "📋",
            "icon_type": "emoji",
            "projects": [
                "hcl"
            ]
        },
        {
            "name": "Artificial Intelligence",
            "icon": "🤖",
            "icon_type": "emoji",
            "projects": [
                "hcl"
            ]
        }
    ],
    "software": [
        {
            "name": "Python",
            "icon": "🐍",
            "icon_type": "emoji",
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
        },
        {
            "name": "Tableau",
            "icon": "T",
            "icon_type": "badge",
            "brand": "tableau",
            "projects": [
                "boeing",
                "olympics",
                "nib"
            ]
        },
        {
            "name": "SQL",
            "icon": "SQL",
            "icon_type": "badge",
            "brand": "sql",
            "projects": []
        },
        {
            "name": "Microsoft Excel",
            "icon": "X",
            "icon_type": "badge",
            "brand": "excel",
            "projects": [
                "nib"
            ]
        },
        {
            "name": "Microsoft PowerPoint",
            "icon": "P",
            "icon_type": "badge",
            "brand": "powerpoint",
            "projects": [
                "hcl",
                "nib"
            ]
        },
        {
            "name": "Microsoft Word",
            "icon": "W",
            "icon_type": "badge",
            "brand": "word",
            "projects": []
        },
        {
            "name": "Adobe Photoshop",
            "icon": "Ps",
            "icon_type": "badge",
            "brand": "photoshop",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Adobe After Effects",
            "icon": "Ae",
            "icon_type": "badge",
            "brand": "aftereffects",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Canva",
            "icon": "C",
            "icon_type": "badge",
            "brand": "canva",
            "projects": [
                "employee",
                "unius"
            ]
        },
        {
            "name": "Jira",
            "icon": "J",
            "icon_type": "badge",
            "brand": "jira",
            "projects": [
                "unius"
            ]
        },
        {
            "name": "Figma",
            "icon": "F",
            "icon_type": "badge",
            "brand": "figma",
            "projects": [
                "unius"
            ]
        }
    ],
    "language": [
        {
            "name": "English",
            "icon": "🇺🇸",
            "icon_type": "emoji",
            "projects": []
        },
        {
            "name": "Korean",
            "icon": "🇰🇷",
            "icon_type": "emoji",
            "projects": []
        }
    ]
};

    const skillGrid = document.getElementById("skill-grid");
    const categoryTabs = [...document.querySelectorAll(".skill-category-tab")];
    const relatedPanel = document.getElementById("related-projects-panel");
    const relatedTitleIcon = document.getElementById("related-projects-title-icon");
    const relatedTitleName = document.getElementById("related-projects-title-name");
    const relatedCount = document.getElementById("related-projects-count");
    const relatedList = document.getElementById("related-projects-list");

    if (!skillGrid || !relatedPanel || categoryTabs.length === 0) return;

    let activeCategory = "expertise";
    let activeSkill = null;

    function getSkill(category, name) {
        return (skillData[category] || []).find((skill) => skill.name === name);
    }

    function makeIcon(skill, extraClass = "") {
        const icon = document.createElement("span");

        if (skill.icon_type === "badge") {
            icon.className = `software-badge software-badge-${skill.brand || "default"} ${extraClass}`.trim();
            icon.textContent = skill.icon;
        } else {
            icon.className = `skill-emoji ${extraClass}`.trim();
            icon.textContent = skill.icon;
        }

        icon.setAttribute("aria-hidden", "true");
        return icon;
    }

    function updateUrl(category, skillName = null) {
        const url = new URL(window.location.href);
        url.searchParams.set("category", category);

        if (skillName) {
            url.searchParams.set("skill", skillName);
        } else {
            url.searchParams.delete("skill");
        }

        url.hash = "skills";
        history.replaceState(null, "", url);
    }

    function clearRelatedProjects() {
        activeSkill = null;
        relatedPanel.hidden = true;
        relatedTitleIcon.textContent = "";
        relatedTitleIcon.className = "related-projects-title-icon";
        relatedTitleName.textContent = "";
        relatedCount.textContent = "";
        relatedList.innerHTML = "";
    }

    function setActiveCategory(category) {
        if (!skillData[category]) return;
        activeCategory = category;

        categoryTabs.forEach((tab) => {
            const isActive = tab.dataset.category === category;
            tab.classList.toggle("active", isActive);
            tab.setAttribute("aria-selected", String(isActive));
        });

        renderSkills(category);
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

            const iconWrap = document.createElement("span");
            iconWrap.className = "skill-pill-icon";
            iconWrap.appendChild(makeIcon(skill));

            const label = document.createElement("span");
            label.className = "skill-pill-label";
            label.textContent = skill.name;

            button.append(iconWrap, label);
            button.addEventListener("click", () => {
                selectSkill(skill, button);
                updateUrl(activeCategory, skill.name);
            });

            skillGrid.appendChild(button);
        });
    }

    function renderNoProjects(skill) {
        const empty = document.createElement("div");
        empty.className = "related-projects-empty";
        empty.innerHTML = `
            <span class="related-projects-empty-mark">—</span>
            <span>No featured project is currently tagged with <strong>${skill.name}</strong>.</span>
        `;
        relatedList.appendChild(empty);
    }

    function selectSkill(skill, clickedButton = null) {
        activeSkill = skill.name;

        const allButtons = [...skillGrid.querySelectorAll(".skill-pill")];
        const selectedButton = clickedButton || allButtons.find((button) => button.dataset.skill === skill.name);

        allButtons.forEach((button) => {
            const isActive = button === selectedButton;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        // Match icon in Related Projects heading.
        relatedTitleIcon.innerHTML = "";
        const titleIcon = makeIcon(skill, "related-heading-icon");
        relatedTitleIcon.appendChild(titleIcon);
        relatedTitleName.textContent = skill.name;

        relatedCount.textContent = `${skill.projects.length} project${skill.projects.length === 1 ? "" : "s"}`;
        relatedList.innerHTML = "";

        if (skill.projects.length === 0) {
            renderNoProjects(skill);
        } else {
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
        }

        relatedPanel.hidden = false;
    }

    categoryTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const category = tab.dataset.category;
            if (!category || category === activeCategory) return;

            clearRelatedProjects();
            setActiveCategory(category);
            updateUrl(category);
        });
    });

    // Deep-link support from project detail pages:
    // ../index.html?category=software&skill=Figma#skills
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");
    const requestedSkill = params.get("skill");

    if (requestedCategory && skillData[requestedCategory]) {
        setActiveCategory(requestedCategory);
    } else {
        setActiveCategory(activeCategory);
    }

    if (requestedSkill) {
        const skill = getSkill(activeCategory, requestedSkill);
        if (skill) {
            selectSkill(skill);
        }
    }
})();
