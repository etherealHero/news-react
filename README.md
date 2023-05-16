# SPA React JS | News app

## stack

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" height="40" width="52" alt="materialui logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" width="52" alt="redux logo"  />
</div>

- React + Typescipt
- React-router-dom
- Redux toolkit
- MaterialUI
- newsAPI.org

## features

- change application font-size
- change page-size + infinity scrolling
- date filter
- pagination
- toggle theme-mode (dark | light)

## installation

```
git clone https://github.com/etherealHero/news-react
cd news-react/
npm i

npm run dev
```

## todo

- Загрузочный экран / preloader, пока загружаются новости.
- Главная страница со списком новостей. В списке новости должны содержать:
  - заголовок, текст превью, фото превью, дата,
  - возможность применить фильтр по дате, пагинации.
- Детальная страница просмотра новостей:
  - несколько фотографий новости,
  - миниатюра и открывать фото в полном формате при клике.
- Боковое меню, в мобильной скрыто и в шапке “бургер”
  - Главная
  - настройки
  - помощь
  - о нас
- Подключить в раздел о нас карту и поставить маркер.
- Раздел помощь: текстовая информация.
- Настройки - изменение количества новостей на странице, изменение размера шрифта, изменение стиля приложения, черный, белый.
- Дополнительно:
  - Вместо пагинации реализовать бесконечную подгрузку.
