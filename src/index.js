import initializeWebsite from "./website";
require.context("../src/", true, /\.(png|svg|jpg|gif)$/);

initializeWebsite("dededo")