module.exports = {
    getAll
};


const skills = [
    {skill: "JavaScript", level: 5},
    {skill: "HTML", level: 5},
    {skill: "CSS3", level: 5},
    {skill: "Making words appear", level 1},
    {skill: "Making words disappear", level 2},
    {skill: "Microsoft Office Power Point", level: "Ranger Tab"},
];


function getAll() {
    return skills;
}

function getOne(index) {
    return skills[index];
};

function create(skill){
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};