import { dataByYear } from '@database/queries';

export default async function IndicatorByYear(req, res) {
  try {
    const { indicatorsByYear, page = 1 } = req.query;
    const limit = 20;
    const offset = (page - 1) * limit;

    const data = await dataByYear(indicatorsByYear, limit, offset);

    if (data.indicadores.length === 0) {
      res.status(404).json("I'm sorry, there are no registered data for the selected year.");
    }

    const result = Object.assign({ pagina: page }, data)

    return res.status(200).json([result]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Error retrieving indicators" });
  }
}
