// debugger;

let currentLanguage = 'ru-RU';

class HeaderLanguage {
    constructor(profileCards,language) {
        this.profileCards = profileCards;
        this.language = language;
    }
}

const headerLanguage = new Map([
    ['en',new HeaderLanguage('Profile Cards','Language')],
    ['ru-RU',new HeaderLanguage('Карточки профиля','Язык')],
    ['he-IL',new HeaderLanguage('כרטיסי פרופיל','שפה')]
]);

class CardLanguage {
    constructor(personName,jobTitle,description) {
        this.personName = personName;
        this.jobTitle = jobTitle;
        this.description = description;
    }
}

const card1Language = new Map([
    ['en',new CardLanguage('Patrick Wood','CEO / Co-Founder','Don\'t scared of the truth because we need to restart the human foundation in truth And I Love you like Kanye I love Rick Owens\' bed design but the back is...')],
    ['ru-RU',new CardLanguage('Патрик Вуд','Генеральный директор / соучредитель','Не бойся правды, потому что нам нужно перезапустить человеческую основу в правде. И я люблю тебя, как Канье. Мне нравится дизайн кровати Рика Оуэнса, но спинка...')],
    ['he-IL',new CardLanguage('פטריק ווד','מנכ"ל / מייסד שותף','אל תפחד מהאמת כי אנחנו צריכים להפעיל מחדש את הבסיס האנושי במציאות ואני אוהב אותך כמו קניה אני אוהב את עיצוב המיטה של ריק אוונס אבל הגב הוא...')]
]);

const card2Language = new Map([
    ['en',new CardLanguage('Debon Amet','Front End Developer','Don\'t scared of the truth because we need to restart the human foundation in truth And I Love you like Kanye I love Rick Owens\' bed design but the back is...')],
    ['ru-RU',new CardLanguage('Дебон Амет','Разработчик интерфейса','Не бойся правды, потому что нам нужно перезапустить человеческую основу в правде. И я люблю тебя, как Канье. Мне нравится дизайн кровати Рика Оуэнса, но спинка...')],
    ['he-IL',new CardLanguage('דבון אמט','מפתח קצה','אל תפחד מהאמת כי אנחנו צריכים להפעיל מחדש את הבסיס האנושי במציאות ואני אוהב אותך כמו קניה אני אוהב את עיצוב המיטה של ריק אוונס אבל הגב הוא...')]
]);

const card3Language = new Map([
    ['en',new CardLanguage('Mary Dunst','Web Designer','Don\'t scared of the truth because we need to restart the human foundation in truth And I Love you like Kanye I love Rick Owens\' bed design but the back is...')],
    ['ru-RU',new CardLanguage('Мэри Данст','Веб-дизайнер','Не бойся правды, потому что нам нужно перезапустить человеческую основу в правде. И я люблю тебя, как Канье. Мне нравится дизайн кровати Рика Оуэнса, но спинка...')],
    ['he-IL',new CardLanguage('מרי דסט','מפתח אטרים','אל תפחד מהאמת כי אנחנו צריכים להפעיל מחדש את הבסיס האנושי במציאות ואני אוהב אותך כמו קניה אני אוהב את עיצוב המיטה של ריק אוונס אבל הגב הוא...')]
]);

// This function gets languages from the Languages Map and sets it to inner HTML dropdown list
function getLanguages() {
    const dropdownLangElement = document.getElementById('dropdown-list');

    for (let lang of headerLanguage.keys()) {
        dropdownLangElement.innerHTML += `<li onclick="setLanguage('${lang}')"><a class="dropdown-item" href="#">${lang}</a></li>`;
    }
}

// This function runing than dropdown selected language was pressed
function setLanguage(lang) {
    currentLanguage = lang;

    const headerTranslates = headerLanguage.get(lang);
    const card1Translates = card1Language.get(lang);
    const card2Translates = card2Language.get(lang);
    const card3Translates = card3Language.get(lang);

    // Update language of header elements
    document.getElementById('profile-cards').innerHTML = headerTranslates.profileCards; 
    document.getElementById('language').innerHTML = headerTranslates.language; 

    // Update language of profile card 1 elements
    document.getElementById('person-name-1').innerHTML = card1Translates.personName;
    document.getElementById('job-title-1').innerHTML = card1Translates.jobTitle;
    document.getElementById('description-1').innerHTML = card1Translates.description;

    // Update language of profile card 2 elements
    document.getElementById('person-name-2').innerHTML = card2Translates.personName;
    document.getElementById('job-title-2').innerHTML = card2Translates.jobTitle;
    document.getElementById('description-2').innerHTML = card2Translates.description;

    // Update language of profile card 3 elements
    document.getElementById('person-name-3').innerHTML = card3Translates.personName;
    document.getElementById('job-title-3').innerHTML = card3Translates.jobTitle;
    document.getElementById('description-3').innerHTML = card3Translates.description;

    this.setRTL();
}

function setDefaultLanguage () {
    if (navigator.language && languages.has(navigator.language)) {
    this.setLanguage(navigator.language);
    }    
}

function setRTL() {
    if(['he-IL','ar'].includes(currentLanguage)) {
    // this is an RTL Language
    document.getElementsByTagName("body")[0].setAttribute("dir","rtl");
}
else {
    document.getElementsByTagName("body")[0].removeAttribute("dir");        
    }
}

function load() {
    this.getLanguages();
    this.setDefaultLanguage();
}



