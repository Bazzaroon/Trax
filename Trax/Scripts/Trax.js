function Menu(id, top, left, items) {
    this.Items = items;
    this.Top = top;
    this.Left = left;
    this.Id = id;
}

Menu.prototype.Draw = function() {
    var self = this;
    var wHeight = parseInt($(window).height() - 4) + 'px';
    mkUp = "<div style='height:" + wHeight + ";left:-200px' id='" + this.Id + "' class='baz-menu'>";
    mkUp += "<div class='baz-menu-item baz-menu-header'>Choose category</div>";
    for (var x = 0; x < this.Items.length; x++) {
        mkUp += "<div data-item='" + this.Items[x] + "' class='baz-menu-item'>" + this.Items[x] + "</div>";
    }
    mkUp += "</div>";

    $('body').append(mkUp);
    $('.baz-menu').animate({
        left: '0px'
    }, 200);

    $('.baz-menu-item').click(function() {
        self.HandleMenuEvent($(this).attr('data-item'));
    });
};


Menu.prototype.HandleMenuEvent = function(item) {
    alert(item);
    $('#' + this.Id).remove();
};

function Settings(torrenturl, thumbheight, thumbwidth) {
    this.TorrentUrl = torrenturl;
    this.ThumbHeight = thumbheight;
    this.ThumbWidth = thumbwidth;
}

Settings.prototype.Draw = function(height, width) {
    var T = this;
    Modal.draw();
    var mkUp = "<div style='height:" + height + "px; width:" + width + "px' class='settings-container'>";
    mkUp += "<div class='settings-header'>Settings</div>";
    mkUp += "<div class='settings-close'>Close</div>";
    mkUp += "</div>";
    if ($('.settings-container').length == 0) {
        $('body').append(mkUp);
        $('.settings-container').css({ left: (parseInt($(window).width() / 2)) - (parseInt(width / 2)), top: '150px' });
    }
    T.drawElements();
    $('.settings-close').click(function() {
        $('.settings-container').remove();
        Modal.close();
    });
};

Settings.prototype.drawElements = function() {
    var self = this;
    var mkUp = "<table>";
    mkUp += dlgelement.LabelInput(130, 'Proxy Site', 300, 'https://proxybunker.org/');
    mkUp += dlgelement.FileLink(130, 'Library Path', 300, 'Press');
    mkUp += "</table";
    $('.settings-container').append(mkUp);

};

var Modal = {
    draw: function () {
        if ($('.fullscreen-modal-window').length == 0) {
            var mkUp = "<div class='fullscreen-modal-window'></div>";
            $('body').append(mkUp);
            $('.fullscreen-modal-window').css({ height: ($(window).height()) + 'px' });
        }
    },
    close: function () {
        $('.fullscreen-modal-window').remove();
    }
};

var dlgelement = {
    LabelInput: function (lw, ltext, iwdth, itext, id) {
        var mkUp = "<tr class='dlg-input'><td style='width:" + lw + "px'>" + ltext + "</td><td><input style='width:" + iwdth + "px' type='text' class='' value='" + itext + "'></input></td></tr>";
        return mkUp;
    },
    FileLink: function(lw, ltext, iwdth, itext, id) {
        var mkUp = "<tr class='dlg-input'><td style='width:" + lw + "px'>" + ltext + "</td><td style='width:" + iwdth + "'>";
        mkUp += "<div onclick='javascript:dlgelement.OpenFile()' id='" + id + "'></div><span>" + itext + "</span></td></tr>";
        return mkUp;
    },
    OpenFile: function(msg) {
        var mkUp = "<input style='display:none' type='file' id='fileopen'></input>";
        $('body').append(mkUp);
        $('#fileopen').trigger('click');
        
        
    }
};