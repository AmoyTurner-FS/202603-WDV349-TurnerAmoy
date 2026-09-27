# Research Notes

# Project & Portfolio V

- **Research Notes - Milestone 4**
- **Amoy Turner**
- **August 2026**

<br>

## Topic - Beta Release, Clean Code & Project Longevity

This week I focused on preparing CarFinder for its Beta release. At this stage of development, the main goal is making sure the application's core functionality works correctly while also cleaning up the project from both the user's and developer's perspective.

The research this week covered clean code, using Prettier with linters, organizing CSS, the Pareto Principle, writing useful code comments, and creating a strong README. I also looked at how these topics could help me finish CarFinder without adding unnecessary features during the final milestone.

<br>

## Sub-Topic 1 - Writing Clean Code

Clean code is code that is easy to understand, maintain, and continue developing. As a project grows, code can become harder to work with if features are added without going back to review how everything is organized.

One thing that stood out to me from the Clean Code material is that developers spend a lot of time reading existing code. This means writing understandable code is important not only for other developers, but also for myself when I return to a project later.

Meaningful names are also important because functions, variables, components, and files should make their purpose clear. This can reduce the need to constantly figure out what different parts of the application are supposed to do.

For CarFinder, clean code means reviewing the components and utility functions I created throughout development, removing unnecessary code, reducing repetition where possible, and making sure the final project is easy to follow.

<br>

## Sub-Topic 2 - Prettier and ESLint

Prettier and ESLint can both help improve a codebase, but they have different purposes. Prettier focuses mainly on consistent code formatting, while ESLint focuses more on code quality and identifying possible problems.

Using both tools can create conflicts if they are trying to control the same formatting rules. The Prettier documentation recommends separating these responsibilities so Prettier handles formatting while the linter handles code quality rules.

CarFinder already includes ESLint as part of the project setup. During the Beta clean up, I can use the existing lint command to identify problems such as unused variables or other issues that may have been introduced while developing features.

Prettier could also be added later if I want formatting to be handled automatically throughout the project. The main goal is to use tools that make the code more consistent without creating unnecessary complexity.

<br>

## Sub-Topic 3 - Organizing CSS

CSS can become difficult to maintain as an application grows. Keeping styles organized and consistent makes it easier to find what needs to be changed and reduces the chance of creating duplicate or conflicting styles.

Some useful practices include keeping naming conventions consistent, grouping related styles together, avoiding selectors that are more specific than necessary, and separating styles into logical sections or smaller files when appropriate.

CarFinder already uses separate CSS files for many of its pages and components. This helps keep styles for areas such as the Dashboard, Search Cars, Vehicle Details, Sidebar, and Navbar separated instead of putting the entire application's styling into one large file.

During final Beta clean up, I can review the existing CSS for unused styles, repeated rules, inconsistent spacing, and anything else that could make the project harder to maintain.

<br>

## Sub-Topic 4 - The Pareto Principle / 80-20 Rule

The Pareto Principle, also known as the 80/20 rule, is the idea that a smaller amount of work can sometimes create the majority of the results. In project development, this can help determine which tasks will have the biggest impact when time is limited.

This became especially useful during the final CarFinder milestone. There are still many features that could be added to the application, but not every possible feature is necessary for the Beta release.

For example, I originally created an issue to expand the NHTSA API with features such as VIN decoding, recalls, safety ratings, and additional vehicle specifications. These features could improve CarFinder, but they are not required for the current Beta.

Instead of increasing the scope of the project during the final milestone, I decided to document those ideas as future development and focus on testing, core functionality, clean up, and documentation. This allows me to spend the remaining development time on the parts of CarFinder that have the biggest impact on the Beta release.

<br>

## Sub-Topic 5 - Writing Code Comments

Code comments can help explain parts of an application that may not be immediately obvious to another developer. However, comments should provide useful information instead of explaining every individual line of code.

Good comments can explain why something was implemented a certain way, describe unusual logic, or provide context that would help someone maintain the project later. Code that is already clear through good naming does not always need an additional comment.

For CarFinder, I want the final code to be understandable without filling every file with comments. During the Beta clean-up, comments can be added where they provide useful context, especially around logic involving external API data, inventory management, or other areas that may not be obvious when looking at the code for the first time.

<br>

## Sub-Topic 6 - Creating a Strong README

A README is one of the first things someone may see when viewing a project repository. It should explain what the project is, what technologies it uses, how to install it, and how to run it.

This is especially important for CarFinder because the repository may remain part of my portfolio after this course is completed. Someone viewing the project later should not have to guess how to get the application running.

The final CarFinder README should include an overview of the application, the main features, technologies used, installation instructions, where to run npm commands, how to start the development server, and any other setup requirements.

Since CarFinder currently uses local application data and browser storage instead of a separate database, the README should also make the current project structure clear instead of including setup instructions for systems that the application does not use.

<br>

## Applying the Research to CarFinder

A lot of this week's research relates directly to the work I completed while preparing CarFinder for Beta.

One of the main priorities was testing complete user flows instead of only looking at individual components. I tested searching for vehicles, viewing search results, opening Vehicle Details, adding new vehicles to the inventory, Favorites behavior, and navigation throughout the application. I tested both successful paths and situations where something could go wrong.

The vehicle search passed testing for Year, Make, and Model searches. I also tested searches where the NHTSA API provided a valid vehicle combination but CarFinder did not have a matching vehicle in its inventory. In that situation, the application displayed its no-results state without crashing.

Vehicle Details was also improved so it now loads information for the vehicle selected by the user instead of displaying hard coded vehicle information. I also added a Vehicle Not Found state so an invalid vehicle ID does not cause the page to fail.

The Add Vehicle page was connected to the CarFinder inventory using browser localStorage for the current frontend Beta. I tested adding a vehicle, searching for the new vehicle, opening its Vehicle Details page, and refreshing the application to make sure the added vehicle remained available.

I also completed several smaller improvements that helped the overall user experience. Dashboard navigation was connected, the search filters received a Clear Filters option, the CarFinder logo can be expanded, and the Navbar account menu was added with proper open and close behavior.

The Favorites use case showed that the current Favorites page is still using sample data and that adding and removing favorites is not functional yet. Instead of expanding the scope of the final milestone, I documented this as a known limitation and future development item.

I also reviewed CarFinder for possible OWASP security concerns and researched automated code scanning options. The review helped identify future improvements such as stronger form validation, user facing API error messages, secure backend storage, authentication, and automated dependency scanning.

The 80/20 research was useful when deciding what should actually be completed during the final milestone. Expanding the NHTSA API could add useful features, but it would take time away from the Beta requirements. I decided to keep the current NHTSA search integration and move the additional API ideas into future development.

<br>

## What I Learned

The biggest thing I learned this week is that finishing a project is not only about continuing to add features. There is a point where testing, clean up, documentation, and deciding what not to build become just as important as development.

Testing complete use cases helped me see CarFinder more from the user's perspective. Some features worked individually but needed to be tested as part of a complete flow to make sure the application behaved correctly from one page to another.

I also learned that a Beta does not have to include every feature I can think of. The 80/20 principle helped me look at which tasks would have the biggest impact on the final project instead of trying to complete every idea before the course ends.

The research on clean code and documentation also reminded me that this repository may be viewed again after the class is finished. Keeping the code, README, research, project log, issues, and pull requests organized makes the project easier to understand and gives a better representation of the work that went into building it.

<br>

## Independent Research - Git Tags and Releases

As part of my independent research this week, I looked into Git tags and GitHub Releases as another way to organize versions of a project.

A Git tag can mark a specific point in the repository's history. This can be useful when a project reaches an important version, such as a Beta release, because the exact version of the code can be identified later.

GitHub Releases build on tags by providing a place to describe a version of the project and include information about what changed. This can make it easier for developers or users to understand what was included in a specific release.

This could eventually be useful for CarFinder because the current milestone represents the Beta stage of the application. A future version could use a tag such as a Beta version to identify the state of the application when this course was completed.

I do not need to add Git tags or create a GitHub Release for the current course requirements, but researching them helped me understand another part of the release process and how projects can keep track of important versions as development continues.

<br>

## Reference Links

**Resource 1: Clean Code - O'Reilly**  
https://www.oreilly.com/library/view/clean-code-a/9780136083238/chapter01.xhtml  
This resource explains the importance of writing clean and maintainable code and how code quality can affect a project as it grows.

**Resource 2: Integrating Prettier with Linters - Prettier**  
https://prettier.io/docs/integrating-with-linters.html  
This resource explains the difference between formatting and code-quality tools and how Prettier can be used alongside linters such as ESLint.

**Resource 3: Organizing CSS - MDN Web Docs**  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing  
This resource provides best practices for keeping CSS organized, consistent, and easier to maintain as a project becomes larger.

**Resource 4: Pareto Principle / 80-20 Rule - Asana**  
https://asana.com/resources/pareto-principle-80-20-rule  
This resource explains how the 80/20 principle can be used to prioritize the work that creates the biggest impact.

**Resource 5: Writing Code Comments - Refine**  
https://refine.dev/blog/code-comments/  
This resource discusses useful code comments and how comments can improve the readability and maintainability of a project.

**Resource 6: Creating a README - Bulldogjob**  
https://bulldogjob.com/readme/how-to-write-a-good-readme-for-your-github-project  
This resource discusses what information should be included in a README so other developers can understand, install, and use a project.

**Independent Research: Git Tags - Git Documentation**  
https://git-scm.com/book/en/v2/Git-Basics-Tagging  
This resource explains how Git tags can be used to mark important points in a project's history.

**Independent Research: GitHub Releases - GitHub Docs**  
https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases  
This resource explains how GitHub Releases can be created from tags to document and share specific versions of a project.
