import React from 'react';
import "./BlogPost.css";
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function BlogDetails() {

    const id = useParams();
    console.log(id.blogId);

    const data = [
        {
            imageUrl: 'https://www.wemakescholars.com/uploads/blog/TopprofessionalITcoursetopursueincollege.jpg',
            date: 'May 1, 2023',
            time: '10:00 AM',
            title: 'Getting Started with ReactJS: A Beginners Guide',
            description :[
                {
                    heading: "Introduction:",
                    content: ` ReactJS is a popular JavaScript library for building user interfaces. It's widely used by developers and companies worldwide, including Facebook, Netflix, and Airbnb. If you're new to ReactJS, it can be intimidating to get started. In this blog post, we'll provide a beginner's guide to ReactJS and help you understand the basics of this powerful library.`
                },
                {
                    heading: "What is ReactJS?",
                    content: `ReactJS is a JavaScript library that's used to build user interfaces. It's based on the concept of components, which are reusable pieces of code that can be used to create complex UIs. ReactJS was developed by Facebook and was released to the public in 2013. Since then, it has become one of the most popular libraries for building UIs.`
                },
                {
                    heading: "Benefits of ReactJS:",
                    content: `

                    ReactJS has several benefits that make it a popular choice for building UIs, including:
            
                    Performance: ReactJS is designed to be fast and efficient. It uses a virtual DOM, which allows it to update the UI quickly without re-rendering the entire page.
                    
                    Reusability: ReactJS is based on the concept of components, which are reusable pieces of code. This makes it easy to create complex UIs without having to write a lot of code.
                    
                    Community Support: ReactJS has a large and active community of developers who contribute to the library. This means there are a lot of resources available for learning and troubleshooting.
                    
                    Getting Started with ReactJS:
                    To get started with ReactJS, you'll need to have a basic understanding of JavaScript and HTML. Here are the steps to get started:
                    
                    Install Node.js: ReactJS is built using Node.js, so you'll need to install it on your computer.
                    
                    Create a React App: You can create a new React app using the create-react-app command in your terminal.
                    
                    Write Components: Once you've created a new React app, you can start writing components. Components are the building blocks of your UI, and they can be reused throughout your app.

                    Render Components: After you've written your components, you can render them in your app using the ReactDOM.render() method.
                    `
                },
                {
                    heading: " Conclusion:",
                    content: `ReactJS is a powerful library for building user interfaces. It can be intimidating to get started, but by following these basic steps, you'll be on your way to creating complex UIs in no time. Remember to take advantage of the resources available in the ReactJS community, and don't be afraid to ask for help when you need it.`
                },
            ],
            author: 'John Doe',
        },
        {
            imageUrl: 'https://www.questpond.com/img/2.png',
            date: 'May 3, 2023',
            time: '2:00 PM',
            title: 'JavaScript: The Language That Powers the Web',
            description:
                [
                    {
                        heading: "Introduction:",
                        content: " JavaScript is a popular programming language that's used to build interactive websites, web applications, and mobile apps. It's a versatile language that's been around for over 25 years and continues to evolve to meet the needs of modern web development. In this blog post, we'll explore the basics of JavaScript and its importance in the world of web development."
                    },
                    {
                        heading: "What is JavaScript?:",
                        content: " JavaScript is a high-level, interpreted programming language that's used to create dynamic web content. It's primarily used for client-side scripting, meaning that it runs in the user's web browser. JavaScript was first introduced in 1995 and has since become one of the most widely used programming languages in the world."
                    },
                    {
                        heading: "Uses of JavaScript:",
                        content: `
                        JavaScript is used in a variety of ways to create dynamic web content, including:
                        Client-side scripting: JavaScript is used to create interactive elements on web pages, such as menus, forms, and animations.
                        Server-side scripting: JavaScript is used in conjunction with server-side technologies like Node.js to create dynamic web applications.
                        Mobile app development: JavaScript is used with frameworks like React Native to create mobile apps for iOS and Android.
                        Game development: JavaScript is used to create browser-based games and game engines.`
                    },
                    {
                        heading: "JavaScript Basics:",
                        content: `            Here are some basic concepts to understand when working with JavaScript:
                        Variables: Variables are used to store data in JavaScript. They can be declared using the var, let, or const keywords.
                        Functions: Functions are blocks of code that can be reused throughout your code. They can be declared using the function keyword.
                        Conditional statements: Conditional statements, such as if/else statements, are used to execute code based on certain conditions.
                        Loops: Loops, such as for loops and while loops, are used to repeat a block of code multiple times.`
                    },
                    {
                        heading: "Conclusion:",
                        content: `JavaScript is a powerful programming language that's used to create dynamic web content. Its versatility and widespread use make it a valuable skill for web developers to have. By understanding the basics of JavaScript, you can begin creating dynamic web content and exploring the many possibilities that this language has to offer.`
                    },
                ],
            author: 'Jane Smith',
        }
    ]



    return (
        <div>
            <Navbar />
            <div className='blogContent'>
            <h1>{data[id.blogId].title}</h1>
            <div className='authorContent'>
            <p>{data[id.blogId].author}</p>
            <p>{data[id.blogId].date}</p>
            <p>{data[id.blogId].time}</p>
            </div>
            <hr/>
            {data[id.blogId].description.map((item, index) => (
                <div key={index}>
                    <h2>{item.heading}</h2>
                    <p>{item.content}</p>
                </div>
            ))}
            </div>
            <Footer />
        </div>
    );
}

export default BlogDetails;