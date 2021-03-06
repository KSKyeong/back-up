FlowRouter.template('/', 'main');
// 뭐부터 시작할 지 정해준다.

Template.main.onRendered(function() {
  // 화면이 그려지고 난 후 제일 먼저 수행
  Session.set('count', 0);
});

Template.main.helpers({
  // 화면에 데이터를 전달
  count: function() {
    var count = Session.get('count');
    if (!count) {
      return 'Click!';
    } else {
      return 'Count: ' + count;
    }
  },

  diary: function() {
    return '경 매';
  }
});

Template.main.events({
  // 화면의 이벤트를 처리
  'click #btn-count': function() {
    Session.set('count', Session.get('count')+1);
  }

});