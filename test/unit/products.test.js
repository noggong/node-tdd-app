const productController = require("../../controllers/product");
const productModel = require("../../models/Product");
const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");

//  모델 create해서 진짜로 insert되는 것을 방지하기 위해 mock 함수를 생성
productModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe("Product Controller Create", () => {
    beforeEach(() => {
        req.body = newProduct;
    });

    it("Shoud have a createProduct function", () => {
        expect(typeof productController.createProduct).toBe("function");
    });

    it("Should call ProductModel.create", () => {
        productController.createProduct(req, res, next);

        // productController.createProduct 호출시 productModel.create가 req.body를 인자로 받아 호출 되었는지 확인
        expect(productModel.create).toBeCalledWith(req.body);
    });
});
