import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-10 text-secondary'>My Blogs</h1>
            <div>
                <div className='my-5'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                           
                           <div class="card-body">
                                <h2 class="card-title text-2xl font-bold text-primary">Q-1: How will you improve the performance of a React Application?</h2>
                                <p className='text-secondary font-bold'>Ans: I will improve the performance of a responsive application by following the procedure below : <br />
                                1. Memoizing React components to prevent unnecessary re-renders. <br />
                                2. Code-splitting in React using dynamic import() <br />
                                3. Lazy loading images in React. <br />
                                4. Keeping component state local where necessary. <br />
                                5. Windowing or list virtualization in React.
                                 </p>
                                
                            </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                            
                            <div class="card-body">
                                    <h2 class="card-title text-2xl font-bold text-primary">Q-2: What are the different ways to manage a state in a React application?</h2>
                                    <p className='text-secondary font-bold'>Ans:  Four main types of state you need to properly manage in React apps: <br />
                                    1. Local state ::  Local state is data we manage in one or another component. <br />
                                    2. Global state ::  Global state is data we manage across multiple components. <br />
                                    3. Server state :: Data that comes from an external server that must be integrated with our UI state. <br />
                                    4. URL state ::  Data that exists on our URLs, including the pathname and query parameters.
                                    </p>
                                    
                            </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                            
                            <div class="card-body">
                                    <h2 class="card-title text-2xl font-bold text-primary">Q-3: How does prototypical inheritance work?</h2>
                                    <p className='text-secondary font-bold'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype</p>
                                    
                            </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                            
                            <div class="card-body">
                                    <h2 class="card-title text-2xl font-bold text-primary">Q-4: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                                    <p className='text-secondary font-bold'>Ans: array_product() returns the product of values in an array. <br />
                                     const arrayProduct = [name, price, description]</p>
                                     arrayProduct[0]
                            </div>
                    </div>
                </div>
                <div className='my-10'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                            
                            <div class="card-body">
                                    <h2 class="card-title text-2xl font-bold text-primary">Q-5: What is a unit test? Why should write unit tests?</h2>
                                    <p className='text-secondary font-bold'>Ans:A unit test is  the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a method or property.We should write unit tests because--1. Unit testing allows software developers to actually think through the design of the software. <br /> 2. This can help developer to stay focused and can also help them to create much better designs.</p>
                                    
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;