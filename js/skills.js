let range = `<div class="parent-range"><div class="child-range"></div></div>`;
let skills = [`
    <div class="skill">
    <span class="persent">90%
    <span class="bc-persent"></span>
    </span>
    ${range}
      <h3>HTML</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4fX7exNZgcbevxUjYop2_qq4uZgTlZ0rvA&s" alt="">
      </div>`,
  `
    <div class="skill"> 
    <span class="persent">90%
    <span class="bc-persent"></span>
    </span>
    ${range}
    <h3>CSS</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mBOiYwVH_eCcZ2LC81SFFvLJ9OkAYEL2_A&s" alt="">
    </div>`,
  `
    <div class="skill">
    <span class="persent">90%
    <span class="bc-persent"></span>
    </span>
    ${range}
    <h3>JS</h3>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh0cmaLPqUaZd6iuo7D_iaOeLYb1QUdjMiA&s" alt="">
     </div>`,
  `
    <div class="skill">
    <span class="persent">90%
    <span class="bc-persent"></span>
    </span>
    ${range}
     <h3>Tailwind</h3>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21TGxoBCsmYTnKa9vUr2pf1lvRUmipgA58A&s" />
       </div>`,
  `
      <div class="skill">
      <span class="persent">90%
      <span class="bc-persent"></span>
      </span>
      ${range}
      <h3>Botstrab</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rxzeMbJf9EUHnpt8QfQ342EVF_NXRO_B8g&s" alt="">
      </div>`,
  `
    <div class="skill">
    <span class="persent">90%
    <span class="bc-persent"></span>
    </span>
    ${range}
    <h3>TypeScript</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ621d8SDh-Rd6x6gq5nl05Kh03k1yY2P4BEA&s" width="50" alt="">
    </div>`,
  `
      <div class="skill">
      <span class="persent">90%
      <span class="bc-persent"></span>
      </span>
      ${range}
      <h3>UI/UX</h3>
      <img src="https://static.vecteezy.com/system/resources/previews/015/771/729/non_2x/ui-ux-designer-icon-design-free-vector.jpg" alt="">
      </div>`,
  `
    <div class="skill">
    <span class="persent">90%
    <span class="bc-persent"></span>
    </span>
    ${range}
    <h3>Wordpress</h3>
    <img src="https://www.iconninja.com/files/565/159/674/wordpress-icon.png" width="50" alt="">
    </div>`,
];
document.getElementById('all-skills').innerHTML = `<h2 class="haeding-skills">My Skills</h2><div class="child-all-skills">${skills.join("")}</div>`;