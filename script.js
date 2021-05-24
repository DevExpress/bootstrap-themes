var dx = dx || {};

(function() {
    var currentScript = document.currentScript || (function() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    var distDir = "dist";
    if(currentScript.getAttribute("data-bs-version") === "5")
        distDir += ".v5"

    var themes = {};
    themes["purple"] = { folder: "purple", title: "Purple" };
    themes["office-white"] = { folder: "office-white", title: "Office White" };
    themes["blazing-berry"] = { folder: "blazing-berry", title: "Blazing Berry" };
	
    $("a[href='#']").on("click", function(e) {
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
            var minCssUrl = distDir + "/" + theme.folder + "/bootstrap.min.css";
            var cssUrl = distDir + "/" + theme.folder + "/bootstrap.css";
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
    $(function() {
        updateThemesList();
        updateCurrentTheme();
        $('body').scrollspy({ target: '#scrollspy', offset: 90 });
        $('[data-toggle="popover"], [data-bs-toggle="popover').popover();
        $('[data-toggle="tooltip"], [data-bs-toggle="tooltip"]').tooltip();
        $('[data-toggle="indeterminate-checkbox"], [data-bs-toggle="indeterminate-checkbox"]').prop("indeterminate", true);
    });
    $(window).on('popstate', function() {
        updateThemesList();
        updateCurrentTheme();
    });
})();