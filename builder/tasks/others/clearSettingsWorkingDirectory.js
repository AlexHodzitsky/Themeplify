const { gulp, clean }   = themeplify.packages;
const files             = themeplify.files;
const { themePath }     = themeplify.helpers;

function clearSettingsWorkingDirectory() {
    const dir = themePath(files.settingsDir);

    return gulp.src(dir, {
        read: false,
        allowEmpty: true
    }).pipe(clean({
        force: true
    }));
}

clearSettingsWorkingDirectory.displayName = "clear:previous-settings";

module.exports = clearSettingsWorkingDirectory;
