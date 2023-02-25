const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

// const headingEl = React.createElement('h1', {}, 'Hello from Reac!');
// const secondHeadingEl = React.createElement('h2', {}, 'Some moto here');
// const headerEl = React.createElement('header', {}, headingEl, secondHeadingEl);
// Use JSX Syntax

const headerEl = (
    <div>
        <header className="heading-container">
            <h1 className="heading">Hello from React!</h1>
            <h2>Some moto here</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quae, deleniti quo maiores, numquam laborum obcaecati inventore itaque ad eligendi sunt dolor amet voluptatum quis excepturi debitis. Illo, vel alias! Voluptate facere est blanditiis architecto voluptates. Consectetur, consequatur? Alias iusto ullam aut molestias omnis exercitationem dolorum at, ut repudiandae odit tenetur harum consequuntur quas natus? Possimus autem officia accusamus magni! Nostrum nobis fugiat provident quidem quo natus dolorum nemo laboriosam, accusantium explicabo nulla distinctio delectus nesciunt nisi ut autem aliquid totam ipsum quasi pariatur inventore fuga reprehenderit eaque. Dolor, voluptatum?</p>
        </header>

        <button>Click me :)</button>
    </div>
)

root.render(headerEl);