# Contribution Guideline

Contributions to this repository are always welcome! If you have logos of additional competitive programming websites or higher quality versions of existing logos, please consider contributing. 

### Make sure to follow the instruction below:

- **Star the repository (`mandatory`),**
- **Fork this repository.**
    -  Click on the fork button on the repository
- **Clone the repostory:**

    Go to your forked repositry, Click on the code button and copy your repositroy's `(.git)` link.

    clone the repository like this.
    ```
    git clone https://github.com/<Your-user-name>/ProGos.git
    ```
- **Switch to developer branch**
    ```
    git checkout -b developer
    ```
- **Add your changes:**

    Add a logo / for website : fix bug/ add new feature. You can see [here](#what-can-you-do) to get acknoledged about what can you do.

    Make sure the logo files are appropriately named and follow any naming conventions used in this repository..
- **Check the changed files**

   ```sh
   git status
   ```

- **Commit Your Changes**

   ```sh
   git add .
   git commit -m "<EXPLAIN-YOUR_CHANGES>"
   ```

- **Push to Your Forked Repository**

   ```sh
   git push origin developer
   ```

- **Create a Pull Request**

   Go to your forked repository on GitHub, and you should see a "Compare & pull request" button. Click on it to create a pull request (PR) from `developer branch` to the `developer branch` of the original repository.
   
   Create a pull request to the 🔴`developer branch`🔴 with a clear description of your changes.
   
   For pull request add `feat:` in prefix of  your PR title for adding features or adding logo and add `fix:` in prefix of  your PR title for fixing any bugs. for example:
    ```
    fix: <your-bug-fixing-title>
    ``` 
    Your contribution will be reviewed, and upon approval, it will be merged into the main repository.
    
    Wait for the maintainer to review your PR.

## What can you do
There can be many things you can do.

- You can add new logos. for this, you have to maintain [Folder Stucture](#rules-for-adding-logos) and follow the criteria

- You can add any feature in this project. [follow this to know](#rules-for-adding-features).

- You can fix bug in this project. [follow this to know](#rules-for-fixing-bugs).



## Rules for adding Logos

- Each logos must be in their corresponding folder
- In case you want to add a logo which is already in our list, then you have to provide a better resolution for the logo and also give a short description why your logo is better (You can give a one line comparison).
- In case you want to add a logo which is not in our list, then you have to add all the size in the folder structure mentions  [in here](./README.md#logos). And you have to update the readme file, and the [data.js](./data.js) file (carefully) according to your logo change.
- In case you want to add any new size, you have to do it for all the other logos available in this project. Then you have to crete logo for each, make folder for each, update the readme file as you added new logo.
- For pull request add `feat:` in prefix of  your PR title for adding logo. for example:
    ```
    feat: adding logo of <your-logo-brand-name> of <size | sizes> square pixels
    ``` 

## Rules for adding features 

- In this case you have to create an issue first decribing you feature
- You have to get assigned for the issue and then you can work on it. 
- A suggestion template will be provided to you while creating the issue.
- For creating an issue for feature, you have to put `[FEATURE]: ` in prefix of your title of the issue. for example:
    ```
    [FEATURE]: <your-issue-title>
    ```

- If you are not assigned, you are not eligible for making a PR. Which means, your PR will not get merged. 

## Rules for fixing bugs 
- In this case you have to create an issue first decribing you which bug you want to fix
- you have to give a screenshot about the bug.
- You have to get assigned for the issue and then you can work on it. 
- A suggestion template will be provided to you while creating the issue.
- For creating an issue for feature, you have to put `[BUG]: ` in prefix of your title of the issue. for example:
    ```
    [BUG]: <your-issue-title>
    ```

- If you are not assigned, you are not eligible for making a PR. Which means, your PR will not get merged. 


### 🔴 Notice:
Please make sure that you have read the whole contribution guide to contribute.
