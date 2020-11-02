const productController = require("../../controllers/product");
const productModel = require("../../models/Product");
const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");

//  모델 create해서 진짜로 insert되는 것을 방지하기 위해 mock 함수를 생성
productModel.create = jest.fn();

describe("Product Controller Create", () => {
    it("Shoud have a createProduct function", () => {
        expect(typeof productController.createProduct).toBe("function");
    });

    it("Should call ProductModel.create", () => {
        let req = httpMocks.createRequest();
        let res = httpMocks.createResponse();
        let next = null;
        req.body = newProduct;
        productController.createProduct(req, res, next);

        // productController.createProduct 호출시 productModel.create가 호출 되었는지 확인
        expect(productModel.create).tobeCalledWith(req.body);
    });
});
