# Angular Starship Management System
## Overview:
You can check this [project](https://starwar2-nxcgqyorha-oa.a.run.app/) here. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.
The Angular Starship Management System is a web application developed using Angular that allows users to manage and view starships from the Star Wars universe. It provides features such as browsing a list of starships, viewing detailed information about each starship, adding starships to a personal list, and authenticating users for personalized experiences.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features:
Browse Starships: Users can browse a list of starships fetched from the Star Wars API (SWAPI) and view basic information about each starship.

View Starship Details: Detailed information about each starship, including model, manufacturer, crew size, and more, can be viewed on a dedicated page.

Add to Personal List: Users can add starships to their personal list, which is stored locally on their device for quick access.

User Authentication: The application supports user authentication for personalized experiences. Users can register, login, and logout to manage their personal list.

Search and Sort: Starships can be searched by name and sorted based on various attributes such as crew size, length, and cargo capacity.

Spinner for Loading: A spinner is displayed while starship data is being fetched, providing visual feedback to the user.
## Components:

Starships Component: Displays a list of starships and provides options for searching, sorting, and adding starships to the personal list.

Starship Component: Displays detailed information about a specific starship, including attributes like model, manufacturer, and crew size.

Starship Upsert Component: Allows users to add or update starship information in the personal list.

User Authentication Component: Provides user authentication functionalities such as registration, login, and logout.

## Services
Starwar Service: Handles fetching starship data from the SWAPI, managing starships in the personal list, and providing methods for adding and removing starships.

Logger Service: Logs information for debugging purposes and provides custom logging functionalities.

Auth Service: Handles user authentication functionalities such as registration, login, logout, and automatic login using Firebase Authentication.

## Interceptors
Error Interceptor: Intercepts HTTP errors and provides error handling functionalities such as displaying error messages to the user and redirecting to error pages.
Routing
The application uses Angular Router for navigation and includes routes for browsing starships, viewing starship details, managing personal lists, user authentication, and error handling.

## Dependencies
Angular: Used as the frontend framework for building the application.
Angular HttpClient: Used for making HTTP requests to fetch starship data from the SWAPI.
RxJS: Used for reactive programming and handling asynchronous operations.
ngx-toastr: Used for displaying toast notifications to the user.
Firebase Authentication: Used for user authentication functionalities such as registration, login, and logout.
Getting Started
Clone the repository to your local machine.
Install dependencies using npm install.
Run the application using ng serve.
Access the application in your web browser at http://localhost:4200.

## Contributing
Contributions are welcome! If you would like to contribute to the project, feel free to submit a pull request or open an issue with any suggestions or improvements.
## Extra work
 I have also done a project with the concept of Image upload in an enhanced version of the original application,offering additional features such as Image upload functionality,card-based display of the starships and Firebase integration for storing images.It provides a comprehensive solution for managing and viewing starships from the Starwars universe, along with user authentication for personalized experiences.You can check the [project]( https://starwars1-nxcgqyorha-oa.a.run.app/) here and here is the [Github](https://github.com/Kamali2305/Starwars1.git)for that program

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
