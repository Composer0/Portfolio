const ProjectObjects = [
    {
        key: 1,
        image: require("../../assets/img/SixDegrees.png"),
        title: "Six Degrees",
        alt: "Six Degrees",
        sLink: "https://sixdegrees.up.railway.app/",
        gLink: "https://github.com/Composer0/SixDegreesApplication",
        yLink: "https://www.youtube.com/watch?v=RWvUNi9Q8bE",
        tech: "C# | ASP.NET | Bootstrap | PostgreSQL | Railway",
        info: "Contact Management Application that was built following the Model-View-Controller design method for software development. It allows user to register and login. Accounts are secured within the PostgreSQL database with hash mapped passwords and users have the option of setting up 2-factor authentication. Allows users to create, read, update, and delete contacts, categories, and personal accounts. Users can filter and sort contacts based on name and categories. Additionally, users can email contacts individually or in category groups."
    },
    {
        key: 2,
        image: require("../../assets/img/creators-blog.webp"),
        title: "Creators' Blog",
        alt: "Creators' Blog",
        sLink: "https://creators-blog.netlify.app/",
        gLink: "https://github.com/Composer0/BlogFullstack",
        yLink: "https://www.youtube.com/watch?v=RB1Lh7rKlfg",
        tech: "React | Node.js | Express.js | MongoDB | Multer | bCrypt | Context API | Railway",
        info: "Blog application that allows users to register and login to a profile, filter through categories, upload pictures with multer package for blog posts and user profiles, and read, create, update, and delete blog posts and user profile. Data is stored inside of a Mongo database on Railway and features bcrypt security to create hash maps for passwords. The site uses React Context API and incorporates local storage to manage user information for the purpose of updating/deleting user information and providing permissions to create, edit, and delete posts."
    },
    {
        key: 3,
        image: require("../../assets/img/beatmachine.webp"),
        title: "Beat Maker",
        alt: "Beat Maker",
        sLink: "https://www.orionpalmer.com/projects/BeatmakerProject/index.html",
        gLink: "https://github.com/Composer0/Music-Maker",
        yLink: "https://www.youtube.com/watch?v=zG6wQomYu9E",
        tech: "HTML | CSS | JavaScript",
        info: "Two part application that features a rhythm maker and piano. The live version of this application uses object-oriented programming for the Beatmaker by establishing a class with multiple methods that follow if/else and switch functions. These methods are interacted with via outside event listeners. Both the Beatmaker and the Piano interact with HTML data-types and audio tags in order create sound effects within the application. Repository version of the app allows recorded piano data to be stored in a local Mongo Database to be viewed upon save within the console."
    },
]

export default ProjectObjects;