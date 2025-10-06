import { teamMembers } from "../data/team-data";

export function renderTeam() {
    const section = document.querySelector('[data-section="team"]');
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

    teamMembers.forEach(member => {
        content.appendChild(createMember(member));
    });

    function createMember(member) {
        const item = createElement('div', 'team__item');
        const avatar = createAvatar(member);
        const infoBox = createInfoBox(member);

        item.append(avatar, infoBox);
        return item;
    }

    function createAvatar(member) {
        const img = createElement('img', 'team__img');
        img.src = member.img;
        img.alt = member.name;
        img.loading = 'lazy';
        return img;
    }

    function createInfoBox(member) {
        const box = createElement('div', 'team__item-box');
        const name = createElement('p', 'team__item-name', member.name);
        const descr = createElement('p', 'team__item-descr', member.descr);
        
        const detailsBtn = createElement('button', 'team__details-btn', 'Подробнее');
        detailsBtn.type = 'button';
        detailsBtn.addEventListener('click', () => openModal(member));

        box.append(name, descr, detailsBtn);
        return box;
    }

    function createElement(tag, className, textContent = '') {
        const element = document.createElement(tag);
        element.className = className;
        if (textContent) element.textContent = textContent;
        return element;
    }

    function openModal(member) {
        const overlay = createElement('div', 'modal-overlay');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        const modal = createElement('div', 'team-modal');
        modal.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        `;

        const closeBtn = createElement('button', 'modal-close', '×');
        closeBtn.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        closeBtn.addEventListener('click', () => overlay.remove());

        const modalContent = createElement('div', 'modal-content');
        
        const modalImage = createElement('img', 'modal-image');
        modalImage.src = member.img;
        modalImage.alt = member.name;
        modalImage.style.cssText = `
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 1rem;
        `;

        const modalName = createElement('h3', 'modal-name', member.name);
        modalName.style.cssText = `
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
            color: #1e212c;
        `;

        const modalDescr = createElement('p', 'modal-descr', member.descr);
        modalDescr.style.cssText = `
            margin: 0 0 1rem 0;
            font-weight: 500;
            color: #424551;
        `;

        const modalFullInfo = createElement('p', 'modal-full-info', member.fullInfo);
        modalFullInfo.style.cssText = `
            margin: 0;
            line-height: 1.6;
            color: #5a5a5a;
        `;

        modalContent.append(modalImage, modalName, modalDescr, modalFullInfo);
        modal.append(closeBtn, modalContent);
        overlay.appendChild(modal);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                overlay.remove();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);

        document.body.appendChild(overlay);
    }

    container.appendChild(descr);
    container.appendChild(content);
    section.appendChild(container);
}
