import * as views from "./Views";

export default st => `
${views[st.views](st)}`;
