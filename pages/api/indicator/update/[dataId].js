import { updateData } from '@database/queries';


export default async function updateIndicator(req, res) {
    try {
      const { dataId } = req.query;
      const newData = req.body;
      const indicator = await updateData(dataId, newData);
  
      res.setHeader("Content-Type", "application/json"); // Establecer el tipo de contenido como JSON
  
      res.status(200).json({ message: "Indicator updated successfully", indicator });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Error updating the indicator" });
    }
  }
  