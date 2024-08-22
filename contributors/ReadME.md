# Akira Contributors

**Special Thanks To Our Contributors:**

[![Contributors List][Contributors]](https://github.com/LynnuxDev/Akira/graphs/contributors)

Table of content

- [Akira Contributors](#akira-contributors)
  - [Step-By-Step](#step-by-step)
    - [**Fork the Repository:**](#fork-the-repository)
    - [**Clone the Repository:**](#clone-the-repository)
    - [**Create a Branch:**](#create-a-branch)
    - [**Make Changes:**](#make-changes)
    - [**Test Your Changes:**](#test-your-changes)
    - [**Commit Your Changes:**](#commit-your-changes)
    - [**Push Your Changes:**](#push-your-changes)
    - [**Submit a Pull Request:**](#submit-a-pull-request)
  - [Some rules to keep in mind](#some-rules-to-keep-in-mind)
    - [Error Handling](#error-handling)

## Step-By-Step

### **Fork the Repository:**

Click the "[Fork]" button in the top right corner of the GitHub page. This action will create a copy of the repo in your GitHub account.

### **Clone the Repository:**

After forking, you'll want to bring the repository to your local machine for development.

```bash
git clone https://github.com/<Your_UserName>/Akira.git
```

### **Create a Branch:**

Create a new branch to isolate your changes and avoid conflicts with the main project.

```bash
cd Akira
git checkout -b feature-or-fix-name
```

Replace `feature-or-fix-name` with a descriptive name for your feature or fix.

### **Make Changes:**

Implement your changes or add new features on this branch. Make sure to follow the project's coding standards and guidelines.

### **Test Your Changes:**

Before submitting a pull request, ensure that your changes work as expected. Test thoroughly to catch any potential issues.

### **Commit Your Changes:**

Commit your changes with clear and descriptive commit messages.

```bash
git add .
git commit -m "Your commit message here"
```

### **Push Your Changes:**

Push your changes to your forked repository on GitHub.

```bash
git push origin feature-or-fix-name
```

Replace `feature-or-fix-name` with a descriptive name for your feature or fix.

### **Submit a Pull Request:**

Open a pull request on the [original repository]. Provide a detailed description of your changes, why they are necessary, and any additional information that might be useful.

## Some rules to keep in mind

Make sure your contributions adhere to the akira [TOS] and [Privacy Policy] and the Discord [Terms] and [Policy]

---

### Error Handling

When working with errors in Akira, please follow these steps:

**Error Codes:**

Reference error codes from [Errors.md] and [Errors.json].

**Using customError Function:**

All errors must be processed through the `customError` function.

**User Consent:**

Ensure that the user has explicitly agreed to send error data before invoking `customError`. (using a button)

**Documentation:**

Update [Errors.md] and [Errors.json] with any new error codes or changes if needed.

---

[Contributors]: https://contributors-img.web.app/image?repo=LynnuxDev/Akira "Contributors List"
[Fork]: https://github.com/LynnuxDev/Akira/fork
[original repository]: https://github.com/LynnuxDev/Akira
[Terms]: https://discord.com/terms
[Policy]: https://discord.com/policy
[TOS]: https://akira.lynnux.xyz/terms
[Privacy Policy]: https://akira.lynnux.xyz/policy
[Errors.md]: ./Errors.md
[Errors.json]: ../SRC/files/Errors.json
