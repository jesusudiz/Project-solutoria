import { deleteData } from "@database/queries";

export default async function deleteIndicator(req,res) {
    try {
        const { id } = req.query;
        const indicator = await deleteData(id)
        return res.status(200).json({ message: "Deletion successful", indicator });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
