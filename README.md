# Eye Reporter – Frontend (React)

## 1. Project Overview

The **Eye Reporter Frontend** is a web application that allows users to:

- Submit reports about issues in their locality
- View all previously submitted reports

This frontend communicates with the backend through HTTP requests.

---

## 2. Frontend Responsibilities

The frontend is responsible for:

- Displaying the user interface
- Collecting user input
- Sending data to the backend API
- Displaying data received from the backend

---

## 3. Technology Stack

- **React** – UI library  
- **JavaScript**  
- **Axios or Fetch API** – HTTP communication  
- **HTML & CSS**

---


---

## 5. Core Components Description

### Report Form
- Collects report information from the user
- Sends data to the backend

### Report List
- Fetches reports from the backend
- Displays reports in a readable format

### API Service
- Handles all backend communication
- Keeps API logic separate from UI logic

---

## 6. Application Flow

1. User opens the application  
2. User fills in the report form  
3. Frontend sends data to backend API  
4. Backend confirms successful submission  
5. Frontend fetches updated reports  
6. Reports are displayed on the screen  

---

## 7. User Interface Expectations

The UI should:

- Be simple and clear
- Have labeled input fields
- Show feedback after submission
- Display reports in a list or cards

---

## 8. Error Handling

The frontend should:

- Prevent empty submissions
- Display error messages when submission fails
- Handle backend unavailability gracefully

---

## 9. Learning Outcomes

Students should understand:

- Component-based architecture
- State management basics
- Handling forms in React
- Communicating with APIs
- Separation of UI and logic
