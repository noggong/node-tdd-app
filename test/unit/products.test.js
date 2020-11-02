const productController = require("../../controllers/product");
const productModel = require("../../models/Product");

//  모델 create해서 진짜로 insert되는 것을 방지하기 위해 mock 함수를 생성
productModel.create = jest.fn();

describe("Product Controller Create", () => {
    it("Shoud have a createProduct function", () => {
        expect(typeof productController.createProduct).toBe("function");
    });

    it("Should call ProductModel.create", () => {
        productController.createProduct();
        expect(productModel.create).toBeCalled();
    });
});
