# Teamleader Test
This repo is for Teamleader test solution - Ordering

# Table of Content

- [Features](#features)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Developed By](#developed-by)

<br>

# Features
- User can see all orders.
- User can view details of order, with it's details
- User can ADD product to order.
- User can REMOVE product from order.
- USer can submit order, the result depends on customer revenue.
- Tested using [Jest](https://github.com/facebook/jest) and [React Testing Library
](https://github.com/testing-library/react-testing-library)


# Folders Structure:
```
teamleader-test/
├───node_modules/
├───public/
│   ├───favicon.ico
│   ├───index.html
│   ├───manifest.json
│   └───robots.txt
├───src/
│   ├───api/
│   │   ├───jsonFiles/
│   │   │   ├───customers.json
│   │   │   ├───orders.json
│   │   │   └───products.json
│   │   ├───customers.ts
│   │   ├───index.ts
│   │   ├───orders.ts
│   │   └───products.ts
│   ├───components/
│   │   ├───HomePage/
│   │   │   ├───__tests__/
│   │   │   └───index.tsx
│   │   ├───Orders/
│   │   │   ├───__tests__/
│   │   │   ├───index.tsx
│   │   │   ├───order.tsx
│   │   │   └───styles.css
│   │   ├───Products/
│   │   │   ├───__tests__/
│   │   │   ├───index.tsx
│   │   │   ├───product.tsx
│   │   │   └───style.css
│   │   └───SingleOrder/
│   │       ├───__tests__/
│   │       ├───index.tsx
│   │       └───style.css
│   ├───redux/
│   │   ├───actionTypes/
│   │   │   ├───orders.ts
│   │   │   └───products.ts
│   │   ├───actions/
│   │   │   ├───__tests__/
│   │   │   ├───ordersAction.ts
│   │   │   └───productsAction.ts
│   │   ├───reducers/
│   │   │   ├───__tests__/
│   │   │   ├───index.ts
│   │   │   ├───ordersReducer.ts
│   │   │   └───productsReducer.ts
│   │   ├───hooks.ts
│   │   └───store.ts
│   ├───types/
│   ├───utils/
│   ├───App.tsx
│   ├───index.css
│   ├───index.tsx
│   ├───setupTests.ts
│   └───testUtils.tsx
├───.eslintrc.json
├───.gitignore
├───README.md
├───craco.config.js
├───package-lock.json
├───package.json
└───tsconfig.json
```

# Technologies Used
- [Typescript](https://github.com/microsoft/TypeScript)
- [React](https://github.com/facebook/react/)
- [Jest](https://github.com/facebook/jest)

# Setup
```
yarn OR npm install
```
# Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the ```development``` mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner.


### `npm run lint`

Launches the eslint.

### `npm run build`

Builds the app for `production` to the `build` folder.
<br>

# Developed By
Developed & Made with ♥️ By [Ibraheem S. Ali](https://github.com/hemasali)
