# Movies explorer
Сайт для поиска интересных фильмов. Чтобы не потерять понравившийся фильм приложение позволяет добавлять фильмы в избранное, а также сохраняет последние запросы.

![Иллюстрация к проекту](./src/assets/images/project.png)

## Технологии
![Технологии](https://skillicons.dev/icons?i=html,css,js,react,figma)

## Особенности разработки
- **Grid** для резиновой верстки
- **Медиазапросы** для адаптивной верстки
- **Методология БЭМ** для грамотной разработки интерфейса
- **Хуки** для соответствия современным тенденциям React

## Структура проекта
Структура приложения Movie explorer составлена согласно общепринятым практикам разработки на React. Проект включает в себя следующие директории:
- `assets` - файлы, не связанные с кодом: изображения, шрифты и общие стили.
- `components` - переиспользуемые элементы интерфейса: кнопки, формы, поля для ввода текста и прочее.
- `context` - код для хранения глобальных данных приложения.
- `hooks` - кастомные хуки.
- `pages` - компоненты, представляющие собой страницы сайта.
- `routes` - компоненты для работы с react-router-dom и отрисовки страниц.
- `utils` - вспомогательные утилиты для упрощения процесса разработки и улучшения качества кода.

## Начало работы
### Требования
Для работы приложения необходимо установить:
* [Node.js](https://nodejs.org/ru/blog/release/v18.12.0) 18.12+
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (обычно идет с Node.js)
### Установка
1. Клонируйте репозиторий
   ```
   git clone https://github.com/PeachMood/movies-explorer-frontend.git
   ```
2. Установите недостающие зависимости
   ```
   npm install
   ```
### Запуск
После установки зависимостей приложение можно запустить в нескольких режимах:
1. `npm run start` - разработка
2. `npm run build` - сборка
