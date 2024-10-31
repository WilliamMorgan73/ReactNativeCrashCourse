# Aora - AI-Powered Video Sharing App

Aora is a social media platform focused on AI-generated video content, allowing users to create and share AI-made videos along with prompts and titles. Inspired by platforms like Instagram but centered exclusively around AI-generated content, Aora provides an engaging space for users to explore and share creative AI-made videos. This app was created by following a tutorial by [Adrian Hajdin](https://github.com/adrianhajdin) and includes customizations and extensions.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Tutorial Reference](#tutorial-reference)

## Features
- **Share AI-Generated Videos:** Upload AI-created videos along with a title and the prompt used for generation.
- **Explore Content:** Discover AI-generated videos shared by other users.
- **User Authentication:** Sign up and log in to manage personal video collections.

### Future Features
- **User Profiles:** Create and customize user profiles with profile pictures and bios.
- **Interactions:** Like, comment, and bookmark videos to interact with other users’ content.


## Screenshots



## Installation
Clone the repository:
```bash
git clone https://github.com/WilliamMorgan73/ReactNativeCrashCourse
cd aora-app
```

Install dependencies:
```bash
npm install
```

Configure Appwrite:
1. Set up an Appwrite server or create an account at [appwrite.io](https://appwrite.io).
2. Create a new project and configure the necessary databases and authentication settings.
3. Update the Appwrite configuration in the code with your project’s `databaseId`, `collectionId`, and endpoint details.

Run the app:
```bash
npx expo start
```

## Usage
1. Launch the app on a simulator or connected device.
2. Sign in or create an account to start sharing and exploring content.
3. Use the upload option to create a new post by sharing your AI-generated video, title, and prompt.
4. Explore the feed, interact with other users’ content by liking and bookmarking.

## Technologies Used
- **React Native:** Frontend framework for building the mobile app.
- **Expo:** Toolchain for developing, building, and deploying React Native applications.
- **Appwrite:** Backend server for managing user authentication and database.

## Tutorial Reference
This project was created by following an online tutorial. For more details, refer to the tutorial repository and video:
- **Tutorial Repository:** [Aora Tutorial Repo by Adrian Hajdin](https://github.com/adrianhajdin/aora)
- **Tutorial Video:** [AI-Powered Video Sharing App Tutorial on YouTube](https://www.youtube.com/watch?v=ZBCUegTZF7M&t=1017s)
