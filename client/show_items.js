FlowRouter.template('/show_items/:_id', 'show_items');
// 뭐부터 시작할 지 정해준다.

Template.show_items.onRendered(function() {
    // 화면이 그려지고 난 후 제일 먼저 수행
});

Template.show_items.helpers({
    // 화면에 데이터를 전달
    diary: function() {
        return '경 매';
    }
});

Template.show_items.events({
    // 화면의 이벤트를 처리
    'click #btn-count': function() {
        Session.set('count', Session.get('count')+1);
    }

});