import { Biology } from "./Biology";
import Chemistry from "./Chemistry";
import { Civics } from "./Civics";
import { Geography } from "./Geography";
import Mathematics from "./Mathematics";
import Physics from "./Physics";
import Student from "./Student";
import History from "./History";
import { English } from "./English";
import Literature from "./Literature";
import SubjectMark from "./SubjectMark";
import ForeignLanguage from "./ForeignLanguage";
const math = new Mathematics(2);
const physics = new Physics(2);
const chemistry = new Chemistry(1);
const biology = new Biology(1);
const history = new History(1);
const geography = new Geography(1);
const civics = new Civics(1);
const english = new English(2);
const literature = new Literature(1);

const student = new Student("Nguyen Nhat Phap", "1234567890");

const subjectMarks = [
  new SubjectMark(math, 10),
  new SubjectMark(physics, 9),
  new SubjectMark(chemistry, 7),
  new SubjectMark(biology, 8),
  new SubjectMark(english, 8),
  new SubjectMark(literature, 8.5),
];

student.setSubjectMarks(new Set(subjectMarks));

const subjectMark = student.getSubjectMarks();

subjectMark.forEach((mark) => {
  if (mark.getSubject() instanceof ForeignLanguage) {
    console.log(
      mark.getSubject().getName(),
      mark.getMark(),
      (mark.getSubject() as ForeignLanguage).getForeignCode()
    );
  } else {
    console.log(mark.getSubject().getName(), mark.getMark());
  }
});

console.log(student.getAverageMark(), "average mark");
