# Portfolio-Web — Олег Чеклу

Сайт-портфолио ведущего мероприятий, мастера церемоний и креативного продюссера.

## Сайт
- **URL:** https://olegcheklu.eu
- **Хостинг:** GitHub Pages (репозиторий: https://github.com/ocheklu/olegcheklu.eu)
- **Ветка деплоя:** main
- **Деплой:** автоматический при пуше в main

## Структура проекта
```
Portfolio-Web/
├── index.html          # Единственная страница (one-page сайт)
├── sitemap.xml         # Sitemap для поисковиков
├── robots.txt          # Директивы для роботов
├── site.webmanifest    # PWA манифест
├── favicon.ico
├── favicon.svg
├── favicon-96x96.png
├── apple-touch-icon.png
├── web-app-manifest-192x192.png
├── web-app-manifest-512x512.png
└── img/
    ├── host.webp           # Портрет Олега Чеклу
    ├── og-image.jpg        # Open Graph обложка (1200×630px)
    ├── ceremony-1..5.webp  # Свадебные церемонии
    ├── bridges-1..4.webp   # Знакомство гостей (свадьба в Италии)
    ├── mafia-1,2,3,5.webp  # Игра Мафия
    ├── multimedia-1..2.webp
    └── online-1..2.webp    # Мафия онлайн / Comic Con 2026
```

## Технологии
- Чистый HTML/CSS/JS — без фреймворков и зависимостей
- Google Fonts: Cormorant Garamond + Jost
- YouTube iframe embed для всех видео

## Секции сайта
1. **Hero** — имя, кикер, портрет, статистика (17/15/11 лет)
2. **Церемония** (#ceremony) — видео + карусель фото
3. **Знакомство гостей** (#bridges) — сетка 2×2
4. **Игра Мафия** (#mafia) — видео + карусель + Short + описание
5. **Викторины** (#multimedia) — карусель фото
6. **Мафия онлайн** (#online) — Short видео + карусель фото
7. **Wellness** (#wellness) — 3 Shorts + описание
8. **Уникальные услуги** (#extra) — сетка 2×2
9. **Footer** — контакты, кнопка "Больше проектов" → модалка

## Адаптивность
- Десктоп: >960px
- Планшет: 600–960px
- Мобильный: <600px (бургер-меню, центрированный Hero, скрытые стрелки каруселей)

## SEO
- Meta description, og:*, twitter:card
- Schema.org: Person + 8 Services (makesOffer) + 7 VideoObject
- Sitemap: sitemap.xml
- Google Analytics 4: G-ZYCPV4B359
- Google Search Console: подтверждён через DNS TXT

## Контакты (в коде)
- Email: olegcheklu@gmail.com
- Телефон: +370 671 68072
- Telegram: @ocheklu

## Важные детали
- Все видео — YouTube embed (не self-hosted)
- Шрифты загружаются с Google Fonts (требует интернет)
- Бургер-меню использует `overflow:hidden` на body при открытии
- `.mob-br` — класс для переноса строки только на мобильном
