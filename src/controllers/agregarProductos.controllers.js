import AgregarProdService from "../services/agregarProductos.services.js";

const agregarProdService = new AgregarProdService()

export const getProductsAGR = async (req, res) => {
    const products = await agregarProdService.getProductsAGR()
    return res.status(200).render("realTimeProducts", { products })
}

export const findProductAGR = async (req, res) => {
    const ProductId = req.params.pid
    const FindProduct = await agregarProdService.findProductAGR(ProductId)
    return res.status(200).render("realTimeProducts", { FindProduct })
}

export const createProdARG = async (req, res) => {
    const data = req.body
    const create = await agregarProdService.createProdARG(data)
    return res.send({ status: "success", payload: create })
}

export const updateOne = async (req, res) => {
    const ProductId = req.params.pid
    const dataProduct = req.body
    const result = await agregarProdService.updateOneAGR(ProductId, dataProduct)
    return res.send({ Status: "success", payload: result })
}

export const deleteOneAGR = async (req, res) => {
    const ProductId = req.params.pid
    const result = await agregarProdService.deleteOneAGR(ProductId)
    return res.send({ Status: "success", payload: result })
}