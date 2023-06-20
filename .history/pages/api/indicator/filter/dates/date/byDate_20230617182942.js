import { dataByDate } from '@database/queries';

export default async function IndicatorByDate(req, res) {
    try {
        const { date } = req.query;

        const result = await dataByDate(date);

        if (result.data.length === 0) {
            res.status(404).json("I'm sorry, there are no registered data for the selected date.")
        }

        res.status(200).json(result)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: "Error retrieving indicators" });
    }
}
