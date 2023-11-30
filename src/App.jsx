import GlobalStyle from './components/styled/GlobalStyle';
import { Friend, Todos } from './components';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Todos />
            <hr />
            <Friend />
        </>
    );
};

export default App;
