import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "67195c2d002f264bdb87",
  databaseId: "67195d5a0031ea7f3174",
  userCollectionId: "67195d740021ca9a17ee",
  videoCollectionId: "67195d8a002980522793",
  storageId: "67195e7b00239a12d223",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error("Account creation failed");

    const avatarURL = avatars.getInitials();

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarURL,
      }
    );

    return newUser;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export const signIn = async (email, password) => {
  try {
    // Check if an active session exists
    const existingSession = await account
      .getSession("current")
      .catch(() => null);

    if (existingSession) {
      console.log("User is already signed in.");
      return existingSession; // Return the existing session if it exists
    }

    // No active session, create a new one
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw new Error("No user found");
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw new Error("No user found");

    return currentUser.documents[0];
  } catch (e) {
    throw new Error(e);
  }
};