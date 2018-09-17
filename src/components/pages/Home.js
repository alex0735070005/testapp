import React from 'react';
import '../../styles/home.scss';

const Home = () => {
    return (
        <div className="page">
            <h3>REACT TEST APPLICATION TASK</h3>
            <p>
                Goal: Create a test application from scratch to check developer skills.
                Technologies to use: React.js, React Router, Webpack, Data Binding (Redux, Mobx)
            </p>
            <p>
                So let's start =)
            </p>
            <p>
                Application idea - build the dashboard for view list of photos. Use the https://unsplash.com api to take data about pictures.
            </p>
            <p>
                Get access token from API
            </p>
            <p>
                You need to register your app at unsplash.com https://unsplash.com/documentation#registering-your-application
            </p>
            <h4>    
                Logic of application
            </h4>
            <p>
                User in project see main page. It consists of navigation menu and content part. Navigation menu contains a couple of links to navigate:
            </p>
            <p>
                List of photos<br />
                List of favorite photos
            </p>
            <p>
                To get the list of photos use received received access_token. Here is the endpoint of getting {' '}
                <a href="https://unsplash.com/documentation#list-photos">photo list</a>
            </p>
            <h4>List of photos</h4>
            <p>
                This section contains photos with photos. Each photo should have checkbox. That checkbox is shows that the image is favorite or not. When user selects checkbox on some image without mark that image will save as shown in the "List of favorite" photos when user navigates that section.
            </p>



            <h4>List of favorite photos</h4>
            <p>
                Selected section selected on "List of photos" section. All that favorite images should be stored in some storage (localstorage for example). User can click on the favorite image, checkbox, in that way.
            </p>


            <h4>Layout requirements</h4>
            <p>
                Layout styles can be implemented by using LESS or SASS preprocessors. Each component should have an individual file with stylesheet. Use for positioning of blocks and layout use flexbox. Global styles should be placed in one main file.
            </p>
            <h4>
                Code style requirements
            </h4>
            <p>
                Javascript must be written in ES6 style. For network interaction you can use any known libs, not necessary to use browser fetch api.
            </p>
            <h4>
                Project requirements
            </h4>
            <p>
                You should have an basic two routes:<br />
                / dashboard / photos
                / dashboard / photos / favorite
            </p>
            <p>
                All project code should contain in src folder. In src folder for react components use "components" folder. </p>


            <h4>Webpack configuration requirements</h4>
            <p>
                Create a separate configuration of webpack for development and production environments.
                Development configuration should contain sourcemaps, devserver, LESS or SASS file compilation handler, javascript (ES6) files handler and react templates handler.
                Production configuration should compile and put all compiled code / styles to static folder dist.
            </p>
           <p>
                As bonus you can modify config to make separate bundles:<br />
                - manifest.js - for webpack runtime source code.<br />
                - vendor.js - for store modules source code.<br />
                - app.js - for store source code of application itself.<br />
            </p>


            <h4>Extra tasks (not necessary)</h4>
            <p>
                if you'll use Redux - use immutable.js;<br />
                make sort for all photos (any filters wich you want)<br />
                make lazy-loading to photos<br />
                async routing (code splitting with webpack)<br />
                both section should have an infinite scroll to paginate through pages<br />
                make web and mobile layout<br />
            </p>
        </div>
    )
}

export default Home;
