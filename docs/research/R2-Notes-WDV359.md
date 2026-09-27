# Research Notes

# Project & Portfolio V

- **Research Notes - Milestone 2**
- **Amoy Turner**
- **August 2026**

<br>

## Topic - Validating & Strengthening Work in Progress

This week I focused on ways to validate and strengthen CarFinder while continuing development. Now that the project is moving past the planning stage, I need to make sure the features I am building actually support the purpose of the application and work the way users would expect. The research this week covered project viability, A/B testing, use case testing, Agile planning, metrics, and quality assurance.

<br>

## Sub-Topic 1 - Project Viability & Business Case

Project viability is about looking at whether an idea is still realistic, useful, and worth continuing as development progresses. Even if an idea sounded good at the beginning, it is important to continue reviewing the project and make sure the features being added still support the original purpose.

For CarFinder, I think the project is still viable because it has a clear purpose and can be developed within the scope of this course. The application gives users a way to search for vehicles and view useful vehicle information while also providing inventory management features such as adding vehicles.

This week also helped me realize that the business case can continue to change and improve during development. Features like analytics, testing, and user feedback could eventually provide actual information about how people use CarFinder instead of only assuming that the application works well for them.

<br>

## Sub-Topic 2 - A/B Testing

A/B testing is a way to compare two versions of something to see which version performs better with users. Instead of making a design decision based only on personal preference, different versions can be tested and the results can help determine which one works better.

For CarFinder, A/B testing could eventually be used on parts of the application such as the search interface, vehicle cards, buttons, or navigation. For example, I could test two different versions of the Search Cars page to see which layout makes it easier for users to find and select a vehicle.

I do not need to implement A/B testing during this milestone, but understanding how it works gives me another way to evaluate design decisions later instead of guessing what users prefer.

<br>

## Sub-Topic 3 - Use Case Testing

Use case testing focuses on testing the application based on actions a user is expected to complete. Instead of only checking individual pieces of code, the test follows an actual user interaction from beginning to end.

This applies directly to CarFinder because the application has several clear user flows. One example would be testing whether a user can select a year, make, and model, search for a vehicle, view the results, select a vehicle, and then view its information.

Another use case could test whether a user can add a vehicle to the inventory and later find that vehicle through the Search Cars page. Favorites can also be tested by making sure a user can save a vehicle and then see it on the Favorites page.

These types of tests would help me confirm that the application works as a complete system instead of only confirming that individual components appear on the screen.

<br>

## Sub-Topic 4 - Agile Planning

The Agile planning material connected closely with the GitHub workflow I have been using throughout this milestone. Instead of treating the entire CarFinder application as one large development task, I have been breaking the project into smaller issues that can be completed and reviewed individually.

This week I created and organized issues for individual pages, reusable components, routing, documentation, instructor feedback, and other development tasks. I also used milestones and the GitHub Project Board to keep track of what was in Todo, In Progress, and Done.

Using smaller issues has made the project easier for me to manage because I can focus on one feature at a time. It also makes my GitHub history more detailed because each issue, branch, commit, and pull request shows a specific part of the development process.

<br>

## Sub-Topic 5 - Metrics, Analysis & QA

Metrics and analysis can help determine whether users are actually interacting with an application the way it was designed. Instead of only checking whether a feature technically works, analytics could eventually be used to understand how the application is being used.

For CarFinder, useful metrics could include which vehicle makes or models are searched the most, how often users add vehicles to Favorites, which vehicles receive the most views, or whether users start a search but do not select a result.

Quality assurance is also important because the application needs to work consistently as more features are added. Testing navigation, search functionality, forms, favorites, and other user flows will help identify problems before the application reaches its final version.

I can use these strategies later in development to help validate both the technical functionality and the overall user experience of CarFinder.

<br>

## Applying the Research to CarFinder

A lot of this week's research directly connected to the development work I completed during Milestone 2. I started building out the actual React structure of CarFinder and created the main page layouts for Dashboard, Search Cars, Add Vehicle, and Favorites.

I also worked on shared application components and functionality including the application layout, React routing, dynamic page headers, the footer, and a reusable CarCard component. The CarCard was built to receive vehicle information through props so it can later display dynamic data instead of having vehicle information hard coded directly into the component.

Another major part of this week was applying instructor feedback from Milestone 1. I broke larger tasks into smaller and more specific GitHub issues, improved how issues were organized using labels and milestones, added descriptions to milestones, and continued using feature branches and pull requests for individual development tasks.

This work helped move CarFinder from planning and wireframes into an actual application structure while still keeping the development process organized.

<br>

## What I Learned

The biggest thing I learned this week is that building the application is only one part of the development process. I also need ways to determine whether the application actually works for the people who would use it.

A/B testing, use case testing, analytics, and QA all provide different ways to validate a project. I also understand more about why it is important to keep reviewing the business case as development continues. A feature might sound useful, but it should still support the main purpose of the application.

I also got more comfortable with the GitHub workflow this week. Breaking work into smaller issues and using a separate feature branch and pull request for each issue has made it easier to see my progress and keep the dev branch organized.

<br>

## Independent Research - Vehicle API Integration

As part of my independent research this week, I looked further into how real vehicle information could eventually be integrated into CarFinder. I decided to plan around the NHTSA vPIC API because it provides official vehicle information that can support features involving vehicle years, makes, models, VINs, and specifications.

One important thing I learned is that the external vehicle API should not be responsible for all of the data in CarFinder. Information such as a vehicle's price, current mileage, description, image, and favorite status would need to be handled by the CarFinder application because those values are specific to an inventory listing.

The planned structure would use the NHTSA API for vehicle information while CarFinder manages the actual inventory data. Search results can then be passed into reusable CarCard components, and users will eventually be able to select a vehicle to see more information.

This research helped me understand how I can connect an external API to the application without designing the entire project around what one API provides.

<br>

## Reference Links

**Resource 1: Google Marketing Platform - Success Stories**  
https://marketingplatform.google.com/about/resources/success-stories/  
This resource provides examples of how businesses use tools, technology, and data to improve results and strengthen their strategies.

**Resource 2: A/B Testing - BrowserStack**  
https://www.browserstack.com/guide/a-b-testing  
This resource explains how A/B testing compares different versions of an experience to determine which one performs better.

**Resource 3: Use Case Testing - Software Testing Help**  
https://www.softwaretestinghelp.com/use-case-testing/  
This resource explains how use-case testing can be used to test application functionality based on actual user interactions.

**Resource 4: Your First Plan - The Agile Samurai**  
https://www.oreilly.com/library/view/the-agile-samurai/9781680500066/f_0056.html  
This chapter covers Agile planning techniques that can be used to organize and manage development work.

**Resource 5: Quality Assurance in Software Development - LogRocket**  
https://blog.logrocket.com/product-management/what-is-quality-assurance-qa-software-development/  
This resource explains the role of quality assurance and how QA helps maintain software quality throughout development.

**Independent Research: NHTSA vPIC API**  
https://vpic.nhtsa.dot.gov/api/  
This API provides vehicle information that can be used to support CarFinder's year, make, model, VIN, and vehicle specification features.
