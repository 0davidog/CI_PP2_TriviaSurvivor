# Trivia Survivor 

_Author: David O'Gara_

<em>This is the unaltered original version of this project, created for the Code Institute Full Stack Software Developer course.</em>

Trivia Survivor is a movie trivia quiz game with an element of danger. Players will test their knowledge of movie trivia as a creature makes its way towards them. Correct answers will stall the creatures approach while incorrect answers will allow it to advance. When too many wrong answers have been submitted the game ends in failure so to survive players must answer enough trivia questions correctly.


![cover-image](https://github.com/0davidog/trivia-survivor/assets/135815736/307d4b6e-a9f1-485d-942b-59f3d14bc705)

## Demo of the Dead

This version, created as part of an course project will be subtitled 'Demo of the Dead' and focus its subject matter on the zombie sub-genre of horror movies as this will allow for a scope that fits within the time frame given for development.

### Repository

[Github Repo](https://github.com/0davidog/trivia-survivor/)

### Deployed Site

[Trivia Survivor](https://0davidog.github.io/CI_PP2_TriviaSurvivor/)

## Contents

- [Trivia Survivor](#trivia-survivor)
  * [Demo of the Dead](#demo-of-the-dead)
    + [Repository](#repository)
    + [Deployed Site](#deployed-site)
  * [External user goal](#external-user-goal)
  * [Site owner goal](#site-owner-goal)
  * [Target Audience](#target-audience)
  * [User Story](#user-story)
  * [Site Owner Story](#site-owner-story)
  * [Design](#design)
    + [Wireframes](#wireframes)
    + [Storyboard](#storyboard)
    + [Colour Scheme](#colour-scheme)
    + [Font-Family](#font-family)
  * [Features](#features)
    + [Title Screen](#title-screen)
    + [Select Difficulty](#select-difficulty)
    + [Game Screen](#game-screen)
    + [Navigation bar](#navigation-bar)
    + [Info Page](#info-page)
    + [Score Page](#score-page)
    + [Feedback Form](#feedback-form)
    + [404 Error Page](#404-error-page)
    + [Future Features](#future-features)
  * [Testing](#testing)
    + [Manual Tests](#manual-tests)
      - [Buttons](#buttons)
    + [Game Walkthrough](#game-walkthrough-testing)
    + [Contact Form Test](#contact-form-test)
    + [Initial Screen Size Tests](#initial-screen-size-tests)
    + [Browser and OS testing](#browser-and-os-testing)
    + [Market Research](#market-research)
  * [Validation](#validation)
    + [HTML Validator](#html-validator)
    + [CSS Validator](#css-validator)
    + [JS hint](#js-hint)
    + [Lighthouse](#lighthouse)
  * [Bugs](#bugs)
    + [Resolved Issue](#resolved-issues)
      - [Repetition Bug](#repetition-bug)
      - [email Bug](#email-service-bug) 
    + [Unfixed Bugs](#unfixed-bugs)
  * [Deployment](#deployment)
  * [IDE](#ide)
  * [Credits](#credits)
    + [Content](#content)
    + [Languages Used](#languages-used)
    + [Tech Used](#tech-used)
      - [Media](#media)
      - [Acknowledgements](#Acknowledgements)
      - [Mentor](#mentor)
      - [Author](#author)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## External user goal

Users of the site are invited to test their knowledge of movie trivia in a fun survival quiz where they must answer questions correctly or lose from a limited number of lives.  

## Site owner goal

The goal in creating the site is to provide and entertaining and fun quiz that encourages repeat attempts. A secondary goal of this site is to demonstrate the use of Javascript in creating an interactive application.

## Target Audience

The target audience are in this case a movie watching audience, in particular horror movies. This will then appeal to an audience of film watching age of at around 15+ due to the subject matter and age requirements of the films. For this project the scope will focus on films of the zombie genre which, although specific, is an ever-popular subgenre with a sizable audience. A potential future version of the app would include a selection of genres to choose from. 

## User Story 

As a visitor I want to put my knowledge to the test in a quiz and be rewarded for correct answers by ‘surviving’ the game and being a score. I would return to the site to improve my score and try out other modes.  

## Site Owner Story 

As the site owner I want user to make return visits to the site to both improve their score and try other modes. The possibility of failure from too many wrong answers creates a challenge element and immediacy to the quiz and randomised questions assist replay-ability. 

## Design

### Wireframes

Here is a PDF of the wireframes put together at the site's inception. Adobe photoshop was used to visually plan the sites look and layout using an iPhone Xs (375x812) and a Dell laptop (1920x1080) as reference for viewport size/ratio:

[wireframes.pdf](https://github.com/0davidog/trivia-survivor/files/12473826/wireframes.pdf)

### Storyboard

Here is a storyboard for the basic way the creature image advances after each wrong question accompanied by an increasing bar in colours green to red that symbolises the threat level:

![zombie-storyboard](https://github.com/0davidog/trivia-survivor/assets/135815736/12a69d5b-167f-419a-8c56-7a033c48ba1e)

Here is the zombie design used:

[zombie-design](https://github.com/0davidog/trivia-survivor/assets/135815736/f1042657-c21c-4379-9882-4a8d569b3977)

And here is a pdf file with the zombie-advance images rendered in photoshop:

[zombie-approach](https://github.com/0davidog/trivia-survivor/files/12473927/zombie-approach.pdf)

### Colour Scheme

The theme and title chosen reminded me of the the playstation game series 'Resident Evil' so I looked to the the late nineties era titles for inspiration and chose to base the colour palette on the inventory screen (pictured below) from Resident Evil 2 (1998). This includes using green and red in the same manner to represent states of 'fine' and 'danger'.

![resident-evil-2-inventory-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/bbf02be4-b9ed-43c2-9d0d-67608a635886) ![color-swatches](https://github.com/0davidog/trivia-survivor/assets/135815736/4b426abc-4d21-4468-a4f1-c8d4e1ac70f7)

Instead of aiming for an exact match however, I found a suitable set of close-matches as part of photoshop's 'Dark' colour palette in the default swatches collection. Here is a generated palette courtesy of the site [coolors](https://coolors.co/):

![color-palette-coolors](https://github.com/0davidog/trivia-survivor/assets/135815736/05ee9b06-a0be-4fc0-aee3-be2685ae6878)

Though not pictured here, the site will use plain white (#ffffff) for the majority of text shown.

### Font-Family

![title-font](https://github.com/0davidog/trivia-survivor/assets/135815736/4241e6d6-fbae-459b-94a3-f31eefd4fc5a)

- For the majority of the text the font choice will be courier new as this fits thematically with a movie trivia game by resembling typed film-scripts.
- For the Headings; a sans serif font, 'League Gothic' was chosen for a dramatic important look to the title.

## Features

### Title Screen

![title-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/ec27a772-e540-455a-ae2b-2f5520bdbb56)

The first thing a user will see it the title screen. The information given is the title of the app 'Trivia Survivor', its sub-title 'Demo of the Dead'. Underneath this the user is asked to enter their name in the input provided and press the start-game button to play the game. The background image used is a darkened version of the illustration used as the main game back drop.

### Select Difficulty

![title-screen-diff](https://github.com/0davidog/trivia-survivor/assets/135815736/ade8b9e5-612c-4c05-9d5a-66ea8210cb9b)

Upon entering their name and selecting the start button the user will then be asked to choose a difficulty from easy, normal or hard. Normal mode is set at 10 questions to answer and 5 lives the user has for wrong answers. Easy mode reduces the questions to 5 while keeping the lives the same. Hard mode keeps the quiz length at 10 but reduces the users lives to 3.

### Game Screen

![game-screen-desk](https://github.com/0davidog/trivia-survivor/assets/135815736/69a30eba-e542-4b5f-b967-e06861ee3c20)

Once a difficulty is chosen the game will begin. The game screen is split into 2 halves. One half displays the image of the creature and the coloured bar beside it. The other half either displays the questions and answer buttons or message text and a button to continue after reading. The majority of time spent in the game here, switching between questions and confirmation text stating whether an answer was right or wrong. On desktop or large tablets viewed in landscape the screen division is set at a left and right while with mobiles and small screens in portrait view the game screen is divided in top and bottom. 

![game-screen-mob](https://github.com/0davidog/trivia-survivor/assets/135815736/539b3dbb-2c23-4e24-b908-2ace7fc3b958)

### Navigation bar

Fixed to the top of the screen is the navigation bar containing buttons that take the user to different sections of the app. These are not html links, instead the buttons activate functions that show or hide different sections of html information. The buttons are made using font-awesome icons and a label in plain-text is displayed when the buttons are hovered over.

- The home button takes the user to the title screen, starting the app from the beginning where they'll be asked to input their name to start.

![nav-bar-screen-01](https://github.com/0davidog/trivia-survivor/assets/135815736/229222ad-02c7-4cec-b34b-1c1c27c0f344)

- The sound button toggles the sound effects on or off. This is off by default.

![nav-bar-screen-02](https://github.com/0davidog/trivia-survivor/assets/135815736/278c3d4a-e48b-4ba0-b041-2dbcf80c8421)
![nav-bar-screen-03](https://github.com/0davidog/trivia-survivor/assets/135815736/76b2e006-00d7-49bd-8980-84d7b78f7372)

- The information button displays the information screen where the rules of the game can be found.

![nav-bar-screen-04](https://github.com/0davidog/trivia-survivor/assets/135815736/a3b2f594-e9c4-4cb8-9022-7736ab339624)

- The Score button displays the score page where the users results are displayed.

![nav-bar-screen-05](https://github.com/0davidog/trivia-survivor/assets/135815736/45aa118c-89b9-45ce-ba71-d86128d7f2a2)

- The feedback button displays the feedback page where the user can fill in a feedback form which will be sent as email to the site owner.

![nav-bar-screen-06](https://github.com/0davidog/trivia-survivor/assets/135815736/da26059a-a480-4567-9bc0-1c21ac51184e)

### Info Page

![info-page-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/ee771f5b-8622-4fe5-a8b0-3f5b97cc2f3f)

The info page gives a brief description of the game and its rules.

### Score Page

![scores-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/7e1ebaa0-ca1b-4bc8-92c8-d331339a37fd)

The scores page displays the recent score the user has achieved in this session.

### Feedback Form

![contact-form-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/d9211c2b-c2c5-4389-bc5c-8fe86586c069)

The contact form allows the user to leave feedback on their experience with the app. Using the service [emailJS](https://www.emailjs.com/) I set up Javascript email service so that any feedback entered in the form will be sent to me via email. This would allow for the site to grow from user suggestions. The format is as follows:

- Subject: Trivia Survivor Feedback from {{user_name}}
- Hello David,
- You received a new feedback comment from {{user_name}} on your Trivia-Survivor game:
- {{message}}
- Best wishes,
- EmailJS team

Here's a screenshot from a successful test:

![email-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/ad43b00c-1001-4ee3-85fd-c42b33d55ff6)


### 404 Error Page

![404-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/a91aa5a0-97b9-44fb-af98-454a87d8f08f)

A custom 404 error page was created in the style of the rest of the site with a link back to the trivia survivor page. This page is created in the same format as the main page so as not to seem to jarring when the error occurs.

### Future Features

- A version of the game with greater development time would include a different game setting for different genres of film that utilise a different backdrop and creature design depending on the genre represented.
- Greater production time could also see a more animated version of the game with graphics creating a livelier feel.

## Testing

### Manual Tests

#### Buttons

I tested the buttons in the navigation bar to check they behave as expected. This includes trying the buttons from various states of gameplay.

- [x] tested navigation buttons from title screen.
- [x] tested navigation buttons from mid-quiz.
- [x] tested navigation buttons from results screen.
- [x] tested navigation buttons with sound on.
- [x] tested navigation buttons with sound off.
- [x] tested continue buttons from all screens during title screen
- [x] tested continue buttons from all screens during quiz
- [x] tested continue buttons from all screens during results

### Game Walkthrough Testing

|Mode|Scenario|Video|
|----|--------|-----|
|Normal|Failing with 0/10|[video](https://youtu.be/lMojnsYw000)|
|Normal|Failing with 5/10|[video](https://youtu.be/VlZkMXdHGtA)|
|Normal|Surviving with 6/10 (minimum score for survival)|[video](https://youtu.be/Suesnkmfw2Y)|
|Normal|Surviving with 10/10|[video](https://youtu.be/GTtI7fGdbcY)|
|Easy|Failing with 0/10|[video](https://youtu.be/cTdiBK9nlNI)|
|Easy|Surviving with 1/10 (minimum score for survival)|[video](https://youtu.be/TJKwRHkZ2PU)|
|Hard|Failing with 0/10|[video](https://youtu.be/jKURppLX_CM)|
|Hard|Failing with 7/10|[video](https://youtu.be/LpxNe5Cz3u8)|
|Hard|Surviving with 8/10 (minimum score for survival)|[video](https://youtu.be/KoJKRWj_FZc)|
|Hard|Surviving with 10/10|[video](https://youtu.be/pZIuLP7nooU)|

### Contact Form Test

|Description|Screenshot|
|-----------|----------|
|Navigate to the Feedback form:|![form-test-01](https://github.com/0davidog/trivia-survivor/assets/135815736/001709bd-34e9-4a7a-ab2c-3ff23ced197d)|
|Attempt to send form with no input data:|![form-test-02](https://github.com/0davidog/trivia-survivor/assets/135815736/772eada9-2f5f-4372-a87f-e9ad3388a50d)|
|Attempt to send form with no email data:|![form-test-03](https://github.com/0davidog/trivia-survivor/assets/135815736/f102b8f3-bdbb-41a3-b8f2-99eded0690ac)|
|Attempt to send form with email in wrong format:|![form-test-04](https://github.com/0davidog/trivia-survivor/assets/135815736/c14d6761-f7de-4546-a263-a66ce2c64826)|
|Attempt to send form with no text data:|![form-test-05](https://github.com/0davidog/trivia-survivor/assets/135815736/552b034b-9fd5-49a4-87d4-e67fcbadc8e8)|
|Form correctly filled in:|![form-test-06](https://github.com/0davidog/trivia-survivor/assets/135815736/eabcb2fe-bba2-4719-ab2e-23cfee6283b4)|
|Confirmation message on form success:|![form-test-07](https://github.com/0davidog/trivia-survivor/assets/135815736/6a48875d-ce57-4a12-938f-8ba016855c99)|
|Form cleared and feedback form text changed:|![form-test-08](https://github.com/0davidog/trivia-survivor/assets/135815736/90e5060d-0b0c-43b5-a373-2ccad5a0b9a9)|
|Received email of form data:|![form-test-09](https://github.com/0davidog/trivia-survivor/assets/135815736/13ab8cb4-5576-47a5-9314-3f24f0b3bb58)|

### Initial Screen Size Tests

During development Chrome's developer tools were used to test the look of the app accross multiple screen sizes by inspecting the page and then viewing the site using the presets available. This emulated using the app accross different devices. This list includes the laptop I use to develop the app as well.

|Device   |Dimensions|
|---------|----------|
|iPhone SE|375x667   |
|iPhone XR|414x896 |
|iPhone 12 Pro |390x844 |
|Pixel 5 |393x851 |
|Samsung Galaxy S8+ |360x740 |
|Samsung Galaxy S20 Ultra |412x915 |
|iPad Air |820x1180|
|iPad Mini |768x1024|
|Surface Pro 7|912x1368|
|Surface Duo |540x720 |
|Galaxy Fold |280x653 |
|Samsung Galaxy A51/71 |412x914|
|Nest Hub|1024x600|
|Nest Hub Max|1280x800|
|Windows laptop|1920x1080|

### Browser and OS testing

Using the site [Browserstack](https://www.browserstack.com/), I tested the app across multiple devices, browser and operating systems for a wide view of functionality across platforms.

|Device|OS|Viewport|Browser|Browserstack Screenshot|
|-|-|-|-|-|
|Samsung Galaxy S23|Android|393x786|Chrome|[Screenshot-01](https://github.com/0davidog/trivia-survivor/assets/135815736/9006a9dc-3a9c-42c4-aca3-e5474f353c3e)|
|Xiaomi Redmi Note 12|Android|393x873|Chrome|[Screenshot-02](https://github.com/0davidog/trivia-survivor/assets/135815736/5029187b-f2fc-444d-89a4-53e36d46e8e9)|
|iPhone 14|IOS|390x664|Safari|[Screenshot-03](https://github.com/0davidog/trivia-survivor/assets/135815736/394d9db8-5e06-4f2c-bb4a-f12e2f544bf8)|
|iPhone 13|IOS|390x664|Safari|[Screenshot-04](https://github.com/0davidog/trivia-survivor/assets/135815736/db3fd403-4d6f-4f22-bd48-ada3de91e202)|
|iPad 10th|IOS|393x786|Safari|[Screenshot-05](https://github.com/0davidog/trivia-survivor/assets/135815736/82a59203-f768-4cd6-959f-cbbc3a648529)|
|PC|Windows 11|120x927|Edge|[Screenshot-06](https://github.com/0davidog/trivia-survivor/assets/135815736/0fe46edd-a0ff-4818-9d5b-738802d614e6)|
|Mac|Ventura|120x927|Safari|[Screenshot-07](https://github.com/0davidog/trivia-survivor/assets/135815736/e23479e9-ccfa-48d8-a747-e4d6e6561b80)|
|Google Pixel 6 Pro|Android|412x778|Chrome|[Screenshot-08](https://github.com/0davidog/trivia-survivor/assets/135815736/ca521b93-c868-4475-9c7b-00b76cd48264)|
|laptop PC|Windows 10|1920x1080|Firefox & Chrome|Screenshots used throughout|

### Market Research

Using the website [Statcounter](https://gs.statcounter.com/), I looked at the most popular browser, device vendor and operating system for the last year. This told me which combinations to focus on when testing using browserstack. 

|Description|Graph|
|-----------|-----|
|Browser:|![StatCounter-browser-ww-monthly-202208-202308-bar](https://github.com/0davidog/trivia-survivor/assets/135815736/f4e1334d-f9fe-4819-992a-9557aaf3dd37)|
|Device Vendor:|![StatCounter-os_combined-ww-monthly-202208-202308-bar](https://github.com/0davidog/trivia-survivor/assets/135815736/baba4917-2c8f-4631-b8c5-f2c391510d73)|
|Operating System:|![StatCounter-vendor-ww-monthly-202208-202308-bar](https://github.com/0davidog/trivia-survivor/assets/135815736/ab5b59d5-00b7-45fe-8aa0-39742c4c3d94)|

## Validation

### HTML Validator

![Screenshot 2023-09-13 at 13-40-53 Showing results for https __0davidog github io_trivia-survivor_ - Nu Html Checker](https://github.com/0davidog/trivia-survivor/assets/135815736/b4b45c6c-9882-48e5-aeb0-ac8883901c9f)

### CSS Validator

![Screenshot 2023-09-13 at 13-37-33 W3C CSS Validator results for https __0davidog github io_trivia-survivor_ (CSS level 3 SVG)](https://github.com/0davidog/trivia-survivor/assets/135815736/95a69528-fa4a-437a-86cf-a610d6d75ae7)

[Full page screenshot](https://github.com/0davidog/trivia-survivor/assets/135815736/b6c7d8d1-f770-4c00-8a7a-a5762be12bfe)

### JS hint

Copy and pasted the javascript files into [jshint](https://jshint.com/), a web service that checks Java script code for errors and recieved no errors and 1 warning.
|Screenshot|Description|
|----------|-----------|
|![jshint-screen-01](https://github.com/0davidog/trivia-survivor/assets/135815736/2dedc264-9ac0-4741-8426-d51ff2d451d7)| JShint displays one comment when checking the main script.js. This is that there is an undefined variable of questionsList. This is because JShint cannot, from the code pasted see that this variable comes from its own js file 'questions.js'. So this comment is ignored.
|![jshint-screen-02](https://github.com/0davidog/trivia-survivor/assets/135815736/2ab33475-a46b-4275-a98d-5032ba0137f4)| JShint displays one comment when checking questions.js. This is that there is an unused variable of questionsList. This is because JShint cannot, from the code pasted see that the variable is used within the main script.js file. So this comment too is ignored.
|![jshint-screen-03](https://github.com/0davidog/trivia-survivor/assets/135815736/af0fc46e-8826-4bc9-af4f-fb5b9e50bfda)| JShint displays one warning when checking the email.js file. This is that there is an unexpected character on line 23. As this is code copied from the emailJS tutorial and not written by me I decided to ignore this to avoid any errors in the email service function. The comments about undefined variable too are due to the code refrencing an external source and is therfore ignored.

### Lighthouse

Chrome developer tools 'lighthouse' function was used to assess the apps accessibily, search engine optimisation and performance.

![lighthouse](https://github.com/0davidog/trivia-survivor/assets/135815736/a900de4a-261f-4e0a-ac23-96f121bc97e0)

## Bugs

### Resolved Issues

During development many bugs occurred, some more difficult to address than others. These include:

- Users were able to get to the end of the game an win with 0/5 on the easy difficulty as the game was counting 5 questions completed as a win regardless of the 0 lives left. This was fixed quite simply with an if statement that check the users lives count before making a win/lose decision.

- #### Repetition Bug
  A big problem for me was a bug in the way my code was set up that seemed to increment the question number exponentially and caused the game to be over before even playing ten questions. I couldn't figure out the cause of this problem using console logs and developer debug breakpoints. I believe however, that this was fixed by tidying up the use of eventlisteners for various buttons in use throughout as well as through a thorough organising and notation of the code, making sure the step wise motion of functions made logical sense.
   
- #### Email service Bug
  Another particularly difficult bug was one in which the email service appeared to break when it came time to test for the readme. Instead of a pause followed by a confirmation alert and an email received as expected the page appeared to refresh and return to the title screen without even giving the failure to send alert that was in place at the time. I couldn't find the reason this wasn't working with either console logs or dev tools breakpoints as it seemed to through the whole process out. The only solution that seemed available was to remake the contact form from tutorial and this appeared to solve the issue.

### Unfixed Bugs

No known bugs remain unfixed.

## Deployment

The website is deployed on [Github](https://github.com/) using GithubPages. 
The instructions for this are as follows:

|Instruction|Screenshot|
|-----------|----------|
|Go to the Repository:|![deployment-screen-01](https://github.com/0davidog/trivia-survivor/assets/135815736/abf43655-cfd5-48a3-ab18-c95950ed0594)|
|Navigate to the settings tab:|![deployment-screen-02](https://github.com/0davidog/trivia-survivor/assets/135815736/f54c4681-0f18-4ffc-9774-b70a621b655a)|
|Navigate to 'Pages' on the left menu bar under 'Code and Automation':|![deployment-screen-03](https://github.com/0davidog/trivia-survivor/assets/135815736/9dcf6975-fbbf-4539-a7d4-b235a6168978)|
|Under 'Branch' select 'main' from the list:|![deployment-screen-04](https://github.com/0davidog/trivia-survivor/assets/135815736/ea5eb167-14d3-4824-9525-5cac1eea83d7)|
|Hit Save:|![deployment-screen-05](https://github.com/0davidog/trivia-survivor/assets/135815736/43940cb1-c4fb-4c78-84a5-af396574dd50)|
|Once saved you'll receive confirmation. The deployment may take a few moments to complete:|![deployment-screen-06](https://github.com/0davidog/trivia-survivor/assets/135815736/f7ab205c-4825-4550-b2cb-0f4f08887722)|
|Once complete you'll find a link to your site at the top of the page:|![deployment-screen-07](https://github.com/0davidog/trivia-survivor/assets/135815736/ba228a79-020f-4c26-9fed-199546326b1c)|

## IDE

For this project the IDE I predominantly used was Adobe Dreamweaver. Although not a popular IDE, it was something I already had access to as part of Adobe's Creative Cloud package and found easy to start using with my lack of experience in software development. This also allowed me to get started on projects relatively quickly compared to Codeanywere's load times. Combined with git for windows this allowed me to use the git command line terminal to add, commit, pull and push with the repository. Dreamweaver has limitations however, so for any markup documents such as the readme or site manifest for favicons editing directly in github was necessary.

## Credits

### Content

- The Icons in the Nav bar were sourced from the [Font Awesome website](https://fontawesome.com/).
  - [Home](https://fontawesome.com/icons/house?f=classic&s=solid)
  - [Sound on](https://fontawesome.com/icons/volume-off?f=classic&s=solid)
  - [Sound off](https://fontawesome.com/icons/volume-high?f=classic&s=solid)
  - [Info](https://fontawesome.com/icons/circle-info?f=classic&s=solid)
  - [Scores](https://fontawesome.com/icons/star?f=classic&s=solid)
  - [Feedback](https://fontawesome.com/icons/comment?f=classic&s=solid)
- [Multi Device Image in README generated with 'Am I Responsive?'](https://ui.dev/amiresponsive)
- [Table of contents in README generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/')
- [Colour palate image in README generated with coolors.co](https://coolors.co/)
- [Favicon icons and code courtesy of favicon.io](https://favicon.io/favicon-converter/)
- Sounds from https://freesound.org/
  - [Click sound](https://freesound.org/people/adh.dreaming/sounds/668358/)
  - [Correct sound](https://freesound.org/people/Fupicat/sounds/538147/)
  - [Wrong answer sound](https://freesound.org/people/MATRIXXX_/sounds/516901/)  

#### Email service courtesy of [emailJS](https://www.emailjs.com/)
<details>
	<summary>Here is the code in action:</summary>
- This is the code given in the emailJS setup tutorial: [(link here)](https://www.emailjs.com/docs/tutorial/creating-contact-form/)

```
<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('YOUR_PUBLIC_KEY');
        })();
    </script>
    <script type="text/javascript">
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
    </script>
</head>
<body>
    <form id="contact-form">
        <input type="hidden" name="contact_number">
        <label>Name</label>
        <input type="text" name="user_name">
        <label>Email</label>
        <input type="email" name="user_email">
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send">
    </form>
</body>
</html>
```
-   And here is how I utilised it on my page:
```

(function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init("3Q0SMJLBwZIF-Uvwg");
})();

window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
		event.preventDefault();
		// generate a five digit number for the contact_number variable
		this.contact_number.value = (Math.random() * 100000) | 0;
            // these IDs from the previous steps
		emailjs.sendForm("service_pmzmnla", "contact-form", this).then(
			function () {
				document.getElementById("contact-form").reset();
				modal_message.innerHTML = 'Thank you for your feedback.';
				modal.style.display = "flex";
				document.getElementById('feedback-text').innerHTML="Thank you, your feedback has been recieved and will be taken into consideration.";
				document.getElementById('contact-form').display="none";
			},
			function (error) {
				modal_message.innerHTML = 'Sorry, message failed to send.';
				modal.style.display = "flex";
				document.getElementById('feedback-text').innerHTML="Sorry, as your feedback failed to send please consider trying again.";
			}
		);
	});
};
```
```
              <form id="contact-form">
						
						<input type="hidden" name="contact_number">
						
						<label>Name:</label><br>
						
						<input type="text" name="user_name" required><br>
						
						<label>Email:</label><br>
						
						<input type="email" name="user_email" required><br>
						
						<label>Message:</label><br>
						
						<textarea name="message" required></textarea><br>
						
						<input type="submit" value="Send" id="send"><br><br>
					
					</form>
```
</details>

#### Modal Message from W3Schools

Alerts were proving to be too jarring in style difference in such a way that a user would probably ignore them. Using this [modal tutorial](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal) from W3Schools I instead created modal messages that could provide information while not taking the user out of the app.

<details>
	<summary>Examples:</summary>
Here's were I used the concept in html:

```
		<!-- Modal html from https://www.w3schools.com/howto/howto_css_modals.asp -->
		<div id="modal" class="modal">
			<!-- Modal content -->
			<div class="modal-content">
				<p id="modal_message">What a horrible night to have a curse...</p>
				<button id="continue-btn-modal">Continue</button>
			</div>
		</div>

```
In Main javascript file:
```
			modal_message.innerHTML = 'This game is best viewed in portrait while at this screen-size.\nPlease rotate or unfold your device.';
			modal.style.display = "flex";
```
In email javascript file:
```
				modal_message.innerHTML = 'Thank you for your feedback.';
				modal.style.display = "flex";
```
</details>

### Languages Used

- HTML
- CSS
- Javascript

### Tech Used

- Adobe Dreamweaver
- Adobe Photoshop (for images and wire-frames)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [emailJS](https://emailjs.com/)

#### Media

All images/illustration used are the author's own work.

#### Acknowledgements

Much of the learning and code framwork is inspired by the html and css essentials and Love-Maths modules in the Code Institute Software Development Course.

#### Mentor

Malia Havlicek

#### Author

David C. O'Gara 2023
