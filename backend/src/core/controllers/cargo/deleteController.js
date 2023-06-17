import { request, response } from "express";
import { deleteCargoService } from "../../service/cargo/delete";

export async function deleteCargo(req = request, res = response) {
    const cargoId = req.params.id;
    try { 
        const deletar = await deleteCargoService(cargoId);
        if (!deletar) {
            return res.status(404).json({ error: 'Equipe não encontrada' });
        }
        res.json(deletar);
    } catch (error) {
        console.error('Erro ao buscar cargos:', error);
        res.status(500).json({ error: 'Erro ao buscar cargos' });
      }
}