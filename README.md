# Trivia Survivor 

_Author: David O'Gara_

Trivia Survivor is a movie trivia quiz game with an element of danger. Players will test their knowledge of movie trivia as a creature makes its way towards them. Correct answers will sall the creatures approach while incorrect answers will allow it to advance. When too many wrong answers have been submitted the game ends in failure so to survive players must answer enough trivia questions correctly.

![cover-image](https://github.com/0davidog/trivia-survivor/assets/135815736/307d4b6e-a9f1-485d-942b-59f3d14bc705)

## Demo of the Dead

This version, created as part of an course project will be subtitled 'Demo of the Dead' and focus its subject matter on the zombie sub-genre of horror movies as this will allow for a scope that fits within the time frame given for development.

### Repository

[Github Repo](https://github.com/0davidog/trivia-survivor/)

### Deployed Site

[Trivia Survivor](https://0davidog.github.io/trivia-survivor/)

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

Here is a PDF of the wireframes put together at the sites inception. Adobe photoshop was used to visually plan the sites look and layout using an iPhone Xs (375x812) and a Dell laptop (1920x1080) as reference for viewport size/ratio:

[wireframes.pdf](https://github.com/0davidog/trivia-survivor/files/12473826/wireframes.pdf)

### Storyboard

Here is a storyboard for the basic way the creature image advances after each wrong question accompanied by an increasing bar in colours green to red that simbolises the threat level:

![zombie-storyboard](https://github.com/0davidog/trivia-survivor/assets/135815736/12a69d5b-167f-419a-8c56-7a033c48ba1e)

And here is a pdf file with the zombie-advance images rendered in photshop:

[zombie-approach.pdf](https://github.com/0davidog/trivia-survivor/files/12473927/zombie-approach.pdf)

### Colour Scheme

The theme and title chosen reminded me of the the playstation game series 'Resident Evil' so I looked to the the late nineties era titles for inspiration and chose to base the colour palette on the inventory screen (pictured below) from Resident Evil 2 (1998). This includes using green and red in the same manner to represent states of 'fine' and 'danger'.

![resident-evil-2-inventory-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/bbf02be4-b9ed-43c2-9d0d-67608a635886) ![color-swatches](https://github.com/0davidog/trivia-survivor/assets/135815736/4b426abc-4d21-4468-a4f1-c8d4e1ac70f7)

Instead of aiming for an exact match however, I found a suitable set of close-matches as part of photoshop's 'Dark' colour palatte in the default swatches collection. Here is a generated palatte courtesy of the site [coolors](https://coolors.co/):

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

![contact-form-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/97f5a864-5334-4b3c-93e4-dc91b586fb87)

The contact form allows the user to leave feedback on their experience with the app. Using the service [emailJS](https://www.emailjs.com/) I set up Javascript email service so that any feedback entered in the form will be sent to me via email.

### 404 Error Page

![404-screen](https://github.com/0davidog/trivia-survivor/assets/135815736/a91aa5a0-97b9-44fb-af98-454a87d8f08f)

A custom 404 error page was created in the style of the rest of the site with a link back to the trivia survivor page. This page is created in the same format as the main page so as not to seem to jarring when the error occurs.

### Future Features

- Different games for various genres.
- Lively animation

## Testing

### Manual Tests

- [x] Nav links

### Game Walkthrough
- #### Scenario 1
- #### Scenario 2

### Contact Form Test

- Submitting form with empty name input:

![form-test-01](https://github.com/0davidog/trivia-survivor/assets/135815736/7254e710-55be-4ae0-92cc-9ae190b5db16)

- Submitting form with empty email input:
  
![form-test-02](https://github.com/0davidog/trivia-survivor/assets/135815736/91cdc838-82a6-49bf-98d8-03ea58e1e2c2)

- Submitting form with incorrect email format:
  
![form-test-03](https://github.com/0davidog/trivia-survivor/assets/135815736/4e3f4fa6-d60a-4969-ac5c-473dd692f460)

- Submitting form with empty text area:
  
![form-test-04](https://github.com/0davidog/trivia-survivor/assets/135815736/f4e577c1-f5d7-4681-b04b-f67901725117)

- Succesfully submitting form and recieving confirmation alert:

![form-test-05](https://github.com/0davidog/trivia-survivor/assets/135815736/f127995f-effa-41f3-8903-9ead60a40236)

- Form clears upon confirmation:
  
![form-test-06](https://github.com/0davidog/trivia-survivor/assets/135815736/fefcfdae-ed9e-4c98-a0b9-3175bfc2b09a)

- Message recieved in the form of email:

![form-test-07](https://github.com/0davidog/trivia-survivor/assets/135815736/48e2e884-a09a-4446-82bc-71b4a74fde01)

### Initial Screen Size Tests

During development Chrome's developer tools were used to test the look of the app accross multiple screen sizes by inspecting the page and then viewing the site using the presets available. This emulated using the app accross different devices. This list includes the laptop I use to develop the app also.

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

[Browserstack](https://www.browserstack.com/)

|Device|OS|Viewport|Browser|Browserstack Screenshot|
|-|-|-|-|-|

### Market Research

Using the website [Statcounter](https://gs.statcounter.com/), I looked at the most popular browser, device vendor and operating system for the last year. This told me which combinations to focus on when testing using browserstack. 

Browser:

![StatCounter-browser-ww-monthly-202208-202308-bar](https://github.com/0davidog/trivia-survivor/assets/135815736/f4e1334d-f9fe-4819-992a-9557aaf3dd37)

Device Vendor:

![StatCounter-os_combined-ww-monthly-202208-202308-bar](https://github.com/0davidog/trivia-survivor/assets/135815736/baba4917-2c8f-4631-b8c5-f2c391510d73)

Operating System:

![StatCounter-vendor-ww-monthly-202208-202308-bar](https://github.com/0davidog/trivia-survivor/assets/135815736/ab5b59d5-00b7-45fe-8aa0-39742c4c3d94)

## Validation

### HTML Validator

![Screenshot 2023-09-10 at 18-10-12 Showing results for https __0davidog github io_trivia-survivor_ - Nu Html Checker](https://github.com/0davidog/trivia-survivor/assets/135815736/de0e9a4d-34db-4339-b9e0-9a2d0b36a41c)

### CSS Validator

![Screenshot 2023-09-10 at 18-10-59 W3C CSS Validator results for https __0davidog github io_trivia-survivor_ (CSS level 3 SVG)](https://github.com/0davidog/trivia-survivor/assets/135815736/9ec1c555-4c03-4466-95be-684a658eeb68)

[Full page view](https://github.com/0davidog/trivia-survivor/assets/135815736/55011400-9ae2-4deb-a648-35d7c02624c7)

### JS hint

Copy and pasted the javascript file into [jshint](https://jshint.com/), a web service that checks Java script code for errors and recieved no errors or warnings.

![Screenshot 2023-09-10 at 17-47-34 JSHint a JavaScript Code Quality Tool](https://github.com/0davidog/trivia-survivor/assets/135815736/16a84a85-8bfc-4431-b268-c2dbc32b9495)

### Lighthouse

![lighthouse](https://github.com/0davidog/trivia-survivor/assets/135815736/a900de4a-261f-4e0a-ac23-96f121bc97e0)

## Unfixed Bugs

No known bugs remain unfixed.

## Deployment

The website is deployed on [Github](https://github.com/) using GithubPages. 
The instructions for this are as follows:

- Go to the Repository:

![deployment-screen-01](https://github.com/0davidog/trivia-survivor/assets/135815736/abf43655-cfd5-48a3-ab18-c95950ed0594)

- Navigate to the settings tab:

![deployment-screen-02](https://github.com/0davidog/trivia-survivor/assets/135815736/f54c4681-0f18-4ffc-9774-b70a621b655a)

- Navigate to 'Pages' on the left menu bar under 'Code and Automation':

![deployment-screen-03](https://github.com/0davidog/trivia-survivor/assets/135815736/9dcf6975-fbbf-4539-a7d4-b235a6168978)

- Under 'Branch' select 'main' from the list: 

![deployment-screen-04](https://github.com/0davidog/trivia-survivor/assets/135815736/ea5eb167-14d3-4824-9525-5cac1eea83d7)

- Hit Save:

![deployment-screen-05](https://github.com/0davidog/trivia-survivor/assets/135815736/43940cb1-c4fb-4c78-84a5-af396574dd50)

- Once saved you'll recieve confirmation. The deployment may take a few moments to complete:

![deployment-screen-06](https://github.com/0davidog/trivia-survivor/assets/135815736/f7ab205c-4825-4550-b2cb-0f4f08887722)

- Once complete you'll find a link to your site at the top of the page:

![deployment-screen-07](https://github.com/0davidog/trivia-survivor/assets/135815736/ba228a79-020f-4c26-9fed-199546326b1c)

## Credits

### Content

- The Icons in the Nav bar were sourced from the [Font Awesome website](https://fontawesome.com/).
- [Multi Device Image in README generated with 'Am I Responsive?'](https://ui.dev/amiresponsive)
- [Table of contents in README generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/')
- [Colour palate image in README generated with coolors.co](https://coolors.co/)
- [Favicon icons and code courtesy of favicon.io](https://favicon.io/favicon-converter/)
- Email service courtesy of [emailJS](https://www.emailjs.com/)
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
     <script>
      (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init("3Q0SMJLBwZIF-Uvwg");
      })();
    </script>
    <script>
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
                alert("Thank you for the feedback.");
              },
              function (error) {
                alert("Sorry, message failed to send");
              }
            );
          });
      };
    </script>
```
```
              <form id="contact-form">
            <input type="hidden" name="contact_number">
            <label>Name</label><br>
            <input type="text" name="user_name" required><br>
            <label>Email</label><br>
            <input type="email" name="user_email" required><br>
            <label>Message</label><br>
            <textarea name="message" required></textarea><br>
            <input type="submit" value="Send"><br><br>
          </form>
```

### Languages Used

- HTML
- CSS
- Javascript

### Tech Used

- Adobe Dreamweaver
- Adobe Photoshop (for images and wire-frames)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

#### Media

All images and video used are the author's own work.

#### Acknowledgements

- Much of the learning and code framwork is inspired by the html and css essentials and Love-Maths modules in the Code Institute Software Development Course.

#### Mentor

Malia Havlicek

#### Author

David C. O'Gara 2023
