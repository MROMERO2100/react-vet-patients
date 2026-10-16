# 🐾 Veterinary Patient Manager

A responsive **veterinary patient management** web application built with **React 18, Vite, and Tailwind CSS**. Register pets, record their owners and symptoms, and manage patient information in a simple interface.

This is a client-side project: records are stored in your browser using **localStorage**. It does not require a backend or database.

## ✨ Features

- **Register patients** with pet name, owner's name and email, date, and symptoms.
- **View patient records** in a dedicated list with an empty-state message.
- **Edit records** by loading an existing patient's details into the form.
- **Delete records** with a browser confirmation prompt.
- **Keep data across page reloads** using localStorage.
- **Responsive layout** built with Tailwind CSS.
- **Form feedback** for missing fields (see *Known limitations*).

## 🛠 Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | User interface and component state |
| JavaScript (ES modules / JSX) | Application logic |
| Vite 4 | Development server and production builds |
| Tailwind CSS 3 | Styling and responsive layout |
| Browser localStorage | Client-side persistence |

React hooks used: `useState` and `useEffect`.

## 🚀 Getting Started

**Prerequisites:** Node.js and npm.

1. Clone the repository:

   ```bash
   git clone https://github.com/MROMERO2100/react-vet-patients.git
   cd react-vet-patients
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite in your terminal.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run the Vite development server |
| `npm run build` | Generate a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## 📂 Project Structure

```text
src/
├── components/
│   ├── Error.jsx             # Form feedback
│   ├── Formulario.jsx        # Create/edit form
│   ├── Header.jsx            # Application title
│   ├── ListadoPacientes.jsx  # Patient list and empty state
│   └── Pacientes.jsx         # Patient details and actions
├── App.jsx                   # Application state and persistence
├── index.css                 # Tailwind directives
└── main.jsx                  # React entry point
```

## 🧩 How It Works

`App.jsx` holds the patient array and selected patient in React state. It loads saved records from `localStorage` on initialization and writes changes back through `useEffect`.

`Formulario.jsx` handles patient entry and editing. `ListadoPacientes.jsx` maps records to `Pacientes.jsx` cards, where the user can edit or delete a record.

Each record contains the pet's name, the owner's name and email, a date, symptoms, and a generated ID.

## ⚠️ Known Limitations

- **Form validation needs a fix:** an empty-field warning is displayed, but submission is not currently stopped. Required-field checks should return early before saving.
- **Browser-only storage:** data is tied to the current browser/storage context and can be lost if site data is cleared. There is no account sync, server, or shared database.
- **No automated tests** are configured in the current project.

This is a learning/portfolio project, not a production veterinary medical records system.

## 🔮 Potential Improvements

- Fix required-field validation and improve email/date validation.
- Add patient search, filtering, and sorting.
- Add automated tests.
- Integrate a backend API and database for shared, durable records.
- Add authentication and role-based access for veterinary teams.

## 🎯 Project Purpose

Built to practice React fundamentals—reusable components, props, controlled forms, state updates, conditional rendering, CRUD operations, and browser persistence—while developing a responsive UI with Tailwind CSS.

## 👨‍💻 Author

**Moises Romero** — Software Developer

GitHub: [@MROMERO2100](https://github.com/MROMERO2100)
