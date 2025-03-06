# Twitter API v2 Image Upload Example

This project demonstrates how to upload images and post a tweet with those images using the Twitter API v2 and the `twitter-api-v2` library.

## Prerequisites

* Node.js (latest LTS recommended)
* npm or yarn
* A Twitter Developer account with API keys and tokens.

## Setup

1.  **Clone the repository (or create a new project):**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install twitter-api-v2 dotenv
    ```

    or

    ```bash
    yarn add twitter-api-v2 dotenv
    ```

3.  **Create a `.env` file in the root of your project:**

    ```
    X_API_KEY=<your_api_key>
    X_API_KEY_SECRET=<your_api_key_secret>
    X_ACCESS_TOKEN=<your_access_token>
    X_ACCESS_TOKEN_SECRET=<your_access_token_secret>
    BEARER_TOKEN=<your_bearer_token>
    ```

    Replace the placeholders with your actual Twitter API credentials.

4.  **Place the image you want to upload in the project directory.** In the example code, the image is named `abc.jpeg`. Ensure the file path in the code matches the location of your image.

## Usage

1.  **Run the script:**

    ```bash
    node <your_script_name>.js
    ```

    (Replace `<your_script_name>.js` with the actual name of your JavaScript file.)

## Code Explanation

The script performs the following actions:

1.  **Loads environment variables:**
    * Uses `dotenv` to load API keys and tokens from the `.env` file.

2.  **Initializes Twitter API clients:**
    * Creates a `userClient` instance using your API keys and access tokens.
    * Creates a `appOnlyClient` instance using your bearer token.
    * Creates a `appOnlyClientFromConsumer` instance using userClient appLogin.
    * Creates v1 and v2 clients from the userClient.

3.  **Uploads media:**
    * Uses `v1Client.uploadMedia()` to upload the image file (`abc.jpeg`).
    * The returned `mediaIds` are stored in an array.
    * `Promise.all` is used to allow for multiple image uploads.

4.  **Posts a tweet:**
    * Uses `v2Client.tweet()` to post a tweet with the uploaded images.
    * The `media_ids` from the uploaded images are included in the tweet's `media` object.

## Important Notes

* **Security:** Never commit your `.env` file or API keys to version control.
* **File Path:** Ensure that the file path to your image in the `v1Client.uploadMedia()` function is correct.
* **Error Handling:** For production use, add proper error handling to the `async main()` function.
* **API Limits:** Be aware of Twitter API rate limits.

## Dependencies

* `twitter-api-v2`: For interacting with the Twitter API.
* `dotenv`: For loading environment variables from a `.env` file.
