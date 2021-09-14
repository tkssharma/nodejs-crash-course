var bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3001
let courses = [
  {
    name: "CS",
    subjects: "CS",
    patmentFee: 900,
    courseId: 1,
    students: [1, 100]
  },
  {
    name: "IT",
    subjects: "IT",
    patmentFee: 900,
    courseId: 2,
    students: [2]
  },
]


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//get course 

app.get('/courses', (request, response) => {
  response.status(200).json(courses)
})

//get course based on id
app.get('/courses/:coursesId', (request, response) => {
  const courseId = request.params.courseId;
  response.status(200).json(courses.filter(i => i.courseId === courseId))
})

//create new course
app.post('/courses', (request, response) => {
  const payload = request.body;
  courses.push(payload);
  response.status(200).json(courses)
})

app.put('/courses/:courseId', (request, response) => {
  const courseId = request.params.courseId;
  console.log(request.body);
  const newCourses = courses.map((courses) => {
    if (courses.courseId === Number(courseId)) {
      courses.name = request.body.name;
      courses.subjects = request.body.subjects;
    }
    return courses;
  })
  courses = newCourses
  response.status(200).json(courses);
})


//delete course
app.delete('/courses/:courseId', (request, response) => {
  const courseId = request.params.courseId;
  const newCopy = courses.filter(i => i.courseId === courseId)

  response.status(200).json(newCopy)
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
