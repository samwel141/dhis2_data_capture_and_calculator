# DHIS2 Project

This project consists of a frontend React application and a backend Express/Node.js server. Below are the instructions for setting up and running both parts of the application locally.

## Project Structure

- `dhis2_data_capture`: React frontend
- `server`: Express/Node.js backend

## Frontend (React)

### Prerequisites

- Node.js (v14 or higher)
- npm (or Yarn)

### Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd dhis2_data_capture
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

   Or if you're using Yarn:

    ```bash
    yarn install
    ```

3. **Create an `.env` file for environment variables (optional):**

   If your React app requires environment variables, create a `.env` file in the `dhis2_data_capture` directory and add the necessary variables.

4. **Start the development server:**

    ```bash
    npm start
    ```

   Or if you're using Yarn:

    ```bash
    yarn start
    ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Backend (Express/Node.js)

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. **Navigate to the backend directory:**

    ```bash
    cd server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create an `.env` file for environment variables (optional):**

   If your Express app requires environment variables, create a `.env` file in the `server` directory and add the necessary variables.

4. **Start the server:**

    ```bash
    npm start
    ```

   The server will be available at [http://localhost:5000](http://localhost:5000).

## Common Tasks

- **To stop the development servers**: Press `Ctrl + C` in the terminal where the servers are running.
- **To update dependencies**: Run `npm update` or `yarn upgrade` in the respective directories.

## Troubleshooting

- **Ensure Node.js and npm are installed and up to date.** Check your versions with `node -v` and `npm -v`.
- **If you encounter issues with missing environment variables**, make sure your `.env` files are correctly set up.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests. For significant changes, please open an issue to discuss the proposed changes before making them.

## Contact

For questions or support, contact [samwelwilson141@gmail.com](mailto:samwelwilson141@gmail.com).
