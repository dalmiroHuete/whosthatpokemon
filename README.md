# 🎮 Who's That Pokémon?

A simple **Pokémon name-reveal game** built with **Next.js (App Router)**, **React Query**, and **Chakra UI**.  
Users can **guess the Pokémon** by its **silhouette** and click the **"Reveal POKEMON"** button to see its name.

## 🚀 Features
✅ Fetches Pokémon data from [PokéAPI](https://pokeapi.co/)  
✅ Pokémon images are **blacked out** until revealed  
✅ **Responsive UI** with Chakra UI  
✅ **Optimized API calls** using React Query  
✅ **Error & Loading States** handled gracefully

---

## 📦 **Project Structure**
```
src/
│── app/
│   ├── pokemon/                    # Pokémon Page
│   │   ├── page.tsx
│── api-hooks/
│   ├── queries/
│   │   ├── use-pokemon-query.ts
│── components/
│   ├── pokemon-card/
│   │   ├── pokemon-card.tsx
│── services/
│   ├── pokemon-service.ts
│── utils/
│   ├── constants/
│   │   ├── constants.ts
│   ├── types/
│   │   ├── Pokemon.ts
│── providers/
│   ├── ChakraProvider.tsx
│   ├── QueryProvider.tsx
│── public/
│── README.md
│── next.config.mjs
│── package.json
│── tsconfig.json
```

---

## 🛠 **Installation & Setup**
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/whos-that-pokemon.git
cd whos-that-pokemon
```

### 2️⃣ Install Dependencies
```sh
yarn
```

### 3️⃣ Run the Development Server
```sh
yarn dev
```
Now open **[http://localhost:3000/pokemon](http://localhost:3000/pokemon)** in your browser.

---

## 🗁 **How It Works**
- Each Pokémon **starts blacked out**.
- Clicking `"Reveal POKEMON"` **removes the black filter** and shows the Pokémon's name.
- The game is styled with **Chakra UI**.

---

## 🔗 **API Reference**
This project fetches data from the **PokéAPI**:
- Pokémon List: `https://pokeapi.co/api/v2/pokemon?limit=21`
- Pokémon Images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`

---

## 🛠 **Built With**
- **Next.js (App Router)** – Framework for React apps.
- **React Query** – Optimized API fetching & caching.
- **Chakra UI** – For UI components and styling.
- **PokéAPI** – Public API for Pokémon data.

---

## 🚀 **Future Enhancements**
🔹 Add a **score system** for correct guesses  
🔹 Implement **hints** for difficult Pokémon  
🔹 Create a **multiplayer mode**

---

## 🤝 **Contributing**
1. Fork the repository
2. Create a new branch (`git checkout -b feature-new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature-new-feature`)
5. Open a Pull Request 🚀

---

## 📝 **License**
This project is open-source under the **MIT License**.

---

## 🎉 **Enjoy Playing Who's That Pokémon!** 🎮🔥
Let me know if you need further modifications! 😊🚀

