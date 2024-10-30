window.onload = myfun();
function myfun() {
    // Add the 'active' class when the page is loaded
    document.querySelector('.slider-content').classList.add('active');
};
 window.onload = myfun2();
 function myfun2() {
    const content = document.querySelector('.photo-container');
    setTimeout(() => {
       content.style.right = '0';  // Moves the content to its original position
       content.style.opacity = '1';  // Fade in effect
    }, 10);  // Optional delay before starting the animation
 };
 
 window.onload = myfun3();
 function myfun3() {
    const content = document.querySelector('.about-container');
    setTimeout(() => {
       content.style.left = '0';  // Moves the content to its original position
       content.style.opacity = '1';  // Fade in effect
    }, 10);  // Optional delay before starting the animation
 };

 window.onload = myfun4();
 function myfun4() {
    const content = document.querySelector('#information-container-link3');
    setTimeout(() => {
       content.style.left = '0';  // Moves the content to its original position
       content.style.opacity = '1';  // Fade in effect
    }, 1500);  // Optional delay before starting the animation
 };
 window.onload = myfun5();
 function myfun5() {
    const content = document.querySelector('#information-container-link2');
    setTimeout(() => {
       content.style.left = '0';  // Moves the content to its original position
       content.style.opacity = '1';  // Fade in effect
    }, 1000);  // Optional delay before starting the animation
 };
 window.onload = myfun6();
 function myfun6() {
    const content = document.querySelector('#information-container-link1');
    setTimeout(() => {
       content.style.left = '0';  // Moves the content to its original position
       content.style.opacity = '1';  // Fade in effect
    }, 10);  // Optional delay before starting the animation
 };

function Resume(event)
{
   event.preventDefault();
   event.stopPropagation();
   document.querySelector(".section1-About").innerHTML=`
<section class="container-fluid Resume" id="Resume">

  <div class="container"><h1 class="resume-heading">RESUME </h1>
  <div class="row education-section gy-5">
      <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center"><h2 class="resume-sub-headings">EDUCATION</h2></div>
      <div class="col-lg-6 col-12">
        <div class="row btech">
          <div class="col-6 d-flex justify-content-center align-items-center pro">2021-2025</div>
          <div class="col-6"><h3 class="pro">BTECH</h3> B.Tech in Information Technology from <br>United College of Engineering and Research</div>
        </div>
        <hr>
        <div class="row 12th">
          <div class="col-6 d-flex justify-content-center align-items-center pro">2019-2020</div>
          <div class="col-6"><h3 class="pro">XII</h3>2020SeniorSecondary (XII) from Ewing Christian<br> Public School, Allahabad, CBSE Board with 85.4% marks.</div>
        </div>
        <hr>
        <div class="row 10th">
          <div class="col-6 d-flex justify-content-center align-items-center pro">2017-2018</div>
          <div class="col-6"><h3 class="pro">X</h3> 2018Secondary(X) from Ewing Christian Public School,<br> Allahabad, CBSE Board with 77.6% marks.</div>
        </div>
      </div>
  </div>
  </div>
<hr>
  <div class="container skill-section">
  <div class="row skill-section">
    <div class="col-lg-3 col-12  d-flex justify-content-center align-items-center">
      <h2 class="resume-sub-headings">SKILLS</h2>
    </div>
    <div class="col-lg-9 col-12">
      <div class="row">
        <div class="col-lg-4 col-12 d-flex justify-content-center align-items-center">
          <h3 class="tech-skills">Technical Skills</h3>
        </div>
      
        <div class="col-lg-8 col-12 ">
          <div class="row mb-3">
            <div class="col-6 pro">Programming Language :</div>
            <div class="col-6 Language"> Java , JavaScript</div>
          </div>
          <div class="row  mb-3">
            <div class="col-6 pro">Database :</div>
            <div class="col-6 Language">MySQL</div>
          </div>
          <div class="row mb-3">
            <div class="col-6 pro">Web Technologies :</div>
            <div class="col-6 Language">HTML , CSS , JavaScript</div>
          </div>
          <div class="row mb-3">
            <div class="col-6  pro">Tools :</div>
            <div class="col-6 Language">PopSQL , Visual Studio Code</div>
          </div>
          <div class="row mb-3">
            <div class="col-6  pro">Library :</div>
            <div class="col-6 Language">Bootstrap</div>
          </div>
        </div>
      </div>
  </div>  
 </div>
</section>`}

const link2=document.querySelectorAll(".resume-link");
Array.from(link2).forEach(link2 => link2.addEventListener("click" , Resume));



// For Project
  function project(event){
     event.preventDefault();
     event.stopPropagation();
     document.querySelector(".section1-About").innerHTML=`<section id="project-section">
<div class="row">
  <h1 class="mb-5 project-heading">PROJECT</h1>
</div>
<div class="container projectss gy-1">
  <!-- project1 -->
<div class="row gy-3">
<div class="col-12"><h2 class="container project text-decoration-underline ">TODO - LIST </h2></div>
<div class="col-12">
    <div class="row">
      <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center "><img src="media/todo.png" class="img-fluid project-image" alt=""></div>
      <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center">This is a basic to-do list application developed using HTML, CSS, and JavaScript. It provides a simple interface where users can input tasks, add them to the list, and mark them as completed. The list can be dynamically updated as tasks are added, removed, or marked as finished. While the current version is functional, it could be enhanced with features like task editing, priority setting, and perhaps even integration with a calendar or reminder system.</div>
    </div>
</div>
</div>
<!-- project 2 -->
<div class="row gy-3">

  <div class="col-12"><h2 class="container project text-decoration-underline ">CALCULATOR  </h2></div>
  <div class="col-12">
      <div class="row">
        <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center 
       "><img src="media/calculator.png" class="img-fluid project-image" alt=""></div>
        <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center">This is a basic calculator web application developed using HTML, CSS, and JavaScript. It provides a user-friendly interface with a digital display and buttons for numbers and arithmetic operations. Users can input numbers, select operators, and perform calculations. The calculator supports fundamental arithmetic operations like addition, subtraction, multiplication, and division.</div>
      </div>
  </div>
  </div>
  <!-- project 3 -->
  <div class="row gy-3">
    <div class="col-12"><h2 class="container project text-decoration-underline ">MUSIC-PLAYER  </h2></div>
    <div class="col-12">
        <div class="row">
          <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center  "><img src="media/music.png" class="img-fluid project-image" alt=""></div>
          <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center">This is a basic music player web application built using HTML, CSS, and JavaScript. It allows users to play a limited range of songs. The player features a user-friendly interface with controls for play, pause, and volume adjustment. Users can select songs from a list and play them sequentially.</div>
        </div>
    </div>
    </div>
</section>
` }
const link=document.querySelectorAll(".Project-link");
Array.from(link).forEach(link=>link.addEventListener("click" , project));


function About(event)
{
event.preventDefault();
event.stopPropagation();
document.querySelector(".section1-About").innerHTML=`<div class="row-container  row gy-5">
<div class="col-container col-lg-6 col-12 cols">
    <img src="media/portfolio-photo.jpg" alt="" class="photo-container img-fluid portfoli-photo">
</div>
<div class="col-lg-6 cols">
  <h1 class="about-heading">HELLO...</h1>
  <p class="about-container">A Bit About Me<br>
    I'm Akriti, a dedicated web developer skilled in HTML, CSS, JavaScript, Bootstrap, MySQL, and Data Structures and Algorithms (DSA). I have a passion for creating efficient, responsive web applications and a strong foundation in problem-solving techniques. My goal is to build innovative solutions that enhance user experience.    
    </p>
    <div class="row information-container">
       <nav class="nav information-container-list">
        <div id="information-container-link1" class="col-12 information-links mt-5"><a class="nav-link links resume-link active" aria-current="page" href="#">,Resume</a></div> 
        <div id="information-container-link2" class="col-12 information-links mt-5"><a class="nav-link links Project-link" href="#">Project</a></div>
        <div id="information-container-link3" class="col-12 information-links mt-5"><a class="nav-link links" href="#">Contact</a></div>
      </nav>
  </div>
    </div>
</div>`

}
const link3=document.querySelectorAll(".about");
Array.from(link3).forEach(link3=>link3.addEventListener("click" , About));


function Contact(event)
{
  event.preventDefault();
  event.stopPropagation();
  document.querySelector(".section1-About").innerHTML=`<section class="Contact">
<div class="container">
  <div class="row">
    <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center">
      <div class="container">
      <h1 class="contact-heading1">Get In</h1>
      <h3 class="contact-heading2">Touch <span class="container handshake"><i class="fa-regular fa-handshake"></i></span ></h3>
    </div>
  </div>



    <div class="col-lg-6 col-12 form-container">
      <div class="row gy-1">
        <div class="col-lg-6 col-12">
          <div class="input-group mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text text" id="addon-wrapping">First Name </span>
              <input type="text" class="form-control input-txt" placeholder="First Name" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="input-group mb-3">
              <div class="input-group flex-nowrap">
                <span class="input-group-text text" id="addon-wrapping">Last Name</span>
                <input type="text" class="form-control input-txt" placeholder="Last Name" aria-label="Username" aria-describedby="addon-wrapping">
              </div>
              </div>
            </div>
        </div>
      <div class="row gy-5">
        <div class="col-12 mb-3">
          <div class="input-group flex-nowrap">
            <span class="input-group-text text" id="addon-wrapping">Email</span>
            <input type="text" class="form-control input-txt" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping">
          </div>
        </div>
      </div>
      <div class="row gy-5">
        <div class="col-12 mb-3">
          <div class="input-group flex-nowrap">
            <span class="input-group-text text" id="addon-wrapping">Subject</span>
            <input type="text" class="form-control input-txt" placeholder="Subject" aria-label="Username" aria-describedby="addon-wrapping">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-3">
        <div class="form-floating">
          <textarea class="form-control input-txt" placeholder="Leave a message here" id="floatingTextarea2" style="height: 100px"></textarea>
          <label for="floatingTextarea2" class="text">Message </label>
        </div>        
      </div>
      </div>
    </div>
  </div>
`
}
const link4=document.querySelectorAll(".Contact-link");
Array.from(link4).forEach(link4 =>link4.addEventListener("click", Contact));


