export function renderTeam() {
    const section = document.querySelector(".team.section");
    if (!section) return;

    const container = document.createElement("div");
    container.className = "container section__inner";

    const descr = document.createElement("div");
    descr.className = "courses__descr section__descr";

    const title = document.createElement("h2");
    title.className = "team__title title";
    title.textContent = "Наши преподаватели";

    const text = document.createElement("p");
    text.className = "section__text";
    text.textContent =
        "Эти люди работают вместе, чтобы создавать для вас курсы, которые помогут вам начать свой собственный бизнес или хобби.";

    descr.appendChild(title);
    descr.appendChild(text);

    const content = document.createElement("div");
    content.className = "team__content section__content-descr";

    const teamMembers = [
        { img: "images/team-1.jpg", name: "Преподаватель Артём", descr: "Имеет опыт преподавания и работы 4 года" },
        { img: "images/team-2.jpg", name: "Преподаватель Анна", descr: "Имеет опыт преподавания и работы 6 лет" },
        { img: "images/team-3.jpg", name: "Преподаватель Галина", descr: "Обучает сфере дизайна и декорирования" },
        { img: "images/team-4.jpg", name: "Маркетолог Ольга", descr: "Поможет вам с рекламой" }
    ];

    teamMembers.forEach(member => {
        const item = document.createElement("div");
        item.className = "team__item";

        const img = document.createElement("img");
        img.src = member.img;
        img.alt = member.name;
        img.className = "team__img";

        const box = document.createElement("div");
        box.className = "team__item-box";

        const name = document.createElement("p");
        name.className = "team__item-name";
        name.textContent = member.name;

        const descr = document.createElement("p");
        descr.className = "team__item-descr";
        descr.textContent = member.descr;

        box.appendChild(name);
        box.appendChild(descr);

        item.appendChild(img);
        item.appendChild(box);

        content.appendChild(item);
    });

    container.appendChild(descr);
    container.appendChild(content);
    section.appendChild(container);
}
