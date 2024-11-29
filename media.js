
let projImgs = document.querySelectorAll('.proj-img');

let projectImgs = ["https://ik.imagekit.io/abduledits5/pfolioMe/finnote_thumb.png?updatedAt=1732878676698","https://ik.imagekit.io/abduledits5/pfolioMe/ascend_thumb.png?updatedAt=1716746945751","https://ik.imagekit.io/abduledits5/pfolioMe/mathtrove_thumb.png?updatedAt=1716738142375","https://ik.imagekit.io/abduledits5/pfolioMe/supercook_thumb.png?updatedAt=1716735538741", "https://ik.imagekit.io/abduledits5/pfolioMe/andr15_thumb.png?updatedAt=1716735500016", "https://ik.imagekit.io/abduledits5/pfolioMe/framer_thumb.png?updatedAt=1716736659216", "https://ik.imagekit.io/abduledits5/pfolioMe/penpot_thumb.png?updatedAt=1716735465871", "https://ik.imagekit.io/abduledits5/pfolioMe/am_thumb.png?updatedAt=1716736181494", "https://ik.imagekit.io/abduledits5/pfolioMe/adesar_thumb.png?updatedAt=1716736241152","https://ik.imagekit.io/abduledits5/pfolioMe/win12_thumb.png?updatedAt=1716737774479", "https://ik.imagekit.io/abduledits5/pfolioMe/melodica_thumb.png?updatedAt=1716722854399"]
let projColors = ["#0052CC","#2a2ea7","#111111","#2f4b21", "#006465", "#003f65","#005d4a","#161c30","#39352d","#010a18","#0e2351"];
for (let i = 0; i < projectImgs.length; i++) {
    projImgs[i].style.backgroundImage = `url(${projectImgs[i]})`;
    projImgs[i].parentElement.style.backgroundColor = projColors[i];
}