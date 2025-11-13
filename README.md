## 🛍️ React E-Commerce App
Це навчальний e-commerce застосунок на React з підтримкою кошика, маршрутизації, Redux Toolkit та сповіщень через React Toastify.

## 🚀 Функціонал
- 📦 Перегляд списку товарів
- ➕ Додавання товарів у кошик
- 🔢 Відображення кількості кожного товару
- ➕/➖ Зміна кількості товару
- 🗑️ Видалення товару з кошика
- 💰 Підрахунок загальної суми
- 🔔 Сповіщення через React Toastify
- 🌐 Маршрутизація: /, /products/:id, /cart, /profile

## 🧱 Технології
- React + JSX
- Redux Toolkit для глобального стану
- React Router DOM для маршрутизації
- React Toastify для сповіщень
- Custom CSS-in-JS стилі
- Компонентний підхід: ProductList, CartPage, Header, Footer, Button

## 📁 Структура
src/
│   App.jsx
│   index.css
│   main.jsx
│
├───app
│       hooks.js
│       store.js
│
├───components
│       Button.jsx
│       Footer.jsx
│       Header.jsx
│
├───features
│   ├───auth
│   │   │   index.js
│   │   │
│   │   ├───api
│   │   │       authApi.js
│   │   │
│   │   ├───components
│   │   │       AuthForm.jsx
│   │   │
│   │   ├───lib
│   │   │       helpers.js
│   │   │
│   │   └───model
│   │           authSlice.js
│   │
│   ├───cart
│   │   │   index.js
│   │   │
│   │   ├───api
│   │   │       cartApi.js
│   │   │
│   │   ├───components
│   │   │       CartItem.jsx
│   │   │
│   │   ├───lib
│   │   │       helpers.js
│   │   │
│   │   ├───model
│   │   │       cartSlice.js
│   │   │
│   │   └───styles
│   │           cartPageStyles.js
│   │
│   ├───model
│   ├───products
│   │   │   index.js
│   │   │
│   │   ├───api
│   │   │       mockProducts.js
│   │   │       productsApi.js
│   │   │
│   │   ├───components
│   │   │       ProductList.jsx
│   │   │
│   │   ├───lib
│   │   │       helpers.js
│   │   │
│   │   ├───model
│   │   │       productsSlice.js
│   │   │
│   │   └───styles
│   │           productListStyles.js
│   │
│   └───profile
│       ├───components
│       │       ProfileForm.jsx
│       │
│       ├───lib
│       │       validateProfile.js
│       │
│       ├───model
│       │       profileSlice.js
│       │
│       └───styles
│               profileFormStyles.js
│
├───layouts
│       MainLayout.jsx
│
├───pages
│       CartPage.jsx
│       HomePage.jsx
│       ProductPage.jsx
│       ProfilePage.jsx
│
├───routes
│       router.jsx
│
├───services
│   └───api
│       │   baseApi.js
│       │
│       └───endpoints
│               cart.js
│               products.js
│
├───shared
│   ├───assets
│   ├───config
│   └───styles
└───utils
        constants.js
        helpers.js



## 📦 Встановлення та запуск
1. 🔧 Клонування репозиторію
git clone https://github.com/OleksandrGulak/52.git
cd my-react-app


2. 📥 Встановлення залежностей
npm install


3. 📚 Основні бібліотеки
|  |  | 
| react-router-dom |  | 
| @reduxjs/toolkit |  | 
| react-redux |  | 
| react-toastify |  | 


Якщо якісь бібліотеки не встановились автоматично, додай вручну:

npm install react-router-dom @reduxjs/toolkit react-redux react-toastify