Employee = [
  {
    id: 1,
    UserName: "Hassan",
    Password: "Hassan",
    LoginType: "Hire-APP",
    Prefix: "Mr", // FIND API FOR FRONTEND
    FirstName: "Hassan",
    LastName: "Mohammed",
    Pic: "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg",
    Education: [
      {
        School: "Regis University", // FIND API FOR FRONTEND
        Major: "Computer Engineering", // FIND API FOR FRONTEND
        Country: "USA", // FIND API FOR FRONTEND
        Start: 2022,
        End: 2023,
      },
      {
        School: "Coded",
        Major: "FullStack Bootcamp",
        Country: "Kuwait",
        Start: 2022,
        End: 2023,
      },
    ],
    Experience: [
      {
        Company: "CODED", // FIND API FOR FRONTEND
        Title: "Fullstack Junior Developer", // FIND API FOR FRONTEND
        Start: 2020,
        End: 2022,
        About:
          "Responsible for growing company revenue by effectively managing existing customer accounts and convincing new customers to purchase company services. Leading a team of Account Executives, developing effective marketing proposals, and solicit customer feedback.",
      },
      {
        Company: "NASA",
        Title: "Junior Space Engineer",
        Start: 2022,
        end: 2025,
        About:
          "Responsible for growing company revenue by effectively managing existing customer accounts and convincing new customers to purchase company services. Leading a team of Account Executives, developing effective marketing proposals, and solicit customer feedback.",
      },
    ],
    Skils: ["drawing", "coding", "space readings"], // FIND API FOR FRONTEND
    Chats: [
      {
        CompanyID: 1,
        EmployeeID: 1,
        messages: [
          { owner: false, message: "Hello" },
          { owner: true, message: "Hello" },
        ],
      },
    ],
    Status: "Not Available",
    Search: ["Fullstack Junior Developer", "Junior Cyber Security Engineer"], // FIND API FOR FRONTEND
    Email: "Hassan@gmail.com",
    Phone: "99999999", // FIND API FOR FRONTEND **
    Languages: ["English", "Arabic", "Spanish"], // FIND API FOR FRONTEND
    Gender: "Male",
  },
  {
    id: 2,
    UserName: "Majd",
    Password: "Khodari",
    LoginType: "Hire-APP",
    Prefix: "Mr", // FIND API FOR FRONTEND
    FirstName: "Majd",
    LastName: "Khodari",
    Pic: "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg",
    Majors: [
      {
        School: "Coded", // FIND API FOR FRONTEND
        Major: "FullStack Bootcamp", // FIND API FOR FRONTEND
        Country: "Kuwait", // FIND API FOR FRONTEND
        Start: 2022,
        End: 2023,
      },
      {
        School: "Regis University",
        Major: "DBA Business Administration",
        Country: "USA",
        Start: 2019,
        End: 2021,
      },
    ],
    Experience: [
      {
        Company: "CODED", // FIND API FOR FRONTEND
        Title: "Fullstack Senior Developer", // FIND API FOR FRONTEND
        Start: 2022,
        end: 2024,
        About:
          "Responsible for growing company revenue by effectively managing existing customer accounts and convincing new customers to purchase company services. Leading a team of Account Executives, developing effective marketing proposals, and solicit customer feedback.",
      },
      {
        Company: "NASA",
        Title: "Junior rocket Engineer",
        Start: 2020,
        end: 2021,
        About:
          "Responsible for growing company revenue by effectively managing existing customer accounts and convincing new customers to purchase company services. Leading a team of Account Executives, developing effective marketing proposals, and solicit customer feedback.",
      },
    ],
    Skils: ["drawing", "coding", "building rockets"], // FIND API FOR FRONTEND
    Chats: [
      {
        CompanyID: 1,
        EmployeeID: 2,
        messages: [
          { owner: true, message: "Hello" },
          { owner: false, message: "Hi" },
        ],
      },
    ],
    Status: "Available",
    Search: ["Junior Businessman", "Junior Cyber Security Engineer"], // FIND API FOR FRONTEND
    Email: "Majd@gmail.com",
    Phone: "99999900", // FIND API FOR FRONTEND
    Languages: ["English", "Arabic", "French"], // FIND API FOR FRONTEND
    Gender: "Male",
  },
  {
    id: 3,
    UserName: "Saad",
    Password: "Saad",
    LoginType: "Hire-APP",
    Prefix: "Mr", // FIND API FOR FRONTEND
    FirstName: "Saad",
    LastName: "AlKandiri",
    Pic: "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg",
    Majors: [
      {
        School: "Regis University",
        Major: "Computer Science",
        Country: "USA",
        Start: 2015,
        End: 2019,
      },
      {
        School: "Regis University",
        Major: "DBA Business Administration",
        Country: "USA",
        Start: 2019,
        End: 2021,
      },
      {
        School: "Coded", // FIND API FOR FRONTEND
        Major: "FullStack Bootcamp", // FIND API FOR FRONTEND
        Country: "Kuwait", // FIND API FOR FRONTEND
        Start: 2022,
        End: 2023,
      },
    ],
    Experience: [
      {
        Company: "CODED", // FIND API FOR FRONTEND
        Title: "Fullstack Senior Developer", // FIND API FOR FRONTEND
        Start: 2023,
        end: 2025,
        About:
          "Responsible for growing company revenue by effectively managing existing customer accounts and convincing new customers to purchase company services. Leading a team of Account Executives, developing effective marketing proposals, and solicit customer feedback.",
      },
      {
        Company: "APPLE",
        Title: "Junior UI/UX Designer",
        Start: 2021,
        end: 2022,
        About:
          "Responsible for growing company revenue by effectively managing existing customer accounts and convincing new customers to purchase company services. Leading a team of Account Executives, developing effective marketing proposals, and solicit customer feedback.",
      },
    ],
    Skils: ["drawing", "coding"], // FIND API FOR FRONTEND
    Chats: [
      {
        CompanyID: 2,
        EmployeeID: 3,
        messages: [
          {
            owner: false,
            message:
              "Hi, I want to Do an Interview With You, So we can Hire You.",
          },
          { owner: true, message: "Good Morning" },
          {
            owner: true,
            message: "Sure when would you like to do the interview?",
          },
        ],
      },
    ],
    Status: "Available",
    Search: ["Fullstack Senior Developer", "Dev-OP Engineer"], // FIND API FOR FRONTEND
    Email: "Saad@gmail.com",
    Phone: "99990000", // FIND API FOR FRONTEND
    Languages: ["English", "Italian", "Latin"], // FIND API FOR FRONTEND
    Gender: "Male",
  },
];
