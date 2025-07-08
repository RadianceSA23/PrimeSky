# 🌤️ PrimeSky - React Native Weather App

## 📱 Overview

**PrimeSky** is a simple yet scalable Weather App built with **React Native**. It allows users to search for weather information by city name, fetching real-time data from the **OpenWeatherMap API**. The app is compatible with both **iOS** and **Android** platforms.

![React Native](https://img.shields.io/badge/Framework-React%20Native-blue?logo=react)
![Redux Toolkit](https://img.shields.io/badge/State-Redux%20Toolkit-red?logo=redux)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-lightgrey?logo=typescript)

---

## 🎯 Features

- 🔍 Search for any city and fetch current weather data.
- 🌡️ Displays temperature, weather condition, and icon.
- ⚠️ Handles errors gracefully (e.g., city not found).
- 🌙 Supports Dark/Light Theme.
- 🔁 Fully supports Redux state management.
- 🧪 Unit tests for core logic and components.
- 📁 Clean architecture with separation of concerns.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn or npm
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)
- OpenWeatherMap API Key (Get one for free at https://openweathermap.org/api)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/RadianceSA23/PrimeSky.git
cd PrimeSky
```

2. **Install Dependencies**

```bash
yarn install
# or
npm install
```

3. **Add API Key**

Create a `.env` file in the root:

```
OPENWEATHER_API_KEY=your_api_key_here
```

4. **Run on iOS**

```bash
npx react-native run-ios
```

5. **Run on Android**

```bash
npx react-native run-android
```

6. **Run Tests**

```bash
yarn test
# or
npm test
```

---

## 🏗️ Architecture & Design Decisions

**PrimeSky** is built with **scalability and maintainability** in mind.

### 📂 Folder Structure

```
src/
├── assets/             # Images and icons
├── components/         # UI components (Stateless)
├── hooks/              # Custom hooks
├── redux/              # Redux setup (actions, reducers, store)
├── screens/            # Screen components
├── services/           # API service calls
├── styles/             # Style definitions (modular)
├── utils/              # Utility functions
├── App.js              # Entry point
```

### 🧠 State Management

- **Redux** is used for global state management.


### 🌐 API Integration

- Weather data is fetched via centralized service layer using **Axios**.
- API key and base URL are managed in a `.env` config.

### 🎨 UI

- UI components are separated from business logic.
- Style definitions use `StyleSheet.create` in dedicated files.
- Optional dark mode managed via context and `useColorScheme`.

### 🧪 Testing

- Core components and services are covered with unit tests using **Jest** and **React Native Testing Library**.

---

## 🌌 Bonus Features

- ✅ Dark Mode Toggle (optional)
- 🧩 Responsive UI for all screen sizes

---

## 📌 Best Practices Followed

- ✅ Clean and modular codebase
- ✅ Centralized API service logic
- ✅ Component reusability and SRP
- ✅ Efficient Redux architecture
- ✅ Environment-specific configuration
- ✅ Custom hooks to encapsulate logic
- ✅ Clear separation between UI and logic

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

[Subburaj] – [subbupost628008@gmail.com]  
GitHub: [RadianceSA23](https://github.com/RadianceSA23)
