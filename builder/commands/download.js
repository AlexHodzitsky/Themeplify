const themekitDownload          = require("../tasks/themekit/download");
const svgUpdate                 = require("../tasks/images/updateSvg");
const removeIconsFromSnippets   = require("../tasks/images/removeIconsFromSnippets");
const customConfig = themeplify.customConfig;

const { gulp } = themeplify.packages;

const tasks = [
	themekitDownload
];

if (customConfig.svgUpdate) {
	tasks.push(svgUpdate);
	tasks.push(removeIconsFromSnippets);
}

const download = gulp.series(tasks);

download.displayName = "download";

module.exports = download;
