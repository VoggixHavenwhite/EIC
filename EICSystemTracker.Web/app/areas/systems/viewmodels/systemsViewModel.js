var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PageViewModel_1 = require('../../../framework/domain/PageViewModel');
var systemsViewModel = (function (_super) {
    __extends(systemsViewModel, _super);
    function systemsViewModel() {
        _super.call(this);
        console.debug('New Systems View Model!');
        //starMapController.GetSystems().done((data: IEDStarMapSystem[]) => {
        //    console.debug("GetSystems Returns: " + data);
        //});
    }
    return systemsViewModel;
})(PageViewModel_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = systemsViewModel;
//# sourceMappingURL=systemsViewModel.js.map