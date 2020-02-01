// This is the Link API
import { Provider } from "react-redux";

import { configureStore } from "./configureStore";

const store = configureStore(/* inititilaState */);

const withRedux = (Page: any) => {

  return () => (
    // <Provider store={store}>
      <Page />
    // </Provider>
  );
}

export default withRedux;
