## Context
**Browser Bot** is an innovative project to build an intelligent agent capable of navigating the web autonomously. Built on **LangChain** and using **GPT-4**, the agent can perform complex browsing and information extraction tasks while being observable in real time through a web interface.

## Objectives
- Create an intelligent agent able to browse the web on its own
- Enable real-time observation and control of the agent's actions
- Automate extraction and storage of web data
- Provide a RESTful API for control and data retrieval
- Ensure reliable execution in a containerized environment

## My Contribution

### Architecture and Infrastructure
- Developed a containerized architecture with **Docker**
- Set up a virtual graphical environment with **Xvfb** and **noVNC**
- Implemented a **FastAPI** API for agent control
- Managed data with **SQLite** and the file system
- Fully configured the Chrome headless environment

![Architecture](/projects/browser-schem.png)
