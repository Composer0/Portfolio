const ProjectObjects = [
  {
    key: 1,
    image: require("../../assets/img/SixDegrees.png"),
    title: "Six Degrees",
    alt: "Six Degrees",
    sLink: "https://sixdegrees.up.railway.app/",
    gLink: "https://github.com/Composer0/SixDegreesApplication",
    yLink: "https://www.youtube.com/watch?v=RWvUNi9Q8bE",
    tech: [2, 7, 1, 14, 15, 10, 18, 31, 35, 34],
    info: "Contact Management Application that was built following the Model-View-Controller design method for software development. It allows user to register and login. Accounts are secured within the PostgreSQL database with hash mapped passwords and users have the option of setting up 2-factor authentication. Allows users to create, read, update, and delete contacts, categories, and personal accounts. Users can filter and sort contacts based on name and categories. Additionally, users can email contacts individually or in category groups.",
  },
  {
    key: 2,
    image: require("../../assets/img/yeschef.webp"),
    title: "YES CHEF!",
    alt: "YES CHEF",
    sLink: "https://yes-chef.up.railway.app/",
    gLink: "https://github.com/Composer0/YES-CHEF",
    yLink: "https://www.youtube.com/watch?v=Tbu9WKB-O5A",
    tech: [2, 7, 32, 1, 33, 14, 15, 10, 31, 35, 34],
    info: "Written in C# using Blazor Web Assembly, YES CHEF! leverages OpenAI's GPT-3.5 Turbo AI model, which was specifically chosen for its ability to facilitate efficient data transfer via JSON to OpenAI through Function Calling. Users specify mealtime and ingredients, initiating a conversation with the AI. The application seamlessly generates five personalized recipe ideas, complete with images, ingredients, instructions, and summaries. JavaScript was incorporated to allow users to print out their unique recipes with the click of a button. The application was deployed on Railway and used Docker to ensure that .NET7 compatibility could be achieved.",
  },
  {
    key: 3,
    image: require("../../assets/img/WebP-Generator.webp"),
    title: "WebP Generator",
    alt: "WebP Generator",
    sLink: "https://webp-generator.netlify.app/",
    gLink: "https://github.com/Composer0/Webp-Generator",
    yLink: "https://youtu.be/sNd8acAdBEk",
    tech: [1, 11, 14, 21],
    info: "This is a web application that allows users to upload images, convert them to WebP format, and download the converted images. WebP is a modern image format that provides better compression and smaller file sizes compared to traditional image formats like JPEG and PNG. The application uses HTML, CSS, and JavaScript to handle image conversion and downloads. It leverages the regenerator-runtime library as a polyfill to provide support for async/await in environments where native support for generators is not available, ensuring broader compatibility for the application.",
  },
  {
    key: 4,
    image: require("../../assets/img/creators-blog.webp"),
    title: "Creators' Blog",
    alt: "Creators' Blog",
    sLink: "https://creators-blog.netlify.app/",
    gLink: "https://github.com/Composer0/BlogFullstack",
    yLink: "https://www.youtube.com/watch?v=RB1Lh7rKlfg",
    tech: [5, 1, 16, 13, 17, 15, 20, 22, 31],
    info: "Blog application that allows users to register and login to a profile, filter through categories, upload pictures with multer package for blog posts and user profiles, and read, create, update, and delete blog posts and user profile. Data is stored inside of a Mongo database on Railway and features bcrypt security to create hash maps for passwords. The site uses React Context API and incorporates local storage to manage user information for the purpose of updating/deleting user information and providing permissions to create, edit, and delete posts.",
  },
  // {
  //   key: 5,
  //   image: require("../../assets/img/beatmachine.webp"),
  //   title: "Beat Maker",
  //   alt: "Beat Maker",
  //   sLink: "https://www.orionpalmer.com/projects/BeatmakerProject/index.html",
  //   gLink: "https://github.com/Composer0/Music-Maker",
  //   yLink: "https://www.youtube.com/watch?v=zG6wQomYu9E",
  //   tech: [1, 14, 15],
  //   info: "Two part application that features a rhythm maker and piano. The live version of this application uses object-oriented programming for the Beatmaker by establishing a class with multiple methods that follow if/else and switch functions. These methods are interacted with via outside event listeners. Both the Beatmaker and the Piano interact with HTML data-types and audio tags in order create sound effects within the application. Repository version of the app allows recorded piano data to be stored in a local Mongo Database to be viewed upon save within the console.",
  // },
];

export default ProjectObjects;
