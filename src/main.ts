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
const math = new Mathematics();
const physics = new Physics();
const chemistry = new Chemistry();
const biology = new Biology();
const history = new History();
const geography = new Geography();
const civics = new Civics();
const english = new English();
const literature = new Literature();

const student = new Student("Nguyen Nhat Phap", "1234567890");

student.addSubject(math);
student.addSubject(physics);
student.addSubject(chemistry);
student.addSubject(biology);
student.addSubject(english);
student.addSubject(literature);

const subjectMarks = [
  new SubjectMark(math, 8),
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

console.log(student.getAverageMark());
