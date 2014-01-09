window.namespace = (function (module, $) {
    "use strict";

    module.ModuleName = function() {
        console.log('JQuery ok');
    };

    $(document).ready(function () {      
        module.ModuleName();
    });

    return module;
})(window.namespace || {}, window.jQuery);