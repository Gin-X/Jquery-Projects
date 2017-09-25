(function() {
  $('#dd').on('click', function () {
    var d = dialog({
        title:'欢迎',
        content:'欢迎使用 artDialog v6对话框组件！'
    });
    $('body').first().addClass('hiddenOF');
    d.showModal();
  })
}())