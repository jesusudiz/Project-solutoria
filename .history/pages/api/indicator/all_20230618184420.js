import {allData }from "@database/queries";

export default async function allIndicator(req, res) {
    try {
        const { page = 1 } = req.query;
        const limit = 20;

        const data = await allData(page, limit);
        data.unshift({page})
        return res.status(200).json([page,...data]);
    } catch (error) {
        return res.status(500).json({ error: "Error retrieving indicators" });
    }
}
