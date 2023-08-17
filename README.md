# **Getting Started**

**In order to run locally:**


- **Node.js** needs to be installed on your OS
- Clone the **jup-ui** [repo](https://github.com/Tidelaw/jup-ui.git)
- Start the project
    1. Run `npm install` to install all our project dependencies
    2. Run `npm run dev` to run our application


`npm install` downloads the packages found in **package.json**

`npm run dev` runs the website. The website can now be accessed from `localhost:3000` or `0.0.0.0`

In order for the app to function, a **Helius RPC** is recommended - in order to obtain one, visit 

`https://www.helius.xyz `

Now, create a file called `.env.local` on the outermost directory of the cloned repo, adding the following text into the file.

```
HELIUS_KEY = <your Helius API key>
```
The app is now fully functional on your local machine.

<br>

## For any inquiries, visit the [Helius Discord](https://discord.gg/helius) or message Tidelaw on Discord, t1d3law on X.
