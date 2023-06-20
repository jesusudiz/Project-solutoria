import { allData } from "@database/queries";

export default async function allIndicator(req, res) {
    try {
        const { page = 1 } = req.query;
        const limit = 20;

        let data = await allData(page, limit);
        

        const result = Object.assign({pagina:page},data)
        return res.status(200).json([result]);
    } catch (error) {
        return res.status(500).json({ error: "Error retrieving indicators" });
    }
}
