# jonu.github.io
Final Project for WEB-DEV (CS463)
------------- Anything below the line are instructions from the assignment ------------
Assignment contents: 
    - Navbar
        - About Section
        - Previous Work Section
        - Projects Section
        - Contact Form
Requirements: 
    - CSS & JS
    - Something brand new: a image carousel or accordian 
Other: 
    - Public repo 
    - Deploy instructions: 
        - Settings -> Pages -> Source -> Select correct Main branch
    - 10-12 Minute video about the work process:
        - Wise to keep a written log of what was worked on which day 


Log: 
- Session 1: 
    - Briefly went over project requirements
    - Created files that were initially deemed necessary:
        - Portfolio in HTML
        - CSS 
        - Javascript file
- Session 2: 
    - Began planning how I want the project to look like
    - ![Project Design](media/final_project_design.pdf)
    - Explaination:
        - Contains a navbar on the top of the page
        - Each navbar option will lead into a new page: this is
            one of the new things that will be implemented
            - Navbar styles will be handled in css
        - The about me section will have a photo carousel: this is 
            another new thing that will be implemented
                - I have not decided if there will be 1, 2, or 3
                    separate carousels, depending on how I want to 
                    take up the space of the webpage... Maybe under
                    larger window sizes, it may contain more than 1; 
                    with smaller window pages, it contains 1
                - Unsure of which language handles carousel
        - Following the carousel, will contain a short bio about me,
            which can be handled in html or js
        - Under Previous Works: 
            - It will either include cards of each job that I have 
                worked in the past, title and bio of each; or, it 
                will be either be a preview or import of my resume
                    - Preview of resume would be a new implementation 
            - Both of which will contain a link that either redirects
                to my linkedIn or to download my resume
        - Under Projects:
            - Contains cards of each project; each with a title, bio,
                and a link/preview to the repository
        - Contact Form:
            - An ordinary contact form
            - Event will be watching the submission of the form (js)
    - This current iteration of the design contains a number of new
        items to potentially implement:
        - Image carousel
        - Download link (resume)
        - Redirect link (LinkedIn)
        - Link preview / Resume preview / Link to repo
        - Navbar to new page
    - The largest in priority will be the Navbar to new pages, and
        the image carosel. Otherwise, all other implementations can
        be shorthanded with just a link to redirect to either a 
        repository, different website, or imported media documents 
    - This ensures that with the current time, it witholds the quality
        of the project; with any time left over, other implementations
        can be addressed to improve the product
- Session 3: 
    - Tackling the Navbar
    - Upon further research, creating different html files instead of 
        creating sections within a single html file will be able 
        emulate accessing different pages 
    - Will have to rename/make the following files:
        - Home
        - About
        - Previous Work
        - Projects
        - Contact Form
    - Another thing that was adjusted - instead of #section_name
        in the href, the anchor reference has to be the file_name.html
    - Html sections have been deleted; new files are linked and tested
    - Now that I can enter the separate webpage, button to return to 
        home or other sections will be put in place
    - A navbar has been implemented into each file; edits to web_port
        file will act as reference to the styles of the navbar; once 
        those edits have been finished, the updated html and css will 
        be placed after that finalized revision
- Session 4:
    - Tackling the image carousel:
    - Further research of the carousel, and it is managed by a carousel
        class in bootstrap.
    - All desired photos were selected, and carousel works
    - Styles of each image will be dealt with later on
- Session 5:
    - Previous Work:
        - Link to LinkedIN: Works
        - Download Resume Link: Works?
        - A preview of my resume
            - Preview must be fixed / adjusted
- Session 6: 
    - Projects:
        - Each project will be place within a card
        - Each card contains a title, description of project, and a link to said project
        - I want to create visual aspect to it, but unsure what to make visual
    - Links have been implemented: will continue to styling at a
        later point
- Session 7: 
    - Styling of page:
        - Webpage color
        - Image Carousel container (B/W)
        - Bio container
        - Navbar styling
    - Asked chatgpt about color paletes: 
        - Decided on white, black, grey, offwhite to use
        - Heavily gravitated towards offwhite
        - Wasn't satisfied with a palete that included offwhite
            - Seemed that there was too much contrast/conflicting 
                colors
            - Ended up with charcoal nav, grey backround, 
                charcoal elements w/ white text
    - Styling for Previous Work is completed - will be the new 
        standard for all of the pages
- Session 8: 
    - Got all of the other pages on the same standard
    - Relearned flexbox 
    - Emphasize the commenting on the css
- Session 9: 
    - Left to do:
        [] Contact Form:
            - With working js
        [] Decide on what to do for home page (shorter bio?)
        [] Replace embed resume with pdf (in order to fix accessibility)
            - In terms of functionality, I do like the idea of embedding,
                considering it goes against accessibility, I'll
                have to potentially reconsider
        [] Have all projects fit in accordance to page:
            - Shrinking page = more rows over more columns 
        [] Shrinking page allows buttons to still work 
        [] Push all navbar text to the right side of page
        [] Develop a script for video
        [] Rewrite jounal on pdf
        [] Rewrite readMe as instruction manual
        [] Get rid of all potential errors / contrast issues
        [] Imbed the html file contents as a "preview" for prevoius projects 