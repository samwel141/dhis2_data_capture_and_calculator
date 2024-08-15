const students = [
    {
      studentName: "John Doe",
      studentId: "393494",
      courseResults: {
        courseWork: [
          { subject: "Pascal", score: 34 },
          { subject: "C Programming", score: 24 }
        ],
        ue: [
          { subject: "Pascal", score: 56 },
          { subject: "C Programming", score: 40 }
        ]
      }
    },
    {
      studentName: "Jane Robert",
      studentId: "439493",
      courseResults: {
        courseWork: [
          { subject: "Pascal", score: 28 },
          { subject: "C Programming", score: 24 }
        ],
        ue: [
          { subject: "Pascal", score: 56 },
          { subject: "C Programming", score: 50 }
        ]
      }
    }
  ];
  
  const result = students.map(student => {
    const totalScore = [...student.courseResults.courseWork, ...student.courseResults.ue]
      .reduce((acc, curr) => acc + curr.score, 0);
    return {
      studentName: student.studentName,
      totalScore: totalScore
    };
  });
  
  console.log(result);  // Outputs: [{"studentName":"John Doe","totalScore":154},{"studentName":"Jane Robert","totalScore":158}]
  