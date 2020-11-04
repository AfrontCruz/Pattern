function App() {
    return (
        <div className="text-center container-full background-primary">
            <div className="d-flex flex-row flex-wrap container container-center">
                <div className="box-shadow box-200 m-1 background-secondary"></div>
                <div className="box-200 m-1 background-secondary"></div>
                <div className="box-200 m-1 background-secondary"></div>
                <div className="box-200 m-1 background-secondary"></div>
                <div className="box-200 m-1 background-secondary"></div>
                <div className="box-200 m-1 background-secondary"></div>
            </div>
            <div className="d-flex flex-column flex-wrap m-5 container-center background-secondary">
                <input type="text" placeholder="Hello" />
                <input type="number" placeholder="Hello" />
            </div>
            <div className="d-flex flex-column flex-wrap p-5 container-center background-secondary">
                <button>1234</button>
            </div>
        </div>
    );
}

export default App;
