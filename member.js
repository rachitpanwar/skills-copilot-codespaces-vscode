function skillsMember(){
    return{
        restrict: 'E',
        templateurl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
}
