AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Game Development Intern",
    cardImage: "assets/images/experience-page/SIV_Logo_White-1.png",
    place: "Tunisia",
    time: "(July, 2024 - September ,2024)",
    desp: "<li>Worked on a re creation of an exsiting game but with a new concept.</li> <li>Reskinned a house builder asset to make it a booth creator.</li> <li>Made trailers for the 2 projects I made.</li>",
  },
  {
    title: "Unity developer freelance",
    cardImage: "assets/images/experience-page/Clinick.png",
    place: "Tunisia",
    time: "",
    desp: "<li>Implemented the map in both the GameIn and Pause Menu.</li> <li>Updated the systems for Nurse/Patient and Intern/Senior conversations.</li> <li>Developed and integrated feedback mechanisms and player performance evaluation systems.</li> <li>Fully integrated the updated 3D environment into the game.</li><li> Added the 3D cinematic to play before the game launch. <li>Optimized the game’s performance and ensured its stability.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

/*const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];*/

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {




    
    title: "Global Game Jam 2022",
    subtitle: "Online",
    image: "assets/images/experience-page/GGJ.jpg",
    desp: "The theme was ''Duality'', We created a puzzle game with two characters, an angel and a devil, who had to help each other solve challenges. The duality theme perfectly fit the cooperative gameplay.",
    href: "https://globalgamejam.org/",
  },
  {
    title: "Global Game Jam 2023",
    subtitle: "Borj cedria",
    image: "assets/images/experience-page/GGJ.jpg",
    desp: "In 2023, the theme ''Roots'' , we made a puzzle game revolved around exploring the roots of humanity, with a focus on discovery and growth. The theme ''Roots'' gave us a deep, meaningful foundation to build on.",
    href: "https://globalgamejam.org/",
  },
  {
    title: "Global Game Jam 2024",
    subtitle: "Sousse",
    image: "assets/images/experience-page/GGJ.jpg",
    desp: "A narrative-guided game with fun twists, our 2024 entry embraced the theme ''Make me laugh''. The lighthearted humor made for a delightful gaming experience.",
    href: "https://globalgamejam.org/",
  },
  {
    title: "L'ami tji meta",
    subtitle: "Manouba",
    image: "assets/images/experience-page/AMI.png",
    desp: "we developed a VR simulation tailored for an insurance company. The goal was to help them assist clients by creating immersive, real-life scenarios to simulate various situations and responses.",
    href: "https://www.facebook.com/events/3533242290238822",
  },
  {
    title: "Log Game Jam 2023",
    subtitle: "Manouba",
    image: "assets/images/experience-page/Log.png",
    desp: "the theme was ''Destruction,'' and I designed a puzzle game focused on breaking the right objects. The goal was to strategically destroy specific items to advance to the next level.",
    href: "",
  },
  {
    title: "Brackeys Game Jam 2024",
    subtitle: "Online",
    image: "assets/images/experience-page/Brackeys.png",
    desp: "Still In Progress .......",
    href: "https://itch.io/jam/brackeys-12",
  },
  






];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
