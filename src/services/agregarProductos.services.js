import AgregarProdModels from "../models/agregarProductos.models.js";

class AgregarProdService {
    constructor() {
        this.AgregarProdService = new AgregarProdModels()
    }

    getProductsAGR = () => {
        return this.AgregarProdService.getProductsAGR()
    }

    findProductAGR = (idParam) => {
        return this.AgregarProdService.findProductAGR(idParam)
    }

    createProdARG = (data) => {
        return this.AgregarProdService.createProdARG(data)
    }

    updateOneAGR = (ProductId, dataProduct) => {
        return this.AgregarProdService.updateOneAGR(ProductId, dataProduct)
    }

    deleteOneAGR = (ProductId) => {
        return this.AgregarProdService.deleteOneAGR(ProductId)
    }
}

export default AgregarProdService