#  Kanban Board Assignment

# Next.js, Tailwindcss, Zustand, react-beautiful-dnd

**Host Link:** https://your-kanban-board-53zssmkcx-patrux08.vercel.app/



## Kanban Board Interview Assignment

Assignment Submission Options
Deadline - 2 days (Frontend Only)
Introduction
In this assignment, you will be creating a Kanban board application using the specified technologies. The goal is to implement a feature-rich Kanban board that allows users to manage tasks efficiently. You will have the option to add additional features and use certain technologies to enhance the application.
Technologies
You are required to use the following technologies:
TypeScript
Next.js
Node.js
Express.js
MongoDB
Tailwind CSS
Optional technologies that can be used:
Shadcn UI
WebSocket framework (e.g., Socket.IO)
Functionalities
Your Kanban board application should have the following functionalities:
Home Page: Display a list of Kanban boards on the home page.
Kanban Board CRUD: Implement Create, Read, Update, and Delete operations for Kanban boards.
Kanban Board Properties: Each Kanban board should have a name and description.
Kanban Columns: Each Kanban board should have a minimum of 3 columns: "To Do," "In Progress," and "Completed."
Kanban Item Properties: Each item within the board should have a name, description, and an optional due date.
Column CRUD: Implement Create, Read, Update, and Delete operations for Kanban board columns.
Item CRUD: Implement Create, Read, Update, and Delete operations for Kanban board items.
Drag and Drop: Make Kanban board items draggable and droppable within columns.
Database Integration: Save the Kanban board and its data in a MongoDB database.
Good to Have
While the above functionalities are the minimum requirements, you are encouraged to include the following features:
Auto Save: Implement auto-saving of Kanban boards to the database.
Real-time Updates: Use WebSocket or a similar framework for real-time updates in the application.
Search Bar: Include a search bar that allows users to search for specific Kanban board items.
Additional Features: You are free to add any other features that you believe would enhance the Kanban board.
Bonus Items
For bonus points, you can include the following:
Unit Tests: Provide unit tests for each component in the application.
Deployment: Deploy the application to a hosting service (Vercel, AWS preferred) and provide instructions for accessing the live application.
Submission Guidelines
Create a GitHub repository for your project.
Implement the Kanban board application with the specified functionalities.
Submit the GitHub repository URL along with any additional documentation you think is necessary.
Evaluation Criteria
Your assignment will be evaluated based on the following criteria:
Functionality: Does the application meet the specified requirements and any additional features you've added?
Code Quality: Is the code well-structured, clean, and maintainable?
Use of Technologies: Have you effectively used the required technologies and optional technologies where applicable?
User Interface: Is the user interface intuitive and user-friendly?
Database Integration: Is the database integration working correctly?
Real-time Updates: If you choose to implement real-time updates, do they work as expected?
Bonus Items: If you include any bonus items, are they thorough and well-documented?
Please note that this assignment is designed to assess your skills in web development and the specified technologies. Good luck with your assignment, and we look forward to seeing your Kanban board application!

## The challenge

```
- Create a responsive page containing a board that handles multiple
cards and multiple statuses.
- We should be able to:
- Drag&drop the cards between the statuses.
- Filter the cards.
- Search the cards.
- Inline card edition.
- Add new cards.
```

## The approach

The code simulates (fetchMockData.js) a DB that holds all kanban cards.
It's assumed that the "DB" have only one table, in which the status of the task (doing, done, backlog...) is defined by a field **"stats"**.
I also assumed that no card should be truly deleted. Deleted cards are marked as "_delete_" and are not fetched by the app.
Other fields include: Id, content and priority.

The whole app is a single page application that fetches the data, display the cards and allows you to drag, create, edit and delete cards.
You can move cards around by dragging them, or use the edit menu to change its status, content or priority.
The deletion is also made via edit menu.

## Filters

**Search bar** dynamically show cards that contain the inputted text.
The **switches** allows to set which priority flags are displayed. The colors match with the priority tags colors.

## Oopsies

This is my first time using a Drag & Drop React lib. What made it even harder was finding out they are not optimized to work with Next.js.
A warning will always be displayed on the console, I tried many approaches to fix it, but the non-optimization was hard to beat and was taking too much of my time.
Trying to move cards while filtering may cause some bugs in the react-beautiful-dnd functions. The data is not affected, as it can still be edited via edit panel.

