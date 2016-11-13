"use strict";
;
var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        var _this = this;
        this.heroService = heroService;
        this.heroes = [];
        this.ngOnInit = {
            this: .heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); })
        };
    }
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map