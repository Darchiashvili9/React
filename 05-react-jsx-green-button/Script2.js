// JavaScript source code



const App = (props) => {
     




    console.log(props)

    const [buttonText, setbuttonText] = React.useState(props.initialbuttonText)
    const [classesList, setClassesList] = React.useState(props.initialClass);


    const onButtonClick = () => {
        setbuttonText('hello from react');
        setClassesList('green-btn');
    }



    return (
        <div className="app">
            <button className={classesList} onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialbuttonText="click meeeeeee" initialClass="gold-btn" />)