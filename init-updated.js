// Load default background
load("Javascript/dark-background.js");


var mainWidget = $("CESAsymmetricMainWidget")[0];

/* Need to do this in awkward way because scale-function modifies vector in-place */
function size() { return $.app.mainLayer().size().toVector(); }

mainWidget.eventProcessVector2("create-touch-me", size().scale(0.2, 0.75));

mainWidget.eventProcessVector2("create-teaser", size().scale(0.5, 0.5));

mainWidget.eventAddListener("child-added", function(id) {
 
  var glow = MultiWidgets.Widget.findById(id);
  var widget = glow;
 
  /* Whenever widget is added to the scene of Experience is has
     couple additional layers of common utilities. That's why the
     clunky search for the actual plugin....
  */
  if(widget.numChildren() > 0) {
 
    widget = widget.child(0);
 
    if(widget.numChildren() > 1) {
      // Toolbar is the first child
      widget = widget.child(1);
 
      if(widget.type() == "Cornerstone.BrowserWidget") {
        widget.onSingleTap(function() {
          glow.setScale(glow.scale()*1.1); 
        });
      }
    }
  }
});
