# Shrushti Todo List

## Project Description

This is a Full Stack Todo List Application developed using React, Django, and MySQL.

The application allows users to add, view, update, and delete todo tasks.

## Technologies Used

- React.js
- Django
- Django REST Framework
- MySQL
- Axios
- HTML
- CSS
- JavaScript

## Features

- Add new todo tasks
- View all todo tasks
- Update todo tasks
- Delete todo tasks
- Store todo data in MySQL database
- React frontend connected with Django REST API

## Project Structure

todolist/
├── backend/
├── frontend/
├── .gitignore
└── README.md

## Backend Setup

1. Open the backend folder.
2. Install the required Python packages.
3. Configure the MySQL database in Django settings.
4. Run migrations.
5. Start the Django server.

python manage.py migrate
python manage.py runserver

## Frontend Setup

Open the frontend project folder and run:

npm install
npm run dev

## Database

The application uses MySQL for storing todo tasks.

Database name:

todolist_db

## API Endpoints

- GET /api/todos/ - View todos
- POST /api/todos/add/ - Add a todo
- PUT /api/todos/<id>/update/ - Update a todo
- DELETE /api/todos/<id>/delete/ - Delete a todo

## Developer

Shrushti Shyamsundar Murge