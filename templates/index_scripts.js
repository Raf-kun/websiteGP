// Переменные для звуков
const sfxIgnite = document.getElementById('sfx-ignite');
const ambienceBg = document.getElementById('ambience-bg');
// Установим громкость
sfxIgnite.volume = 0.4;
ambienceBg.volume = 0.2;

function showFacultySelect() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('faculty-screen').classList.remove('hidden');
}

function selectFaculty(faculty) {
    // Скрываем выбор
    document.getElementById('faculty-screen').classList.add('hidden');

    const main = document.getElementById('main-site');
    // Применяем стили факультета
    main.className = faculty;

    // Меняем заголовок
    const titles = {
        'gryffindor': 'Башня Гриффиндора',
        'slytherin': 'Подземелья Слизерина',
        'ravenclaw': 'Гостиная Когтеврана',
        'hufflepuff': 'Подвал Пуффендуя'
    };
    document.getElementById('faculty-title').innerText = titles[faculty];

    // Запускаем анимацию появления (небольшая задержка)
    setTimeout(() => {
        main.classList.add('fade-in');
    }, 100);
}

let isLumosOn = false;

function toggleLumos() {
    isLumosOn = !isLumosOn;
    document.body.classList.toggle('lumos-active');

    // Логика звуков
    if (isLumosOn) {
        // Если включили свет
        sfxIgnite.currentTime = 0; // Сброс звука на начало
        sfxIgnite.play(); // Звук зажигания

        // Браузеры часто блокируют фоновый звук, если нет взаимодействия.
        // Клик по свече - это взаимодействие, поэтому мы можем запустить фон.
        if (ambienceBg.paused) {
            ambienceBg.play().catch(e => console.log("Автовоспроизведение фона заблокировано браузером"));
        }
    } else {
        // Если выключили свет
        // Опционально: можно добавить звук задувания свечи
    }
}

// Функция эффекта печатающейся машинки
function typeWriter(elementId, text, speed = 100) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Очищаем перед началом
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Вызов функции при загрузке факультета
function selectFaculty(faculty) {
    document.getElementById('faculty-screen').classList.add('hidden');
    const main = document.getElementById('main-site');
    main.className = 'prophet-container ' + faculty;

    // Запускаем эффект для заголовка
    const newsTitle = "МАЛЬЧИК, КОТОРЫЙ ЛЖЕТ?";
    setTimeout(() => {
        main.classList.add('fade-in');
        typeWriter("main-headline", newsTitle, 80);
    }, 500);
}

// Добавим немного случайных событий
setInterval(() => {
    const photo = document.getElementById('main-photo');
    // Эффект вспышки на фото, будто там что-то происходит
    photo.style.filter = "grayscale(0.5) brightness(1.5)";
    setTimeout(() => {
        photo.style.filter = "grayscale(1) sepia(0.4) contrast(1.3)";
    }, 150);
}, 8000);
