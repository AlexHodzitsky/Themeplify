const { gulp } = themeplify.packages;
const removeSettingsFromJsonTemplatesTask = require("./../others/removeSettingsFromJsonTemplates");
const downloadSettings = require("./downloadSettings");
const downloadFiles = require("./downloadFiles");
const clearThemekitWorkingDirectory = require("../others/clearSettingsWorkingDirectory");

const download = gulp.series(
	clearThemekitWorkingDirectory,
	downloadSettings,
	downloadFiles,
	removeSettingsFromJsonTemplatesTask
)

download.displayName = "themekit:download";

module.exports = download;
