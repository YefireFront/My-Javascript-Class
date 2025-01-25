/**
 *% How you can find unique values in an array?
 */
//*1
const roadmaps = ["JavaScript", "React", "Node.js", "Node.js", "JavaScript", 'java', 'java'];
const uniqueRoadmaps = [...new Set(roadmaps)];
console.log(uniqueRoadmaps);

//*2
const uniqueRoadmaps2 = roadmaps.filter((roadmap, index) => roadmaps.indexOf(roadmap) === index
);

console.log(uniqueRoadmaps2);

//*3
const uniqueRoadmaps3 = roadmaps.reduce((unique, roadmap) => {
  return unique.includes(roadmap) ? unique : [...unique, roadmap];
}, []);
console.log(uniqueRoadmaps3);

//*4

const uniqueRoadmaps4 = [];
roadmaps.forEach((roadmap) => {
  if (!uniqueRoadmaps4.includes(roadmap)) {
    uniqueRoadmaps4.push(roadmap);
  }
});
console.log(uniqueRoadmaps4);

//*5

const uniqueRoadmap5s = [];
for (const roadmap of roadmaps) {
  if (!uniqueRoadmap5s.includes(roadmap)) {
    uniqueRoadmap5s.push(roadmap);
  }
}
console.log(uniqueRoadmap5s);
console.log(uniqueRoadmap5s);
