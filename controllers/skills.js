const Skill = require("../models/skill");

// This is our index controller for get requests to "./todos"
const index = (req, res) => {
    res.render('skills/index', {
      skills: Skill.getAll(),
    })
};

const show = (req, res) => {
  res.render('skills/show', {
    skill: skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false
  Skill.create(req.body)
  res.redirect("/skills")
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}




module.exports = {
    index,
    show,
    create,
    delete: deleteSkill
}