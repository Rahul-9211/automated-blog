const topics = [
    {
      id: 1,
      name: "Should I choose C# (.NET) over JS (ReactS, React Native)?",
      tags: ["React", "React Native", "C#", "Comparison", "Frontend", "Backend"],
      outline: {
        introduction: "Comparing C# and JavaScript for web and mobile development.",
        sections: [
          "Overview of C# and .NET",
          "Overview of JavaScript and its ecosystem",
          "Strengths of C#",
          "Strengths of React.js and React Native",
          "Use cases and industry demand",
          "Conclusion: Which one to choose?"
        ]
      }
    },
    {
      id: 2,
      name: "Is there a bright future for React JS and React Native?",
      tags: ["React", "React Native", "Future Trends", "Frontend"],
      outline: {
        introduction: "Evaluating the future potential of React.js and React Native.",
        sections: [
          "React.js: Current market trends",
          "React Native: Current market trends",
          "Adoption by major companies",
          "Future opportunities in web and mobile development",
          "Predictions for React.js and React Native",
          "Conclusion: Bright future or not?"
        ]
      }
    },
    {
      id: 3,
      name: "Is there any way to convert React Native project to React JS?",
      tags: ["React", "React Native", "Migration", "Frontend"],
      outline: {
        introduction: "Discussing the feasibility of converting React Native projects to React.js.",
        sections: [
          "Differences between React Native and React.js",
          "Common components used in both",
          "Approaches to migration",
          "Challenges and limitations",
          "Tools or libraries to assist",
          "Conclusion: Is it worth the effort?"
        ]
      }
    },
    {
      id: 4,
      name: "Can I learn React Native without JavaScript?",
      tags: ["React Native", "JavaScript", "Learning Path", "Frontend"],
      outline: {
        introduction: "Exploring if JavaScript knowledge is mandatory for React Native.",
        sections: [
          "Why JavaScript is essential for React Native",
          "React Native features requiring JavaScript",
          "Resources to learn JavaScript basics",
          "Alternative approaches to learning React Native",
          "Conclusion: Can you skip JavaScript?"
        ]
      }
    },
    {
      id: 5,
      name: "Can React Native be used for the web?",
      tags: ["React Native", "Web Development", "Frontend"],
      outline: {
        introduction: "Analyzing the use of React Native for web development.",
        sections: [
          "Overview of React Native for Web",
          "How React Native can adapt to web",
          "Pros and cons of using React Native for Web",
          "Use cases and examples",
          "Alternatives to React Native for Web",
          "Conclusion: Should you use it?"
        ]
      }
    },
    {
      id: 6,
      name: "How was your experience building apps with React Native?",
      tags: ["React Native", "Mobile Development", "Experience"],
      outline: {
        introduction: "Sharing personal experiences of building apps using React Native.",
        sections: [
          "Ease of use and development",
          "Challenges faced during development",
          "Performance considerations",
          "Developer tools and ecosystem",
          "Lessons learned",
          "Conclusion: Overall experience"
        ]
      }
    },
    {
      id: 7,
      name: "Can we use React Native for web application development?",
      tags: ["React Native", "Web Applications", "Frontend"],
      outline: {
        introduction: "Discussing the feasibility of using React Native for web apps.",
        sections: [
          "Overview of React Native and its flexibility",
          "React Native for Web: Key features",
          "Advantages and disadvantages",
          "Real-world use cases",
          "Conclusion: Is it viable?"
        ]
      }
    },
    {
      id: 8,
      name: "Which is better, React or React Native? Why?",
      tags: ["React", "React Native", "Comparison", "Frontend"],
      outline: {
        introduction: "A comparison between React and React Native to determine which is better for different use cases.",
        sections: [
          "Overview of React",
          "Overview of React Native",
          "Key differences between React and React Native",
          "Use cases for React",
          "Use cases for React Native",
          "Conclusion: Which one is better?"
        ]
      }
    },
    {
      id: 9,
      name: "What should I learn first, React JS or React Native?",
      tags: ["React", "React Native", "Learning Path", "Frontend"],
      outline: {
        introduction: "Understanding the learning paths for React and React Native.",
        sections: [
          "Overview of React JS",
          "Overview of React Native",
          "Prerequisites for learning React JS",
          "Prerequisites for learning React Native",
          "Benefits of learning React JS first",
          "Benefits of learning React Native first",
          "Conclusion: Recommended learning order"
        ]
      }
    },
    {
      id: 10,
      name: "Is ReactS same as React Native?",
      tags: ["React", "React Native", "Clarification", "Frontend"],
      outline: {
        introduction: "Clarifying the differences between React (often misspelled as ReactS) and React Native.",
        sections: [
          "What is React?",
          "What is React Native?",
          "Common misconceptions",
          "Key differences between React and React Native",
          "Conclusion: Why they are not the same"
        ]
      }
    },
    {
      id: 11,
      name: "Which one is better for the future, React.js or React Native?",
      tags: ["React", "React Native", "Future Trends", "Frontend"],
      outline: {
        introduction: "Analyzing the future prospects of React.js and React Native.",
        sections: [
          "Current popularity of React.js",
          "Current popularity of React Native",
          "Trends in web development",
          "Trends in mobile app development",
          "Market demand and job opportunities",
          "Conclusion: Future outlook"
        ]
      }
    },
    {
        id: 12,
      name: "If I know React.js, is React Native hard to pick up?",
      tags: ["React", "React Native", "Learning Curve", "Frontend"],
      outline: {
        introduction: "Exploring the learning curve for React Native if you already know React.js.",
        sections: [
          "Core similarities between React.js and React Native",
          "Key differences in development environments",
          "Challenges in learning React Native",
          "Resources for transitioning from React.js to React Native",
          "Tips to make learning easier",
          "Conclusion: Is it hard to pick up?"
        ]
      }
    },
    {
        id: 13,
      name: "Should I learn ReactS before learning React Native?",
      tags: ["React", "React Native", "Learning Path", "Frontend"],
      outline: {
        introduction: "Determining whether learning React is necessary before React Native.",
        sections: [
          "What React knowledge is applicable to React Native?",
          "Benefits of learning React first",
          "Can you learn React Native without React?",
          "Use cases where React knowledge is essential",
          "Conclusion: Should you start with React?"
        ]
      }
    },
    {
      id: 14,
      name: "How difficult is React Native for a React Developer?",
      tags: ["React", "React Native", "Difficulty Level", "Frontend"],
      outline: {
        introduction: "Understanding the challenges React developers face when learning React Native.",
        sections: [
          "Similarities between React and React Native",
          "Differences in development tools and practices",
          "Common challenges for React developers",
          "Tips for easing the transition",
          "Conclusion: How difficult is it really?"
        ]
      }
    },
    {
      id: 15,
      name: "Can I learn React Native without React?",
      tags: ["React Native", "Learning Path", "Frontend"],
      outline: {
        introduction: "Exploring whether React knowledge is mandatory for learning React Native.",
        sections: [
          "Introduction to React Native",
          "React concepts used in React Native",
          "Learning React Native without prior React experience",
          "Challenges and solutions",
          "Conclusion: Is it feasible?"
        ]
      }
    },
    {
        id: 16,
      name: "Should you learn React js and React Native in 2019?",
      tags: ["React", "React Native", "Trends", "Frontend"],
      outline: {
        introduction: "Discussing the relevance of React.js and React Native learning in 2019.",
        sections: [
          "Why React.js was trending in 2019",
          "React Native's growth in 2019",
          "Use cases for both in 2019",
          "Key reasons to learn React and React Native",
          "Future trends based on 2019 learnings"
        ]
      }
    },
    {
      id: 17,
      name: "What does Facebook use ReactJS and React Native for?",
      tags: ["React", "React Native", "Facebook", "Use Cases"],
      outline: {
        introduction: "Understanding Facebook's use of React.js and React Native.",
        sections: [
          "The history of React at Facebook",
          "How Facebook uses React.js",
          "How Facebook uses React Native",
          "Impact on Facebook's development process",
          "Conclusion: Lessons from Facebook's usage"
        ]
      }
    },
    {
      id: 18,
      name: "Is React Native stable?",
      tags: ["React Native", "Stability", "Frontend"],
      outline: {
        introduction: "Evaluating the stability of React Native for development.",
        sections: [
          "React Native's development history",
          "Stability in current versions",
          "Common challenges and solutions",
          "Comparison with other frameworks",
          "Conclusion: How stable is it?"
        ]
      }
    },
    {
      id: 19,
      name: "Is React Native dead?",
      tags: ["React Native", "Future", "Frontend"],
      outline: {
        introduction: "Analyzing whether React Native is still relevant in modern development.",
        sections: [
          "Current adoption and popularity",
          "Comparison with competitors like Flutter",
          "Advantages of React Native in 2024",
          "Challenges and misconceptions",
          "Conclusion: Is it dead or thriving?"
        ]
      }
    },
    {
      id: 20,
      name: "Can I make a social media app with React Native?",
      tags: ["React Native", "Mobile Development", "Social Media"],
      outline: {
        introduction: "Exploring the use of React Native for social media app development.",
        sections: [
          "Why React Native is suited for social media apps",
          "Key features needed for a social media app",
          "Tools and libraries to assist",
          "Performance considerations",
          "Examples of social media apps built with React Native",
          "Conclusion: Feasibility and best practices"
        ]
      }
    },
    {
      id: 21,
      name: "Which is better to learn, React Native or Swift?",
      tags: ["React Native", "Swift", "Comparison", "Mobile Development"],
      outline: {
        introduction: "A comparison of React Native and Swift for learning and development.",
        sections: [
          "Overview of React Native",
          "Overview of Swift",
          "Advantages of React Native",
          "Advantages of Swift",
          "Use cases and industry demand",
          "Conclusion: Which one to learn?"
        ]
      }
    },
    {
      id: 22,
      name: "Is learning React Native a good investment?",
      tags: ["React Native", "Learning Path", "Frontend"],
      outline: {
        introduction: "Analyzing the value of learning React Native for developers.",
        sections: [
          "Current demand for React Native developers",
          "Advantages of learning React Native",
          "Opportunities in mobile and web development",
          "Comparison with other frameworks",
          "Conclusion: Is it worth the investment?"
        ]
      }
    },
    {
      id: 23,
      name: "What is React Native, and why is it so popular?",
      tags: ["React Native", "Mobile Development", "Frontend"],
      outline: {
        introduction: "Understanding React Native's popularity in cross-platform app development.",
        sections: [
          "Overview of React Native",
          "Key features and benefits",
          "Use cases in mobile development",
          "Examples of popular apps using React Native",
          "Conclusion: Why React Native is a go-to choice for developers"
        ]
      }
    },
    {
      id: 24,
      name: "What is React Native? How does it work?",
      tags: ["React Native", "Technology", "Cross-Platform"],
      outline: {
        introduction: "Exploring what React Native is and the mechanics behind its functionality.",
        sections: [
          "Introduction to React Native",
          "How React Native bridges JavaScript and native code",
          "Core concepts of React Native development",
          "Comparison with other frameworks",
          "Conclusion: Why React Native matters in modern development"
        ]
      }
    },
    {
      id: 25,
      name: "What is the best way to get started with React Native?",
      tags: ["React Native", "Learning Path", "Mobile Development"],
      outline: {
        introduction: "A beginner's guide to starting with React Native.",
        sections: [
          "Setting up the development environment",
          "Understanding the basics of React Native",
          "Building your first React Native app",
          "Leveraging resources for learning",
          "Best practices for beginners"
        ]
      }
    },
    {
      id: 26,
      name: "What are some best practices for React and React Native?",
      tags: ["React", "React Native", "Development Practices"],
      outline: {
        introduction: "Best practices to follow when working with React and React Native.",
        sections: [
          "Code structure and modularity",
          "State management strategies",
          "Optimizing performance",
          "Reusable components and styling",
          "Debugging and testing practices"
        ]
      }
    },
    {
      id: 27,
      name: "Which is better for a web developer, Flutter or React Native?",
      tags: ["React Native", "Flutter", "Comparison"],
      outline: {
        introduction: "Comparing React Native and Flutter for web developers.",
        sections: [
          "Overview of React Native and Flutter",
          "Learning curve for web developers",
          "Performance and ecosystem comparison",
          "Use cases for both frameworks",
          "Conclusion: Choosing the right framework"
        ]
      }
    },
    {
      id: 28,
      name: "Should a React or full-stack developer learn React Native?",
      tags: ["React", "React Native", "Career Advice"],
      outline: {
        introduction: "Analyzing whether React or full-stack developers should learn React Native.",
        sections: [
          "Skills overlap between React and React Native",
          "Benefits for full-stack developers",
          "Applications of React Native knowledge",
          "Time and effort required to learn React Native",
          "Conclusion: Is React Native a valuable skill?"
        ]
      }
    },
    {
      id: 29,
      name: "Will Flutter replace React Native?",
      tags: ["React Native", "Flutter", "Future Trends"],
      outline: {
        introduction: "Exploring whether Flutter could replace React Native in the future.",
        sections: [
          "Overview of React Native and Flutter",
          "Advantages and drawbacks of each framework",
          "Current industry trends and adoption rates",
          "Community and ecosystem comparison",
          "Conclusion: Is Flutter likely to replace React Native?"
        ]
      }
    },
    {
      id: 30,
      name: "How good is React Native?",
      tags: ["React Native", "Framework Analysis", "Mobile Development"],
      outline: {
        introduction: "Evaluating the strengths and weaknesses of React Native.",
        sections: [
          "Strengths of React Native",
          "Common challenges and limitations",
          "Comparison with other frameworks",
          "Real-world examples of successful apps",
          "Conclusion: How React Native stands out"
        ]
      }
    }
];

function getTopicForDay() {
    const day = new Date().getDate();
    return topics[day % topics.length];
}

module.exports = {
    topics,
    getTopicForDay
};
  