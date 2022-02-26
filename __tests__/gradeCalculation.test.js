const { averageExams, isStudentPassExam } = require("../gradeCalculation");

describe('grade calculation', () => {
       test('should return exact average', () => {
              const values = [100, 80, 90, 90];
              expect(averageExams(values)).toEqual(90);
       });

       test('should throw error when values is not number', () => {
              const values = [100, 80, 90, "90"];
              expect(() => averageExams(values)).toThrow();
       });

       test('it should return exam passed status', () => {
              const listValueOfExams = [80, 100, 100, 80];
              expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
       })


       test('it should return exam failed status', () => {
              const listValueOfExams = [50, 40, 70, 80];
              expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
       })
});