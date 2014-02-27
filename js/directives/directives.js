App.directive('focusOnSubmit', function() {
    return function(scope, form) {
        form.bind('submit', function() {
            form.children()[0].focus();
        });
    }
});