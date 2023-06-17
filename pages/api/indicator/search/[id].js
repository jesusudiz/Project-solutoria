import { dataId } from "@database/queries";

export default async function indicatorById (req, res) {
    try {
        const { id } = req.query;


        const data = await dataId(id);


        if (!data) {
            return res.status(404).json({ error: "Indicator not found by ID" });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Error retrieving indicators" });
    }
}
