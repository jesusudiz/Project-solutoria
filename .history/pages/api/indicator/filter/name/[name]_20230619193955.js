import { dataByName } from "@database/queries";

export default async function indicatorByName(req, res) {
  try {
    const { name, page = 1 } = req.query;
    const limit = 20;
    const offset = (page - 1) * limit;

    const data = await dataByName(name, limit, offset);

    if (data.length === 0) {
      return res.status(404).json({ error: "No indicators found for the specified name" });
    }
    const result = Object.assign({pagina:page},data)

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving indicators" });
  }
}
