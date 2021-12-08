const peronal_block = document.querySelector('#PersonalB');
const ed_block = document.querySelector('#EducationB');
const cer_block = document.querySelector('#CerB');
const proj_block = document.querySelector('#ProjB');
const skill_block = document.querySelector('#SkillB');
const more_block = document.querySelector('#MoreB');

const peronalCB = document.querySelector('#PersonalBox');
peronalCB.addEventListener('change', function (e) {
    if (peronalCB.checked) {
        peronal_block.style.display = "none";
    }
    else {
        peronal_block.style.display = "intial";
    }
});
const edCB = document.querySelector('#EducationBox');
const cerCB = document.querySelector('#CertificationBox');
const projCB = document.querySelector('#ProjectBox');
const skillCB = document.querySelector('#SkillsBox');
const MoreCB = document.querySelector('#MoreBox');








