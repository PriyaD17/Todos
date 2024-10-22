
# React To-Do App

A simple and efficient To-Do list application built with React. This app allows users to add, view, and manage their tasks by marking them as complete or incomplete. The completed tasks are displayed with a strikethrough to visually indicate their completion.

## Features

- Add a new to-do with a title and description.
- Mark tasks as complete/incomplete.
- Display tasks with a strikethrough when completed.
- Responsive and clean design.

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   cd react-todo-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   Start the development server:

   ```bash
   npm start
   ```

   This will open the app in your default browser at `http://localhost:3000`.

## Usage

- Input a task title and description in the input fields.
- Click the **"Add Todo"** button to add the task to your to-do list.
- Your tasks will be displayed below with a "Complete" button.
- Click **"Complete"** to mark the task as complete, which will add a strikethrough to the task. You can click **"Undo"** to mark it as incomplete again.

## Code Overview

### `App.js`

The main component of the app where:
- Users input their tasks and descriptions.
- Tasks are displayed in a list with options to mark them complete or undo completion.

### State Management

- **`useState`** is used to manage:
  - `task` and `desc` – to track input fields.
  - `todo` – to track the list of to-dos, which is an array of objects with `task`, `desc`, and `completed` properties.

### Key Functions

- **`addtodo`**: Adds a new task to the to-do list if both the task and description are provided.
- **`toggleComplete`**: Toggles the `completed` status of a task, updating its display accordingly.

### CSS Styling

Basic styling is applied in `App.css` to provide a clean, modern design, with clear visual indications for task states:
- Completed tasks appear with a strikethrough.
- Input fields and buttons have hover and focus effects for better usability.


## Dependencies

- **React**: Core library for building user interfaces.
- **npm**: For managing project dependencies.

## Future Improvements

- Add task categories or labels.
- Add task deadlines and reminders.
- Add the ability to delete tasks.
- Save tasks to local storage or integrate with a backend for persistent storage.


---
