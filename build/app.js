var rootEl = document.getElementById('root');
var root = ReactDOM.createRoot(rootEl);

// const headingEl = React.createElement('h1', {}, 'Hello from Reac!');
// const secondHeadingEl = React.createElement('h2', {}, 'Some moto here');
// const headerEl = React.createElement('header', {}, headingEl, secondHeadingEl);
// Use JSX Syntax

var headerEl = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        { className: "heading-container" },
        React.createElement(
            "h1",
            { className: "heading" },
            "Hello from React!"
        ),
        React.createElement(
            "h2",
            null,
            "Some moto here"
        ),
        React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quae, deleniti quo maiores, numquam laborum obcaecati inventore itaque ad eligendi sunt dolor amet voluptatum quis excepturi debitis. Illo, vel alias! Voluptate facere est blanditiis architecto voluptates. Consectetur, consequatur? Alias iusto ullam aut molestias omnis exercitationem dolorum at, ut repudiandae odit tenetur harum consequuntur quas natus? Possimus autem officia accusamus magni! Nostrum nobis fugiat provident quidem quo natus dolorum nemo laboriosam, accusantium explicabo nulla distinctio delectus nesciunt nisi ut autem aliquid totam ipsum quasi pariatur inventore fuga reprehenderit eaque. Dolor, voluptatum?"
        )
    ),
    React.createElement(
        "button",
        null,
        "Click me :)"
    )
);

root.render(headerEl);