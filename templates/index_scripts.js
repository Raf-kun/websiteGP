function showFacultySelect() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('faculty-screen').classList.remove('hidden');
}

function selectFaculty(faculty) {
    document.getElementById('faculty-screen').classList.add('hidden');
    const main = document.getElementById('main-site');
    
    // Показываем газету
    main.classList.remove('hidden-site');
    setTimeout(() => main.style.opacity = "1", 50);

    // Меняем заголовок
    const titles = {
        'gryffindor': 'Вестник Гриффиндора',
        'slytherin': 'Слизеринский Листок',
        'ravenclaw': 'Око Когтеврана',
        'hufflepuff': 'Вести Пуффендуя'
    };
    document.getElementById('faculty-title').innerText = titles[faculty];
    
    // Эффект печати
    typeWriter("main-headline", "МАЛЬЧИК, КОТОРЫЙ ЛЖЕТ?", 70);
}

function typeWriter(id, text, speed) {
    let i = 0;
    const el = document.getElementById(id);
    el.innerHTML = "";
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function toggleLumos() {
    document.body.classList.toggle('lumos-active');
    const sfx = document.getElementById('sfx-ignite');
    const bg = document.getElementById('ambience-bg');
    
    if (document.body.classList.contains('lumos-active')) {
        sfx.currentTime = 0;
        sfx.play();
        bg.play().catch(() => {});
    }
}

function showSection(sectionId) {
    // Находим все секции
    const sections = document.querySelectorAll('.faculty-section');
    
    // Скрываем все секции
    sections.forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Показываем нужную
    const activeSection = document.getElementById('section-' + sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Если это газета, перезапустим эффект печатной машинки (по желанию)
    if (sectionId === 'prophet') {
        typeWriter("main-headline", "МАЛЬЧИК, КОТОРЫЙ ЛЖЕТ?", 70);
    }
}