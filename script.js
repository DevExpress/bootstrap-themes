var dx = dx || {};

(function(){
    var themes = {};
    themes["purple"] = { folder: "purple", title: "Purple" };
    themes["office-white"] = { folder: "office-white", title: "Office White" };
    themes["blazing-berry"] = { folder: "blazing-berry", title: "Blazing Berry" };
	
    $('body').scrollspy({ target: '#scrollspy', offset: 90 });

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="indeterminate-checkbox"]').prop("indeterminate", true);

    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });
    function getCurrentThemeName() {
        var url = window.location.href;
        var regex = new RegExp('[?&]theme(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        var result = (!results || !results[2]) ? null : results[2];
        return result || "purple";
    }
    function updateThemesList() {
        var listHtml = "";
        for(var themeName in themes) {
            listHtml += "<a class='dropdown-item' href='javascript:;' onclick='dx.setTheme(&quot;" + themeName + "&quot;)'>" + themes[themeName].title + "</a>";
        };
        $("#themesList").html(listHtml);
    }
    function updateCurrentTheme() {
        var themeName = getCurrentThemeName();
        var theme = themes[themeName];
        if(theme) {
            var minCssUrl = "dist/" + theme.folder + "/bootstrap.min.css";
            var cssUrl = "dist/" + theme.folder + "/bootstrap.css";
            $("#styleLink").attr("href", minCssUrl);
            $("#downloadCss").attr("href", cssUrl);
            $("#downloadMinCss").attr("href", minCssUrl);

            $("#themeCaption").html(theme.title);
            $("#downloadTheme").html(theme.title);
        }
    }
    dx.setTheme = function(themeName) {
        var anchor = document.location.href.split("#")[1];
        window.history.pushState({ themeName: themeName }, window.title, "?theme=" + themeName + (anchor ? "#" + anchor : ""));
        updateCurrentTheme();
    }
    $(document).ready(function(){
        updateThemesList();
        updateCurrentTheme();
    });
    $(window).on('popstate', function() {
        updateThemesList();
        updateCurrentTheme();
    });
})();