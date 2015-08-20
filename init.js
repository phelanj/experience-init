// Load default background
load("Javascript/dark-background.js");


var mainWidget = $("CESAsymmetricMainWidget")[0];

/* Need to do this in awkward way because scale-function modifies vector in-place */
function size() { return $.app.mainLayer().size().toVector(); }

mainWidget.eventProcessVector2("create-touch-me", size().scale(0.2, 0.75));

mainWidget.eventProcessVector2("create-teaser", size().scale(0.5, 0.5));
