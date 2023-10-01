"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBreakfastRecipes = exports.getRecipesByMaxTime = exports.getRecipesByMealType = exports.getRecipesByQty = exports.getRecipes = void 0;
function getRecipesByQuery(path, limit) {
    if (limit === void 0) { limit = 3; }
    return __awaiter(this, void 0, void 0, function () {
        var res, json, recipes, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(path)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    json = _a.sent();
                    recipes = json.hits.slice(0, limit).map(function (hit) {
                        var recipeInfo = {
                            name: hit.recipe.label,
                            link: hit.recipe.url,
                        };
                        return recipeInfo;
                    });
                    return [2 /*return*/, recipes];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// other functions
function getRecipes(searchInput, appId, appKey) {
    return __awaiter(this, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            path = "https://api.edamam.com/api/recipes/v2?type=public&q=".concat(searchInput, "&app_id=").concat(appId, "&app_key=").concat(appKey);
            return [2 /*return*/, getRecipesByQuery(path)];
        });
    });
}
exports.getRecipes = getRecipes;
function getRecipesByQty(searchInput, appId, appKey, Qty) {
    return __awaiter(this, void 0, void 0, function () {
        var path, limit;
        return __generator(this, function (_a) {
            path = "https://api.edamam.com/api/recipes/v2?type=public&q=".concat(searchInput, "&app_id=").concat(appId, "&app_key=").concat(appKey);
            limit = Qty;
            return [2 /*return*/, getRecipesByQuery(path, limit)];
        });
    });
}
exports.getRecipesByQty = getRecipesByQty;
function getRecipesByMaxTime(searchInput, appId, appKey, maxTime) {
    return __awaiter(this, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            path = "https://api.edamam.com/api/recipes/v2?type=public&q=".concat(searchInput, "&app_id=").concat(appId, "&app_key=").concat(appKey, "&time=").concat(maxTime);
            return [2 /*return*/, getRecipesByQuery(path)];
        });
    });
}
exports.getRecipesByMaxTime = getRecipesByMaxTime;
function getRecipesByMealType(searchInput, appId, appKey, mealType) {
    return __awaiter(this, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            if (mealType !== 'breakfast' && mealType !== 'lunch' && mealType !== 'dinner' && mealType !== 'snack' && mealType !== 'teatime') {
                throw new Error('Please enter a valid meal type. Choose from breakfast, lunch, dinner, snack, or teatime.');
            }
            path = "https://api.edamam.com/api/recipes/v2?type=public&q=".concat(searchInput, "&app_id=").concat(appId, "&app_key=").concat(appKey, "&mealType=").concat(mealType);
            return [2 /*return*/, getRecipesByQuery(path)];
        });
    });
}
exports.getRecipesByMealType = getRecipesByMealType;
function getBreakfastRecipes(searchInput, appId, appKey) {
    return __awaiter(this, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            path = "https://api.edamam.com/api/recipes/v2?type=public&q=".concat(searchInput, "&app_id=").concat(appId, "&app_key=").concat(appKey, "&mealType=Breakfast");
            return [2 /*return*/, getRecipesByQuery(path)];
        });
    });
}
exports.getBreakfastRecipes = getBreakfastRecipes;