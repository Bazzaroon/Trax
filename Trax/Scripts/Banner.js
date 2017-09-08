// Banner Object //
function PgBanner(id, title, height, bgcolor, containerid) {
    this.Id = id;
    this.Title = title;
    this.Height = height;
    this.BgColor = bgcolor;
    this.ContainerId = containerid;
    this.HasSearchBox = false;
}

PgBanner.prototype.Draw = function() {
    var id = this.Id;
    var mkUp = "<div id='" + id + "' class='banner' style='background-color:" + this.BgColor + ";width:100%;height:" + this.Height + "px'>";
    mkUp += "<table style='width:100%;height:100%'>";
    mkUp += "<tr><td style='width:27%'>";
    if (this.HasSearchBox) {
        mkUp += "<input id='sb" + id + "' type='text' class='banner-searchbox'/>";
        mkUp += "<div class='searchbtn'></div>";
        mkUp += "<div class='genrebtn' id='genre" + id + "'></div>";

    }
    mkUp += "</td>";
    mkUp += "<td>" + this.Title + "</td>";
    mkUp += "<td id='bcell" + id + "' style='width:27%'></td>";
    mkUp += "</tr></table></div>";

    $('#' + this.ContainerId).append(mkUp);
    
    //Clickers
    $('#sbtn' + id).on('click', function () {
        alert('Searchbutton pressed');
    });
    $('#genre' + id).on('mouseenter', function () {
        var G = new CustomDropDown('Plonker', null, null);
    });
};

PgBanner.prototype.remove = function() {
    $(this).remove();
};

PgBanner.prototype.AddButton = function(oclass, tooltip) {
    var id = 'bcell' + this.Id;
    $('#'+id).append("<div title='" + tooltip + "' class='" + oclass + "'></div>");
};

//Dropdowns

function CustomDropDown(id, names, funcs) {
    this.Id = id;
    this.Names = names;
    this.Funcs = funcs;
    this.Create();
}

CustomDropDown.prototype.Create = function () {
    alert('This has been created with an id of ' + this.Id);
};

