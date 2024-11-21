// let btnColor = `
//     <div class="black on" onclick="black();"></div>
//             <div class="gradient on" onclick="gradient();"></div>
//             <div class="white on" onclick="white();"></div>

// `;
// document.getElementById('color').innerHTML = btnColor;

let mainList = `
 <div class="list">
                <div class="option"></div>
                <div class="option ch"></div>
                <div class="option"></div>
                <ul class="ul-small">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#all-skills">Skills</a></li>
                    <li><a href="#language">Languages</a></li>
                    <li><a href="#all-projects">Projects</a></li>
                </ul>
            </div>
`;
document.getElementById('main-lest').innerHTML = mainList;

let links = `
    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#all-skills">Skills</a></li>
                    <li><a href="#language">Languages</a></li>
                    <li><a href="#all-projects">Projects</a></li>
`;
document.getElementById('ul-large').innerHTML = links;
