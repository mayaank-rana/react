export const Book = (props) => {
    const { img, author, title } = props;
    // console.log(props)
    //attribute,eventHandler
    //onClick,onMouseOver
    const clickHandler = () => {
        alert('hello eorld');
    }
    const complexExample = () => {
        console.log(author)
    }
    return (
        <article className='book'>
            <img
                src={img}
                alt="book img"
            />
            <h1>{title} </h1>
            <h3 >{author} </h3>
            <button type='button' onClick={clickHandler}>Refrence example</button>
            <button type='button' onClick={() => complexExample(author)}>complexExample</button>

        </article>);
}
