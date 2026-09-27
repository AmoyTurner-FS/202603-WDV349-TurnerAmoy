# Research Notes

# Project & Portfolio V

- **Research Notes - Milestone 3**
- **Amoy Turner**
- **August 2026**

<br>

## Topic - Security, Compliance & Innovation

This week I focused on security, compliance, and innovation while continuing development on CarFinder. As the application becomes more functional, I need to think about more than just whether the features work. I also need to consider possible security risks, how the application handles data, and what tools can help identify problems before they become bigger issues.

The research this week covered SWOT analysis, OWASP web application security risks, code scanning with CodeQL, alternative security scanning tools, and creativity and innovation. I also looked at how these topics could apply directly to CarFinder and affect some of the features I plan to work on next.

<br>

## Sub-Topic 1 - SWOT Analysis

A SWOT analysis looks at the strengths, weaknesses, opportunities, and threats that can affect a project. Strengths and weaknesses focus more on what is happening within the project, while opportunities and threats can include outside factors that may affect its success.

For CarFinder, one of the biggest strengths is that the project has a clear purpose and is being built with reusable React components. The NHTSA API integration is another strength because it allows the application to use real vehicle information instead of creating every year, make, and model manually.

One current weakness is that some parts of CarFinder are still using sample or hard coded inventory data. There are also features that are visually complete but still need their full functionality connected. An opportunity is to expand the NHTSA API integration into other parts of the application, such as VIN decoding, recalls, safety information, and vehicle specifications. A possible threat would be security problems as more user input, inventory management, authentication, and external data are added.

Using SWOT analysis helped me look at CarFinder as a complete project instead of only looking at whatever feature I am currently developing.

<br>

## Sub-Topic 2 - OWASP Web Application Security Risks

The OWASP Top 10 is an awareness resource that identifies major security risks developers should consider when building web applications. Some of the current areas include broken access control, security misconfiguration, software supply chain failures, cryptographic failures, injection, insecure design, authentication failures, software or data integrity failures, logging and alerting failures, and problems with handling exceptional conditions.

Several of these could become important for CarFinder as the application grows. Broken access control is especially important because I plan to have different access levels for managers and regular users. The manager should be able to add vehicles to the inventory, while regular users should not have access to that feature.

Injection and insecure design are also important when dealing with forms and user input. The Add Vehicle page will eventually accept information such as VIN, price, mileage, and vehicle descriptions. Those values should be validated instead of automatically trusting whatever is entered.

Looking at OWASP helped me understand that security should be considered while features are being designed instead of waiting until the application is completely finished.

<br>

## Sub-Topic 3 - Code Scanning with CodeQL

CodeQL is a code analysis tool from GitHub that can scan a repository for vulnerabilities and coding errors. It treats the codebase as data and runs queries against it to identify patterns that may represent security problems or other issues.

One benefit of CodeQL for CarFinder is that it works with JavaScript and TypeScript, which makes it relevant to the technologies being used in the project. GitHub can also run CodeQL through code scanning and display alerts directly in the repository.

This could eventually become part of my GitHub workflow. Instead of only reviewing code manually before merging a pull request, automated scanning could provide another way to identify problems that I may have missed.

I created a security issue for researching automated code scanning further so I can decide how I want to include this in CarFinder during future development.

<br>

## Sub-Topic 4 - Alternative Security Scanning Tools

As part of my independent research, I also looked at Semgrep as an alternative security scanning tool. Semgrep performs static analysis and can scan source code for security problems and coding issues using rules that identify patterns in the code.

One reason this stood out to me is that it can be used during development and incorporated into a CI workflow. This means security checks can become part of the development process instead of only being performed at the end of a project.

CodeQL makes sense for CarFinder because the project is already being managed through GitHub, but researching another tool showed me that there are multiple ways to approach automated security scanning. The best option depends on the project, technologies being used, workflow, and how much control is needed over the scanning rules.

For CarFinder, I plan to continue researching automated code scanning before deciding how much of it I want to implement.

<br>

## Sub-Topic 5 - Creativity & Innovation

The Electronic Frontier Foundation material helped me think about innovation from a different perspective. New technology can create useful tools and experiences, but developers also need to think about how technology affects users and what responsibilities come with creating new systems.

This relates to CarFinder because I have continued finding ways to improve the application beyond the original basic idea. For example, the NHTSA API originally helped solve the problem of getting real vehicle makes and models into the search system. After implementing it, I realized the same API could potentially improve other areas such as VIN decoding, safety ratings, recalls, and vehicle specifications.

I think innovation in a project does not always mean creating something completely new. It can also mean finding better ways to combine existing technologies and use them to improve the experience for users.

<br>

## Applying the Research to CarFinder

A lot of this week's research connected directly to the development work I completed during Milestone 3.

One of the biggest updates was integrating the NHTSA vehicle API into CarFinder. The Search Cars page now uses real vehicle data to populate the Make and Model dropdowns. The search follows a Year -> Make -> Model flow, and models are loaded based on the year and make selected by the user.

I kept the NHTSA information separate from the CarFinder inventory. NHTSA provides real vehicle information, while CarFinder controls listing specific information such as price, mileage, description, favorites, and which vehicles are actually available. This also allows multiple listings of the same vehicle to exist with different prices or mileage.

I also implemented working inventory search functionality. Users can currently search by Year, Year and Make, or Year, Make, and Model. The results and vehicle count update based on the selected filters, and the application displays a message when there are no matching vehicles.

Another improvement this week was navigation between Search Cars, Favorites, and Vehicle Details. The Vehicle Details page can now determine whether the user came from Search Cars or Favorites and return them to the correct page. Search filters are also preserved when a user views a vehicle and returns to their previous search.

I completed another testing and layout review across the main CarFinder pages. During testing, I documented additional work that needs to be completed instead of trying to add every new feature during the same milestone. Some of these future improvements include making Dashboard buttons functional, connecting Add Vehicle to the inventory, improving Vehicle Details, adding a Clear Filters option, and expanding the NHTSA API features.

The security research also led me to create issues related to reviewing OWASP risks and researching automated code scanning. These issues give me a place to continue security work as CarFinder becomes more complete.

<br>

## What I Learned

The biggest thing I learned this week is that security needs to be part of the development process and not something that is only checked when the application is finished. Features such as forms, user accounts, manager access, APIs, and inventory management can all introduce different security concerns.

I also learned more about how automated tools can support manual testing and code review. Tools such as CodeQL and Semgrep can help identify problems that may be difficult to notice by only looking through the code myself.

The SWOT research also helped me look at CarFinder from a wider perspective. The project has made a lot of progress, but there are still weaknesses and possible risks that I need to consider as more functionality is added.

This week also showed me how useful it is to test the application as I develop it. Testing the current version helped me find problems and improvements that were not as obvious while I was building individual features. Instead of trying to fix everything immediately, I documented the additional work as GitHub issues so it can be planned for the next milestone.

<br>

## Independent Research - Expanding the NHTSA API

As part of my independent research and development this week, I looked further into what the NHTSA API could provide beyond the vehicle Make and Model information I am currently using.

The current API integration is working correctly because NHTSA provides real vehicle information while CarFinder manages its own inventory. However, there are more NHTSA features that could make the application more useful.

One feature I want to explore is VIN decoding. Since the manager will eventually enter a VIN when adding a vehicle, CarFinder could use NHTSA data to identify information about that vehicle and help reduce the amount of information that has to be entered manually.

I also want to explore using NHTSA data on the Vehicle Details page. Information such as recalls, safety ratings, and additional vehicle specifications could give users more information about a vehicle before they decide to save it to their Favorites.

I created a future development issue to expand the NHTSA API across CarFinder. The goal is not to use the API on every page just because it is available. I want to use it in places where the information actually improves the application.

The planned structure would use NHTSA to support Search Cars, help the manager add accurate vehicle information, and provide additional information on Vehicle Details while CarFinder continues to control the actual inventory.

<br>

## Reference Links

**Resource 1: SWOT Analysis - Figma**  
https://www.figma.com/resource-library/what-is-a-swot-analysis/  
This resource explains how strengths, weaknesses, opportunities, and threats can be used to evaluate a project and help with planning.

**Resource 2: OWASP Top 10**  
https://owasp.org/www-project-top-ten/  
This resource provides information about major web application security risks developers should consider when designing and developing applications.

**Resource 3: OWASP Top 10 for LLM & Generative AI Applications**  
https://genai.owasp.org/llm-top-10/  
This resource provides information about security risks involving LLM and generative AI applications and shows how security concerns continue to change as technology develops.

**Resource 4: Code Scanning with CodeQL - GitHub Docs**  
https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning  
This resource explains how CodeQL analyzes code to identify vulnerabilities and errors and how the results can be used with GitHub code scanning.

**Resource 5: Creativity & Innovation - Electronic Frontier Foundation**  
https://www.eff.org/issues/innovation  
This resource discusses technology, creativity, innovation, and issues that can affect how new technologies are developed and used.

**Independent Research: Semgrep**  
https://semgrep.dev/  
Semgrep is a static analysis tool that can scan source code for security issues and other coding problems.

**Independent Research: NHTSA vPIC API**  
https://vpic.nhtsa.dot.gov/api/  
The NHTSA vPIC API provides vehicle information that CarFinder currently uses for vehicle search and could later use for VIN decoding and additional vehicle information.
