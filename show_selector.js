(function($) {
  $.fn.show_selector = function(options) {
    var opts = $.extend({}, $.fn.show_selector.defaults, options);
    var f = opts.logger;
    
    function traverseAncestors(target, children) {
      children = (children || []);
  
      if(target.parentNode == undefined || target.parentNode == null) {
        children.unshift(target.tagName.toLowerCase());
        return children;
      }  
  
      if(target.id != undefined && target.id != "") {
        var selector = "#" + target.id;
      } else {
        var selector = target.tagName.toLowerCase();
      } 
      
      if(target.className != undefined && target.className != "") {
        var selector = target.tagName.toLowerCase();
        selector += "." + target.className;
      }
      if(selector != "") {
        children.unshift(selector);
      }
  
      return traverseAncestors(target.parentNode, children);
    }
            
    return this.each(function() {
      $(this).click(function() {
        f(traverseAncestors(this).join(" "));
        return false;
      });
    });
  }
  
  $.fn.show_selector.defaults = {logger: alert};
})(jQuery);