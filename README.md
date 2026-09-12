# 🐾 Virtual Pet - Bruno

A simple interactive virtual pet game built with **React** and **Redux Toolkit**. Take care of your pet by feeding, playing, sleeping, and healing it while keeping its health, hunger, energy, and coins under control.

## 🎮 Features

* 🍖 Feed your pet to restore hunger
* 🎾 Play with your pet
* 😴 Let your pet sleep and recover energy
* ❤️ Heal your pet using coins
* ⚠️ Multiple pet statuses such as Hungry, Tired, and Sick
* 🥀 Game-over state when the pet's health reaches 0

## 🛠️ Technologies Used

* React + Vite
* Redux Toolkit
* React-Redux
* JavaScript

## 📚 What I Learned

This project was created to practice **Redux Toolkit with React** and understand how global state management works.

Through this project, I practiced:

* Creating a Redux store
* Creating slices with `createSlice()`
* Managing state with reducers
* Reading Redux state using `useSelector()`
* Updating Redux state using `useDispatch()`
* Rendering dynamic data in React

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sahil-sheikh01/virtual-pet.git
```

### 2. Navigate to the project

```bash
cd virtual-pet
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🐾 How to Play

Keep your pet's stats healthy:

* **Feed** → restores hunger and slightly improves health
* **Play** → increases health while consuming hunger and energy
* **Sleep** → restores energy while increasing hunger
* **Heal** → restores health at the cost of coins

If hunger or energy reaches `0`, your pet's health can decrease while playing.

If health reaches `0`, the pet reaches the **"Rest in Peace 🥀"** state.
