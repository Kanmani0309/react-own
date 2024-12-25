# README: React Responsive Admin Dashboard

## Overview

This is a **Responsive Admin Dashboard** built with **React JS** as a practice project to enhance my frontend development skills. The project includes reusable components like a `Header`, `Navbar` (replacing the previous `Sidebar`), and a `Home` section that features interactive cards and charts. The dashboard is fully responsive, adapting seamlessly to various screen sizes.

---

## Features

- **Dynamic Navbar:**  
  A responsive Navbar for easy navigation with menu toggling on smaller screens.

- **Interactive Cards:**  
  Summary cards display key statistics such as products, categories, customers, and alerts.

- **Charts Integration:**  
  Includes a Bar Chart and a Line Chart for data visualization, powered by the `recharts` library.

- **Responsive Design:**  
  Adjusts layout and components to fit screens of all sizes (mobile, tablet, desktop).

- **Reusable Components:**  
  Modular design with components like `Header`, `Navbar`, and `Home`.

---

## Tech Stack

- **React JS**: Frontend framework for building interactive UI.
- **Recharts**: Library for rendering charts.
- **React Icons**: For integrating sleek and consistent icons.
- **CSS**: Custom styles for the dashboard layout and responsiveness.

---

## Components

### 1. **App.jsx**
- The root component managing state for the Navbar toggle.

### 2. **Header.jsx**
- Displays the menu icon, search bar, and user notification icons.

### 3. **Navbar.jsx**
- Contains navigation links for Dashboard, Products, Categories, Customers, Inventory, Reports, and Settings.
- Dynamically toggles visibility based on screen size.

### 4. **Home.jsx**
- Main content section with:
  - **Cards**: Displaying data metrics.
  - **Charts**: Visualizing data trends using Bar and Line charts.

### 5. **CSS Styles**
- Ensures consistent theming and responsive design with media queries.

---

## How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/responsive-admin-dashboard.git
   cd responsive-admin-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. **Open in Browser**:  
   Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

## File Structure

```
responsive-admin-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   ├── App.css
│   ├── index.js
├── README.md
└── package.json
```

---

## Future Enhancements

- Integrate a backend for dynamic data fetching and user authentication.
- Add additional pages for Reports, Settings, and Inventory Management.
- Enhance charts with more data and interactivity.

---

## References

This project was inspired by various online tutorials and documentation, including:
- [React Official Documentation](https://reactjs.org/)
- [Recharts Library](https://recharts.org/en-US/)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)

Feel free to fork this repository and make your own enhancements! 😊
