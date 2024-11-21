function next() {
    document.getElementById('myphoto').src="images/alhamed-1.jpg";
};
function back() {
    document.getElementById('myphoto').src="images/alhamed-2.jpg";
};
let mySection = `
        <div class="wrapper edit-animation">
        <div class="static-txt">I'm a Your Name</div>
        <ul class="dynamic-txts">
            <li><span>Jop Name</span></li>
        </ul>
    </div>
            <div class="photo">
                <img src="images/alhamed-4.png"" alt="Sorry" id="myphoto">
                <div class="next-back">
                <button onclick="back();"">Back</button>
                    <button onclick="next();"">Next</button>
                </div>
            </div>
            <div class="btns">
                <div class="btn-one btn"><a href="#contact">Contact Us</a></div>
                <div class="btn-two btn"><a href="#about">About me</a></div>
            </div>
            <div class="cv">
                <a href="cv" download="Cv">CV</a>
            </div>
`;
document.getElementById('slider').innerHTML = mySection;


function nextTwo() {
    document.getElementById('photo-about').src="images/alhamed-1.jpg";
};
function backTwo() {
    document.getElementById('photo-about').src="images/alhamed-2.jpg";
};
let aboutMe = `
<div class="text">
                <h2>About Me</h2>
                <p>I am Your Name. I work as a website programmer. I prefer freelancing to earn time because I am still in the learning stage</p>
                <p>Front-End Developer Highly skilled in building user-friendly interfaces using modern web technologies such as HTML, CSS, and JavaScript. Successfully designed and implemented effective paid advertising campaigns, improving user experience and increasing customer engagement. Fast learner with a strong ability to analyze challenges and make independent decisions. Continuously staying updated with the latest tech advancements and applying them to enhance performance and efficiency.</p>                <a href="#">Let's work together</a>
            </div>
            <div class="pho">
                <img src="images/alhamed-4.png" alt="sorry" id="photo-about">
                <div class="next-back">
                <button onclick="backTwo();"">Back</button>
                    <button onclick="nextTwo();"">Next</button>
                </div>
            </div>
` ;
document.getElementById('about').innerHTML = aboutMe;