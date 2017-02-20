import React from 'react';
import BlogList from '../ui/BlogList';

const items = [
    {
        text: 'Blog item one',
        img:{
            alt: 'alternative text'
            , src: 'https://yandex.ru/images/today?size=2560x1600'
            , width: '200px'
            , height: '100px'
        }
    },
    {
        text: 'Blog item two',
        img:{
            alt: 'alternative text two'
            , src: 'http://mtdata.ru/u25/photo7586/20648975464-0/original.jpg'
            , width: '200px'
            , height: '100px'
        }
    }

];

class BlogPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {items};
    }
    render(){
        const {items} = this.state;
        return React.createElement(BlogList, {items})
    }
}

// ReactDOM.render(
//     React.createElement(BlogPage),
//     document.getElementById('app')
// );

export default BlogPage;