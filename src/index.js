import React from 'react';
import { StatusBar } from 'react-native'

import '~/config/ReactotronConfig';

import Routes from '~/routes';

//<> - fragment- encapsula mais de um componente dentro dele
// StatusBar - arruma a abarra superior só no android
const App = () =>  (
    <>
        <StatusBar barStyle="light-content" backgroundColor='#8B10AE'/>
        <Routes />
    </>
)

export default App;
