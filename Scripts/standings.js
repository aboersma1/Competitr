$(
    function () {
        bindEvents();
    });

function bindEvents() {
    $('ul.nav.nav-tabs li[role="presentation"] a').on('click', function () {
        $(this).parent().siblings().filter('.active').removeClass('active');
        $(this).parent().addClass('active');
        var dataList = $(this).attr('data-list');
        console.log(dataList);
        dataList == 'all' ? showAllSections() : showOnlySection(dataList);
    });
}

function showOnlySection(section) {
    var $buttonGroup = $('div.btn-group');
    $buttonGroup.find('div.indProList, div.indOpenList, div.teamProList, div.teamOpenList').css('display', 'none').removeClass('fullWidth');
    $buttonGroup.find('div.' + section).css('display', 'block').addClass('fullWidth');
}

function showAllSections() {
    var $buttonGroup = $('div.btn-group');
    $buttonGroup.find('div.indProList, div.indOpenList, div.teamProList, div.teamOpenList').css('display', 'block').removeClass('fullWidth');
}