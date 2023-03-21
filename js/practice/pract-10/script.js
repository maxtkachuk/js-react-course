'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        let str = '';
        const {languages} = obj.skills;
        
        str = `I am ${obj.age} and i speak such languages as:`;

        languages.forEach(function(lang){
            str += ` ${lang.toUpperCase()}`;
        });

        console.log(str);
    }
};

function showExperience(obj){
    const {exp} = obj.skills;
    console.log(exp); 
}

function showProgrammingLangs(obj){
    let str = '';
    const {programmingLangs} = obj.skills;

    for(let key in programmingLangs){
        str = `${key} language ${programmingLangs[key]}% learned; `;
        console.log(str);
    }
}

showExperience(personalPlanPeter);
showProgrammingLangs(personalPlanPeter);
personalPlanPeter.showAgeAndLangs(personalPlanPeter);