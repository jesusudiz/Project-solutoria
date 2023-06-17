import { dataByName } from "@database/queries";

export default async function indicatorByName (req, res) {
    try {
        const { name } = req.query;


        const data = await dataByName(name);


        if (data.length===0) {
         return res.status(404).json({ error: "No indicators found for the specified name" });  
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Error retrieving indicators" });
    }
}
