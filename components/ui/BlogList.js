const DOM = React.DOM;
const BlogList = ({items}) => (
    DOM.ul(
        null,
        _.map(
            items,
            (item, key) => (
                DOM.li(
                    {key},
                    React.createElement(BlogItem, {props: item})
                )
            )
        )
    )
);
